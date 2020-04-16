<template>
    <div>
        <div class="container relative z-10 lg:px-16">
            <div class="flex flex-col mt-16 lg:flex-row">
                <div v-rellax="{speed: 4, center: true}" class="text px-16 lg:w-1/2 lg:px-0">
                    <vue-aos animation-class="fadeInLeft animated">
                        <h2>Dóm Złote Pola</h2>
                    </vue-aos>
                    <p>
                        Dom Złote Pola położony jest w bezpośrednim sąsiedztwie Trójmiasta, przy ul. Złote Pola 17 w
                        Miszewie, w urokliwej, sielskiej okolicy obok Banina. Tutaj wszystko toczy się swoim rytmem i
                        przywodzi na myśl wspomnienia rodzinnego domu z czasów dzieciństwa.
                    </p>
                    <br><br>
                    <h3>Zapraszamy na spotkanie</h3>
                    <p>
                        Dóm Złote Pola jest otwarty na potrzeby gości, dlatego zapraszamy do umówienia się na spotkanie
                        przy domowym cieście i świeżo mielonej kawie, aby się poznać i zaplanować Wasze wyjątkowe
                        przyjęcie.<br>
                    </p><br><br>
                    <h3>Rezerwacje</h3>
                    <p>
                        ul. Złote Pola 17<br>
                        80-297 Miszewo / poczta Banino<br>
                        <br>
                        T: <a href="tel:+48 501 317 113">+48 501 317 113</a>
                        <br>E: <a href="mailto:rezerwacje@domzlotepola.pl">rezerwacje@domzlotepola.pl</a>
                    </p>
                </div>
                <div v-rellax="{speed: 1, center: true}" class="lg:w-1/2 text-center lg:pl-16">
                    <div class="image-shadow shadow-lighter top-right">
                        <img src="../assets/images/kontakt/1.jpg" alt="" class="">
                    </div>
                </div>
            </div>
        </div>
        <div v-rellax="{speed: 5, center: true}" class="leaf"></div>
        <div class="container relative z-10 lg:px-16">
            <div class="text h-120 bg-primary-lightest my-8 lg:mt-16 relative z-10">
                <GmapMap
                        :center="center"
                        :zoom="16"
                        :options="mapStyle"
                        map-type-id="terrain"
                        style="width: 100%; height: 100%">
                    <GmapInfoWindow :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen"
                                    @closeclick="infoWinOpen=false"></GmapInfoWindow>
                    <GmapMarker
                            :key="index"
                            v-for="(m, index) in markers"
                            :position="m.position"
                            :clickable="true"
                            :draggable="false"
                            @click="toggleInfoWindow(m)"
                    />

                </GmapMap>
                <p class="read-more">
                    <a target="_blank"
                       href="https://www.google.com/maps/dir/?api=1&destination=Zlote+Pola+17+Miszewo">Zaprowadź
                        mnie!</a>
                </p>
            </div>
            <br><br>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueAos from "vue-aos";
    import * as VueGoogleMaps from 'vue2-google-maps'
    Vue.use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyC5Bm-E5NjFSkRW6w9jkQkv9i4VNDQF1Ko',
        },
    });
    export default {
        name: 'contact',
        metaInfo: {
            title: 'Dóm Złote Pola',
            titleTemplate: '%s - Kontakt',
            htmlAttrs: {
                lang: 'pl',
                amp: true
            }
        },
        components: {
            VueAos
        },
        data() {
            return {
                center: {lat: 54.392564, lng: 18.374557},
                infoWindowPos: null,
                infoWinOpen: false,
                infoOptions: {
                    content: '',
                    pixelOffset: {
                        width: 0,
                        height: -35
                    }
                },
                markers: [
                    {
                        position: {lat: 54.392564, lng: 18.374557},
                        infoText: '<strong>Dóm Złote Pola</strong><br>ul. Złote Pola 17<br>Miszewo / poczta Banino'
                    }
                ],
                mapStyle: {
                    styles: [
                        {
                            "featureType": "all",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "hue": "#ffaa00"
                                },
                                {
                                    "saturation": "-33"
                                },
                                {
                                    "lightness": "10"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "visibility": "simplified"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text",
                            "stylers": [
                                {
                                    "visibility": "on"
                                }
                            ]
                        }
                    ]
                }
            }
        },
        methods: {
            toggleInfoWindow: function (marker) {
                this.infoWindowPos = marker.position;
                this.infoOptions.content = marker.infoText;
                this.infoWinOpen = !this.infoWinOpen;
            }
        }
    }
</script>