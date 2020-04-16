<template>
    <banner v-if="useBannerFeed.visible" :size="useBannerFeed.size" :style="{ backgroundImage: `url('${backgroundImage}')` }">
        <vue-aos v-if="useBannerFeed.captionExist" animation-class="fadeIn slow animated">
            <div v-rellax="{speed: 2, center: true}" class="caption">
                <h2 class="font-bebas text-7xl">{{useBannerFeed.lead}}</h2>
                <p class="text-lg leading-normal">{{useBannerFeed.caption}}</p>
                <vue-aos animation-class="slideInUp slow animated">
                    <p class="mt-4">
                        <router-link :to="{name: 'dom',params:{'lang':'pl'}}" class="read-more" v-on:click.native="hideMobileNav">{{useBannerFeed.button}}</router-link>
                    </p>
                </vue-aos>
            </div>
        </vue-aos>
    </banner>
</template>

<script>
    import Banner from "../components/Banner";
    import VueAos from 'vue-aos'

    export default {
        name: 'TopBanner',
        components: {
            Banner,
            VueAos
        },
        props: ['currentRoute'],
        computed: {
            useBannerFeed() {
                if (this.currentRoute in this.bannerFeed) {
                    return this.bannerFeed[this.currentRoute];
                } else {
                    return this.bannerFeed['default'];
                }
            },
            backgroundImage(){
                return this.useBannerFeed.background[0];
            }
        },
        data() {
            return {
                bannerFeed: {
                    home: {
                        captionExist: true,
                        visible:true,
                        size: 'large',
                        background: [
                            require('@/assets/images/banner-top/banner-home.jpg')
                        ],
                        lead: '"Śród takich pól, złotych pól..."',
                        caption: 'Czyste powietrze i sielska atmosfera są idealnym otoczeniem dla wyjątkowych okazji rodzinnych jak i spotkań firmowych. Dóm Złote Pola położony jest wśród łąk i ziemii uprawnych. Do domu należy ogród warzywny z kwiatami i owocami...',
                        button: 'Czytaj o nas'
                    },
                    about: {
                        visible:true,
                        captionExist: false,
                        size: 'extrashort',
                        background: [require('@/assets/images/banner-top/banner-blank.jpg')],
                    },
                    default: {
                        visible:true,
                        captionExist: false,
                        size: 'extrashort',
                        background: [require('@/assets/images/banner-top/banner-blank.jpg')],
                    }
                }
            }
        },
    }
</script>
