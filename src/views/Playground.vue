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
                        <img src="../assets/images/playground/kids1.jpg" alt="" class="">
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
            ReferencesShort
        },
        data() {
            return {}
        },
        methods: {}
    }
</script>
