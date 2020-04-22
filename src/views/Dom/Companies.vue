<template>
    <div>
        <div class="container relative z-10 lg:px-16">
            <div class="flex flex-col mt-16 lg:flex-row lg:mt-32">


                <div class="text px-16  lg:px-24">
                    <vue-aos animation-class="fadeInLeft animated">
                        <h2>Oferta dla firm</h2>
                    </vue-aos>
                    <p>
                        Dobre jedzenie to podstawa udanego spotkania. Kuchnia Domu Złote Pola kieruje się zasadą: ma być
                        smacznie, starannie, domowo i świątecznie.<br>
                        Nasza spiżarnia pełna jest lokalnych produktów, świeżego masła, domowych przetworów, chrupiącego
                        chleba, własnych warzyw, ziół i owoców.<br><br>
                        Wybieramy produkty wysokiej jakości. Korzystamy z przydomowego ogrodu, znamy się z naszymi
                        dostawcami od lat, współpracujemy z gospodarstwami rolnymi.
                    </p>
                </div>
            </div>
        </div>
        <gallery :feed="gallery"></gallery>
        <div v-rellax="{speed: 5, center: true}" class="leaf menu"></div>

        <div class="container relative z-10 mt-16 lg:mt-32 food">
            <div class="flex flex-col items-center">
                <h3 class="font-bebas text-center text-6xl leading-none">Przykładowe dania<br>Domu Złote Pola</h3>
                <img src="@/assets/images/footer-leaf.png" alt="">
            </div>

            <div class="flex justify-center text-center">
                <div class="lg:w-1/2">
                    <menu-block v-if="fetchMenu.przystawki" :feed="fetchMenu.przystawki"/>
                    <menu-block v-if="fetchMenu.zupy" :feed="fetchMenu.zupy"/>
                    <menu-block v-if="fetchMenu.daniaglowne" :feed="fetchMenu.daniaglowne"/>
                    <menu-block v-if="fetchMenu.domowewypieki" :feed="fetchMenu.domowewypieki"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueAos from "vue-aos";
    import Gallery from "@//components/elements/Gallery";
    import MenuBlock from "@//components/elements/MenuBlock";

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
            Gallery,
            MenuBlock
        },
        data() {
            return {
                fetchMenu: {},
                gallery: {
                    captions: false,
                    canZoom: true,
                    items: [
                        {
                            thumb: require('@/assets/images/companies/photo1-thumb.jpg'),
                            image: require('@/assets/images/companies/photo1-image.jpg'),
                            zoom: require('@/assets/images/companies/photo1-zoom.jpg'),
                            lead: null,
                            description: null
                        },
                        {
                            thumb: require('@/assets/images/companies/photo2-thumb.jpg'),
                            image: require('@/assets/images/companies/photo2-image.jpg'),
                            zoom: require('@/assets/images/companies/photo2-zoom.jpg'),
                            lead: null,
                            description: null
                        },
                        {
                            thumb: require('@/assets/images/companies/photo4-thumb.jpg'),
                            image: require('@/assets/images/companies/photo4-image.jpg'),
                            zoom: require('@/assets/images/companies/photo4-zoom.jpg'),
                            lead: null,
                            description: null
                        },
                    ]
                }
            }
        },
        methods: {
            addData() {
                return this.$axios.get('/static/menu/food.json')
                    .then((response) => {
                        return response.data;
                    })
                    .catch((error) => {
                        throw error.response.data;
                    });
            },
        },
        mounted() {
            let that = this;
            this.addData().then(data => {
                that.fetchMenu = data;
            })
        }
    }
</script>
