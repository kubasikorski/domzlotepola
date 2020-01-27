<template>
    <div>
        <banner type="short" :style="{'background-image': `url(${require('../assets/images/banner-home.jpg')})`}"/>

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
                <div v-for="(item, key) in gallery" :key="key">
                    <img :src="item.thumb" alt="" class="cursor-pointer" v-on:click="showZoom(key, false)">
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

        <div class="gallery-zoom" :class="{'is-fullscreen': zoom.fullscreen}" v-if="zoom.show">
            <img src="../assets/images/gallery-fullscreen.png" alt="" class="fullscreen" v-on:click="toggleFullscreen">
            <img src="../assets/images/gallery-close.png" alt="" class="close" v-on:click="hideZoom">

            <div :style="{'background-image': `url(${zoom.image})`}" v-if="zoom.fullscreen" class="image">
                <div class="prev" v-on:click="showZoom(zoom.key - 1, true)" v-if="zoom.key > 0">
                    <img src="../assets/images/gallery-prev.png" alt="">
                </div>
                <div class="next" v-on:click="showZoom(zoom.key + 1, true)" v-if="zoom.key + 1 < gallery.length">
                    <img src="../assets/images/gallery-next.png" alt="" >
                </div>
            </div>

            <div class="flex flex-col mt-16 lg:flex-row lg:mt-32" v-if="zoom.fullscreen === false">
                <div class="lg:w-1/2 text-center">
                    <div class="image-shadow shadow-lightest bottom-left relative">
                        <img src="../assets/images/gallery-prev.png" alt="" class="prev" v-on:click="showZoom(zoom.key - 1, false)" v-if="zoom.key > 0">
                        <img :src="zoom.thumb" alt="" class="">
                        <img src="../assets/images/gallery-next.png" alt="" class="next" v-on:click="showZoom(zoom.key + 1, false)" v-if="zoom.key + 1 < gallery.length">
                    </div>
                </div>

                <div class="text px-16 pb-16 lg:w-1/2 lg:px-24">
                    <h2>Pokoje</h2>
                    <div v-html="zoom.description"></div>
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
        },

        data() {
            return {
                zoom: {
                    key: null,
                    show: false,
                    thumb: null,
                    image: null,
                    fullscreen: false,
                    description: null
                },
                gallery: [
                    {
                        thumb: require('../assets/images/gallery-thumb.jpg'),
                        image: require('../assets/images/gallery-image.jpg'),
                        description: '<p>1 Zapewniamy Państwu nocleg – Dóm Złote Pola dysponuje komfortowymi dwuosobowymi pokojami dla gości.</p><p>Otwieramy przed Wami drzwi do niezwykłego domu. Wypełnijcie go swoją radością, niezapomnianymi chwilami, wzruszeniami, a także beztroską zabawą. Niech Dóm Złote Pola będzie domem dla całej Waszej rodziny. Zapewniamy gościnność, rodzinną atmosferę, zapachy i smaki domowych potraw z przepisów Mamy.</p>'
                    },
                    {
                        thumb: require('../assets/images/gallery-thumb.jpg'),
                        image: require('../assets/images/gallery-image.jpg'),
                        description: '<p>2 Zapewniamy Państwu nocleg – Dóm Złote Pola dysponuje komfortowymi dwuosobowymi pokojami dla gości.</p><p>Otwieramy przed Wami drzwi do niezwykłego domu. Wypełnijcie go swoją radością, niezapomnianymi chwilami, wzruszeniami, a także beztroską zabawą. Niech Dóm Złote Pola będzie domem dla całej Waszej rodziny. Zapewniamy gościnność, rodzinną atmosferę, zapachy i smaki domowych potraw z przepisów Mamy.</p>'
                    },
                    {
                        thumb: require('../assets/images/gallery-thumb.jpg'),
                        image: require('../assets/images/gallery-image.jpg'),
                        description: '<p>3 Zapewniamy Państwu nocleg – Dóm Złote Pola dysponuje komfortowymi dwuosobowymi pokojami dla gości.</p><p>Otwieramy przed Wami drzwi do niezwykłego domu. Wypełnijcie go swoją radością, niezapomnianymi chwilami, wzruszeniami, a także beztroską zabawą. Niech Dóm Złote Pola będzie domem dla całej Waszej rodziny. Zapewniamy gościnność, rodzinną atmosferę, zapachy i smaki domowych potraw z przepisów Mamy.</p>'
                    },
                    {
                        thumb: require('../assets/images/gallery-thumb.jpg'),
                        image: require('../assets/images/gallery-image.jpg'),
                        description: '<p>4 Zapewniamy Państwu nocleg – Dóm Złote Pola dysponuje komfortowymi dwuosobowymi pokojami dla gości.</p><p>Otwieramy przed Wami drzwi do niezwykłego domu. Wypełnijcie go swoją radością, niezapomnianymi chwilami, wzruszeniami, a także beztroską zabawą. Niech Dóm Złote Pola będzie domem dla całej Waszej rodziny. Zapewniamy gościnność, rodzinną atmosferę, zapachy i smaki domowych potraw z przepisów Mamy.</p>'
                    },
                    {
                        thumb: require('../assets/images/gallery-thumb.jpg'),
                        image: require('../assets/images/gallery-image.jpg'),
                        description: '<p>5 Zapewniamy Państwu nocleg – Dóm Złote Pola dysponuje komfortowymi dwuosobowymi pokojami dla gości.</p><p>Otwieramy przed Wami drzwi do niezwykłego domu. Wypełnijcie go swoją radością, niezapomnianymi chwilami, wzruszeniami, a także beztroską zabawą. Niech Dóm Złote Pola będzie domem dla całej Waszej rodziny. Zapewniamy gościnność, rodzinną atmosferę, zapachy i smaki domowych potraw z przepisów Mamy.</p>'
                    }
                ]
            }
        },

        methods: {
            showZoom(key, fullscreen) {
                let item = this.gallery[key];

                this.zoom = {
                    key: key,
                    show: true,
                    thumb: item.thumb,
                    image: item.image,
                    fullscreen: fullscreen,
                    description: item.description
                };

                document.body.classList.add('overflow-hidden');
            },

            hideZoom() {
                this.zoom.show = false;
                document.body.classList.remove('overflow-hidden');
            },

            toggleFullscreen() {
                this.zoom.fullscreen = !this.zoom.fullscreen;
            }
        }
    }
</script>
