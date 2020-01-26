<template>
    <div>
        <banner :style="{'background-image': `url(${require('../assets/images/banner-home.jpg')})`}"/>

        <div class="container relative z-10">
            <div class="flex flex-col mt-16 lg:flex-row-reverse lg:mt-32">
                <div class="lg:w-1/2 text-center">
                    <div class="image-shadow shadow-lightest top-right">
                        <img src="../assets/images/rooms.jpg" alt="" class="">
                    </div>
                </div>

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
            </div>
        </div>

        <div class="container relative z-10 mt-12 px-16 lg:pl-24 pr-16">
            <div class="text">
                <vue-aos animation-class="fadeInLeft animated">
                    <h2>Galeria</h2>
                </vue-aos>
            </div>

            <div class="gallery">
                <div class="bg-primary-lightest relative flex flex-col items-center justify-center p-8">
                    <img src="../assets/images/gallery-thumb.jpg" alt="" class="opacity-25 absolute inset-0">

                    <h4 class="font-bebas text-3xl">Apartament 1</h4>
                    <img src="../assets/images/gallery-leaf.png" alt="">
                    <p class="text-center font-medium">
                        Otwieramy przed Wami drzwi do niezwykłego domu. Wypełnijcie go swoją radością, niezapomnianymi
                        chwilami, wzruszeniami, a także beztroską zabawą. Niech Dóm Złote Pola będzie domem dla całej
                        Waszej rodziny...
                    </p>
                </div>
                <div>
                    <img src="../assets/images/gallery-thumb.jpg" alt="" class="">
                </div>
                <div>
                    <img src="../assets/images/gallery-thumb.jpg" alt="" class="">
                </div>
                <div>
                    <img src="../assets/images/gallery-thumb.jpg" alt="" class="">
                </div>
                <div>
                    <img src="../assets/images/gallery-thumb.jpg" alt="" class="">
                </div>
                <div>
                    <img src="../assets/images/gallery-thumb.jpg" alt="" class="">
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

                <div class="text px-16 lg:w-1/2 lg:px-24">
                    <vue-aos animation-class="fadeInRight animated">
                        <h2>Referencje</h2>
                    </vue-aos>
                    <p>
                        Co za miejsce, co za Ludzie to prowadzą i JAK! Z Miłością!!! Przepyszne, cudownie smacznie
                        przyrządzone jedzenie i ładnie podane, w dodatku duże porcje.Menu bogate, byłam bardzo
                        zaskoczona, że MOŻNA!!! A jadam w Trójmieście, mam porównanie. Wysoka jakość połączona z
                        pomysłem na miejsce, w którym wszyscy dobrze się czują,( bo tę energię WIDAĆ) i goście, i
                        obsługa. Obiad był niezwykłą przyjemnością, tak bym właśnie przyrządziła mięso i krem z
                        pomidorów !! Tatar z łososia bajeczny! kawa wyjątkowo pyszna, mleko bez laktozy jest, smaczne
                        delikatne wino, piękne szkło, świeże kwiaty w pięknej kompozycji...200 proc. satysfakcji :)
                        PASJA-oto co oferują tam gościom :) I love it!!!
                    </p>
                    <p class="read-more">
                        <a href="#">Czytaj więcej</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import VueAos from 'vue-aos'
    import Banner from "../components/Banner";

    export default {
        components: {
            VueAos,
            Banner
        }
    }
</script>
