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
                        <h2>O Mnie</h2>
                    </vue-aos>
                    <p>
                        Nazywam się Ewa Banaś i jestem właścicielką Domu Złote Pola.
                        Zajmuję się organizacją rodzinnych przyjęć i spotkań firmowych. Wielu z Państwa
                        może mnie znać z mojej restauracji BabyCafe.pl, którą prowadziłam w sercu
                        gdańskiego Wrzeszcza przez ponad 10 lat. Restauracja BabyCafe.pl cieszyła się
                        Państwa uznaniem i sympatią dzięki połączeniu rodzinnej atmosfery z domową
                        tradycyjną kuchnią i bawialnią przygotowaną specjalnie dla dzieci. To dla mnie
                        bardzo ważne, żeby w czasie rodzinnych spotkań i przyjęć gościć wszystkich –
                        również najmłodszych.<br><br>
                        Doświadczenie, które zdobyłam w restauracji BabyCafe.pl pozwoliło mi poznać
                        potrzeby
                        i oczekiwania naszych wspaniałych gości. Do dziś odwiedzają nas kolejne pokolenia
                        rodzin,
                        z którymi organizowałam chrzciny, pierwsze urodziny, przyjęcia komunijne, obiady
                        ślubne
                        i wspaniałe świąteczne spotkania.
                        <br><br>
                        W rozwijaniu rodzinnej firmy dbam o to, aby:
                    </p><br>
                    <ul>
                        <li>Goście, którzy nas odwiedzają czuli się Przyjaciółmi Domu Złote Pola.</li>
                        <li>Jedzenie było domowe, przygotowywane tradycyjnymi metodami, z przepisów Mamy
                            i naszego Szefa Kuchni.
                        </li>
                    </ul>
                  <br>
                    <p>Zapraszam Państwa do Domu Złote Pola, który stał się moim domem, miejscem
                        wytchnienia, domem wielopokoleniowym, z tradycjami smaku, rodzinnych przepisów,
                        zapachem ogrodu
                        i serdeczną gościnnością.<br><br>
                        <i>Ewa Banaś</i>
                    </p>
                    <p class="read-more">
                      <router-link :to="{name: 'about'}" v-on:click.native="hideMobileNav">Zobacz, co oferuje Dóm Złote Pola</router-link>
                    </p>

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
        },

        data() {
            return {
                zoom: {
                    key: null,
                    show: false,
                    zoom: null,
                    thumb: null,
                    image: null,
                    fullscreen: false,
                    description: null
                },
                gallery: [
                    {
                        zoom: require('../assets/images/gallery-zoom.jpg'),
                        thumb: require('../assets/images/gallery-thumb.jpg'),
                        image: require('../assets/images/gallery-image.jpg'),
                        description: '<p>1 Zapewniamy Państwu nocleg – Dóm Złote Pola dysponuje komfortowymi dwuosobowymi pokojami dla gości.</p><p>Otwieramy przed Wami drzwi do niezwykłego domu. Wypełnijcie go swoją radością, niezapomnianymi chwilami, wzruszeniami, a także beztroską zabawą. Niech Dóm Złote Pola będzie domem dla całej Waszej rodziny. Zapewniamy gościnność, rodzinną atmosferę, zapachy i smaki domowych potraw z przepisów Mamy.</p>'
                    },
                    {
                        zoom: require('../assets/images/gallery-zoom.jpg'),
                        thumb: require('../assets/images/gallery-thumb.jpg'),
                        image: require('../assets/images/gallery-image.jpg'),
                        description: '<p>2 Zapewniamy Państwu nocleg – Dóm Złote Pola dysponuje komfortowymi dwuosobowymi pokojami dla gości.</p><p>Otwieramy przed Wami drzwi do niezwykłego domu. Wypełnijcie go swoją radością, niezapomnianymi chwilami, wzruszeniami, a także beztroską zabawą. Niech Dóm Złote Pola będzie domem dla całej Waszej rodziny. Zapewniamy gościnność, rodzinną atmosferę, zapachy i smaki domowych potraw z przepisów Mamy.</p>'
                    },
                    {
                        zoom: require('../assets/images/gallery-zoom.jpg'),
                        thumb: require('../assets/images/gallery-thumb.jpg'),
                        image: require('../assets/images/gallery-image.jpg'),
                        description: '<p>3 Zapewniamy Państwu nocleg – Dóm Złote Pola dysponuje komfortowymi dwuosobowymi pokojami dla gości.</p><p>Otwieramy przed Wami drzwi do niezwykłego domu. Wypełnijcie go swoją radością, niezapomnianymi chwilami, wzruszeniami, a także beztroską zabawą. Niech Dóm Złote Pola będzie domem dla całej Waszej rodziny. Zapewniamy gościnność, rodzinną atmosferę, zapachy i smaki domowych potraw z przepisów Mamy.</p>'
                    },
                    {
                        zoom: require('../assets/images/gallery-zoom.jpg'),
                        thumb: require('../assets/images/gallery-thumb.jpg'),
                        image: require('../assets/images/gallery-image.jpg'),
                        description: '<p>4 Zapewniamy Państwu nocleg – Dóm Złote Pola dysponuje komfortowymi dwuosobowymi pokojami dla gości.</p><p>Otwieramy przed Wami drzwi do niezwykłego domu. Wypełnijcie go swoją radością, niezapomnianymi chwilami, wzruszeniami, a także beztroską zabawą. Niech Dóm Złote Pola będzie domem dla całej Waszej rodziny. Zapewniamy gościnność, rodzinną atmosferę, zapachy i smaki domowych potraw z przepisów Mamy.</p>'
                    },
                    {
                        zoom: require('../assets/images/gallery-zoom.jpg'),
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
                    zoom: item.zoom,
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
