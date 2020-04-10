<template>
    <div>

        <div class="container relative z-10">
            <div class="flex flex-col mt-16 lg:flex-row-reverse lg:mt-32">
                <div class="lg:w-1/2 text-center">
                    <div class="image-shadow shadow-lightest top-right">
                        <image-transition :intervalTimer="4000" :feed="imageTransitions.photos"></image-transition>
                    </div>
                </div>

                <div class="text px-16 lg:w-1/2 lg:px-24">
                    <vue-aos animation-class="fadeInLeft animated">
                        <h2>Oferta dla rodzin</h2>
                    </vue-aos>
                    <br>
                    <h3>Chrzciny</h3>
                    <p>Lorem ipsum</p>
                    <br>
                    <h3>Urodziny/Imieniny </h3>
                    <p>Lorem ipsum</p>
                    <br>
                    <h3>Komunie</h3>
                    <p>Lorem ipsum</p>
                    <br>
                    <h3>Spotkania w większym gronie</h3>
                    <p>Lorem ipsum</p>

                </div>
            </div>
        </div>
        <div v-rellax="{speed: 5, center: true}" class="leaf"></div>
        <references-short></references-short>
    </div>
</template>
<script>
    import VueAos from 'vue-aos'
    import ReferencesShort from "@/components/elements/ReferencesShort";
    import ImageTransition from "@/components/ImageTransition";
    export default {
        metaInfo: {
            title: 'Dóm Złote Pola',
            titleTemplate: '%s - Oferta dla rodzin',
            htmlAttrs: {
                lang: 'pl',
                amp: true
            }
        },
        components: {
            VueAos,
            ReferencesShort,
            ImageTransition
        },
        data: () => ({
            imageTransitions: {
                'photos': [
                    require('@/assets/images/families/chrzciny.jpg'),
                    require('@/assets/images/families/urodziny.jpg'),
                ]
            }
        }),
        methods: {
        }
    }
</script>
