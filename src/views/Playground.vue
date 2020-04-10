<template>
    <div>

        <div class="container relative z-10">
            <div class="flex flex-col mt-16 lg:flex-row lg:mt-32">
                <div class="text px-16 lg:w-1/2 lg:px-24">
                    <vue-aos animation-class="fadeInLeft animated">
                        <h2>Dzieci w domu<br>na złotych polach</h2>
                    </vue-aos>
                    <p>
                        To odpoczynek dla Państwa i zabawa dla dzieci, czyli słowem – przepis na udane spotkanie
                        rodzinne.<br><br>
                        Najmłodszych gości zapraszamy do zabawy w bawialni BabyCafe.pl i do letniego placu zabaw
                        na świeżym powietrzu w ogrodzie. Nasza kuchnia oferuje ulubione dziecięce potrawy,
                        takie jak naleśniki z czekoladą, pierogi z truskawkami, rosół z domowym makaronem,
                        racuszki z jabłkami, z przepisów Babci Krysi.
                    </p>
                </div>
                <div class="lg:w-1/2 text-center">
                    <div class="image-shadow shadow-lightest top-right">
                        <image-transition :intervalTimer="4000" :feed="imageTransitions.kids"></image-transition>
                    </div>
                </div>
            </div>
        </div>
        <div v-rellax="{speed: 5, center: true}" class="leaf"></div>
        <references-short></references-short>
    </div>
</template>
<script>
    import VueAos from 'vue-aos'
    import ReferencesShort from "@//components/elements/ReferencesShort";
    import ImageTransition from "../components/ImageTransition";
    export default {
        metaInfo: {
            title: 'Dóm Złote Pola',
            titleTemplate: '%s - Dzieci w domu na złotych polach',
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
                'kids': [
                    require('@/assets/images/playground/kids1.jpg'),
                    require('@/assets/images/playground/kids2.jpg'),
                ]
            }
        }),
    }
</script>
