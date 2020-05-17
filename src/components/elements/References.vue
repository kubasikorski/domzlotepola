<template>
    <div class="container relative z-10 lg:px-16" :class="{ 'reference-block' : bg == 'true' }">
        <div class="flex flex-col mt-8 lg:flex-row lg:mt-16">
            <div class="lg:w-1/2 text-center">
                <div class="image-shadow top-left">
                    <image-transition :intervalTimer="0" ref="referencesImageTransition"
                                      :feed="references.imageTransitions"></image-transition>
                </div>
            </div>
            <div class="text px-16 lg:w-1/2 lg:px-24">
                <h2>Opinie gości</h2>
                <carousel :paginationPadding=7 :perPage=1 :loop=true :minSwipeDistance=16 paginationPosition="top"
                          :autoplayHoverPause=false :autoplayTimeout=4000 :autoplay=true @pageChange="slidePageChange">
                    <slide v-bind:key="reference.id" v-for="reference in references.descriptions">
                        <p>
                            {{reference.opis}}
                        </p>
                        <p v-if="reference.podpis!=''">
                            <strong>{{reference.podpis}}</strong>
                        </p>
                    </slide>
                </carousel>
                <p v-if="readmore" class="read-more">
                    <a href="https://www.trojmiasto.pl/BabyCafe-pl-o35861.html#opinie" target="_blank">Zobacz więcej
                        opinii</a>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    import {Carousel, Slide} from 'vue-carousel';
    import ImageTransition from "@/components/ImageTransition";

    export default {
        name: 'references',
        props: ['bg', 'readmore'],
        components: {
            Carousel,
            Slide,
            ImageTransition,
        },
        data: () => ({
            references:
                {
                    imageTransitions: [
                        require('@/assets/images/references/references1.jpg'),
                        require('@/assets/images/references/references2.jpg'),
                        require('@/assets/images/references/references3.jpg'),
                        require('@/assets/images/references/references4b.jpg'),
                        require('@/assets/images/references/references5b.jpg'),
                        require('@/assets/images/references/references6.jpg'),
                        require('@/assets/images/references/references7.jpg'),
                        require('@/assets/images/references/references8.jpg'),
                    ],
                    descriptions:[]
                },
        }),
        mounted() {
            let that = this;
            this.fetchData().then(data => {
                that.references.descriptions = data.references.descriptions;
            })
        },
        methods: {
            fetchData() {
                return this.$axios.get('/static/references/main.json')
                    .then((response) => {
                        return response.data;
                    })
                    .catch((error) => {
                        throw error.response.data;
                    });
            },
            slidePageChange(slideId) {
                this.$refs.referencesImageTransition.setReferencesSlide(slideId);
            },
        }
    }
</script>