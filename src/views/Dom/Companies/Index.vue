<template>
    <div>
        <div class="container relative z-10 lg:px-16">
            <div class="mt-16 lg:mt-32">
                <div class="text px-16  lg:px-24">
                    <vue-aos animation-class="fadeInLeft animated">
                        <h2>Oferta dla firm</h2>
                    </vue-aos>
                    <p>
                        W Domu Złote Pola znajduje się sala zaprojektowana do organizacji szkoleń, konferencji, spotkań
                        firmowych i przyjęć okolicznościowych.<br>
                        Zapewniamy profesjonalną obsługę i gościnność.<br>
                        Dobre jedzenie to podstawa udanego spotkania. Kuchnia Domu Złote Pola kieruje się zasadą: ma być
                        smacznie, starannie, domowo i świątecznie.<br>
                        Nasza spiżarnia pełna jest lokalnych produktów, świeżego masła, domowych przetworów, chrupiącego
                        chleba, własnych warzyw, ziół i owoców.
                    </p>
                    <br>

                    <div class="flex">
                        <div class="w-1/6"></div>
                        <div class="w-4/6">
                            <div class="text-right"><p><strong class="gold tracking-wider text-xl">W CELU UZYSKANIA
                                OFERTY FIRMOWEJ ZAPRASZAMY DO KONTAKTU</strong><br></p></div>
                            <div class="text-right"><p> T: +48 501 317 113<br>E: rezerwacje@domzlotepola.pl</p></div>
                        </div>
                        <div class="w-1/6"></div>
                    </div>

                </div>
                <br><br>
                <div class="bride-packages">
                    <div class="item">
                        <div class="text-center">
                            <div class="image-shadow shadow-lightest top-left32">
                                <img src="@/assets/images/companies/photo1-thumb.jpg" alt="" class="">
                            </div>
                            <ul class="read-more-container">
                                <li>
                                    <router-link :to="{name: 'dom-company-menu1'}">Przykładowe menu Bufet kawowy
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item">
                        <div class="text-center">
                            <div class="image-shadow shadow-lightest top-left32">
                                <img src="@/assets/images/companies/photo2-thumb.jpg" alt="" class="">
                            </div>
                            <ul class="read-more-container">
                                <li>
                                    <router-link :to="{name: 'dom-company-menu2'}">Przykładowe menu Biznes Lunch
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item">
                        <div class="text-center">
                            <div class="image-shadow shadow-lightest top-left32">
                                <img src="@/assets/images/companies/photo4-thumb.jpg" alt="" class="">
                            </div>
                            <ul class="read-more-container">
                                <li>
                                    <router-link :to="{name: 'dom-company-menu3'}">Przykładowe menu spotkanie świąteczne
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-rellax="{speed: 5, center: true}" class="leaf menu"></div>
        <div class="container relative z-10 mt-16 lg:mt-32 food">
            <div class="text px-16  lg:px-24">
                <ul>
                    <li>Sala ponad 210m2 do około 100 osób</li>
                    <li>Sala klimatyzowana</li>
                    <li>Projektor</li>
                    <li>Ekran</li>
                    <li>Flipchart</li>
                    <li>Nagłośnienie</li>
                    <li>Mównica</li>
                    <li>Stół prezydialny</li>
                    <li>Bufety kawowe</li>
                    <li>Biznes lunch</li>
                    <li>Uroczyste kolacje</li>
                    <li>Spotkania świąteczne</li>
                    <li>Ogród letni z tarasem</li>
                    <li>Parter dostosowany dla osób niepełnosprawnych</li>
                    <li>Parking</li>
                    <li>Pokoje gościnne</li>
                    <li>Obiekt monitorowany</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import VueAos from "vue-aos";

    export default {
        metaInfo: {
            title: 'Dóm Złote Pola',
            titleTemplate: '%s - Oferta dla firm',
            htmlAttrs: {
                lang: 'pl',
                amp: true
            }
        },
        components: {
            VueAos,
        },
        data() {
            return {}
        },
        methods: {},
        mounted() {

        }
    }
</script>
