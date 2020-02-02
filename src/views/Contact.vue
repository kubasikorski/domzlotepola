<template>
    <div>
        <div class="container relative z-10 lg:px-16">
            <div class="flex flex-col mt-16 lg:flex-row-reverse lg:mt-32">
                <div class="lg:w-1/2 text-center lg:pl-16">
                    <div class="image-shadow shadow-lighter top-right">
                        <img src="../assets/images/contact.jpg" alt="" class="">
                    </div>
                </div>
                <div class="text px-16 lg:w-1/2 lg:px-0">
                    <vue-aos animation-class="fadeInLeft animated">
                        <h2>Kontakt</h2>
                    </vue-aos>
                    <p>
                        Dom Złote Pola położony jest w bezpośrednim sąsiedztwie Trójmiasta, przy ul. Złote Pola 17 w
                        Miszewie, w urokliwej, sielskiej okolicy obok Banina. Tutaj wszystko toczy się swoim rytmem i
                        przywodzi na myśl wspomnienia rodzinnego domu z czasów dzieciństwa.
                    </p>
                    <p>
                        Dóm Złote Pola jest otwarty na potrzeby gości, dlatego zapraszamy do umówienia się na spotkanie
                        przy domowym cieście i świeżo mielonej kawie, aby się poznać i zaplanować Wasze wyjątkowe
                        przyjęcie.
                    </p>
                    <contact-form></contact-form>
                </div>
            </div>
        </div>
        <div v-rellax="{speed: 5, center: true}" class="leaf"></div>
        <div class="container relative z-10 lg:px-16">
        <div class="h-80 bg-primary-lightest my-8 lg:mt-16 relative z-10">
            <GmapMap
                    :center="center"
                    :zoom="16"
                    :options="mapStyle"
                    map-type-id="terrain"
                    style="width: 100%; height: 100%">
                <GmapMarker
                        :key="index"
                        v-for="(m, index) in markers"
                        :position="m.position"
                        :clickable="true"
                        :draggable="false"
                />

            </GmapMap>
        </div>
        </div>
    </div>
</template>

<script>
    import ContactForm from "../components/ContactForm";
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
        components: {
            VueAos,ContactForm
        },
        data() {
            return {
                center:{lat:54.376689 , lng:18.579171},
                markers: [
                    {
                        position: {lat: 54.376689, lng: 18.579171},
                        infoText: '<strong>Marker 1</strong>'
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
    }
</script>
