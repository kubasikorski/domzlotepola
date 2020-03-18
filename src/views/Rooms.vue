<template>
    <div>

        <div class="container relative z-10">
            <div class="flex flex-col mt-16 lg:flex-row lg:mt-32">
                <div class="text px-16 lg:w-1/2 lg:px-24">
                    <vue-aos animation-class="fadeInLeft animated">
                        <h2>Pokoje</h2>
                    </vue-aos>
                    <p>
                        Zapewniamy Państwu nocleg – Dóm Złote Pola dysponuje komfortowymi dwuosobowymi pokojami dla
                        gości.
                        <br>Otwieramy przed Wami drzwi do niezwykłego domu. Wypełnijcie go swoją radością,
                        niezapomnianymi chwilami, wzruszeniami, a także beztroską zabawą. Niech Dóm Złote Pola będzie
                        domem dla całej Waszej rodziny. Zapewniamy gościnność, rodzinną atmosferę, zapachy i smaki
                        domowych potraw z przepisów Mamy.
                    </p>
                    <p class="read-more">
                        <a href="#">Oferta dóm złote pola</a>
                    </p>
                </div>
                <div class="lg:w-1/2 text-center">
                    <div class="image-shadow shadow-lightest top-right">
                        <img src="../assets/images/rooms.jpg" alt="" class="">
                    </div>
                </div>
            </div>
        </div>

        <div v-rellax="{speed: 5, center: true}" class="leaf"></div>
        <div class="container relative z-10 lg:px-16">
            <div class="flex flex-col mt-16 lg:flex-row lg:mt-32">
                <div class="lg:w-1/2 text-center">
                    <div class="image-shadow top-left">
                        <img src="../assets/images/home-references.jpg" alt="" class="">
                    </div>
                </div>
                <references-short></references-short>
            </div>
        </div>

    </div>
</template>
<script>
    import VueAos from 'vue-aos'
    import ReferencesShort from "@//components/elements/ReferencesShort";
    export default {
        components: {
            VueAos,
            ReferencesShort,
        },
        metaInfo: {
            title: 'Dóm Złote Pola',
            titleTemplate: '%s - Pokoje',
            htmlAttrs: {
                lang: 'pl',
                amp: true
            }
        },
    }
</script>
