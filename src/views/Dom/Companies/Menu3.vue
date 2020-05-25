<template>
    <div>
        <div class="container relative z-10 mt-16 lg:mt-32 food">
            <div class="flex flex-col items-center">
                <vue-aos animation-class="fadeInLeft animated">
                    <h3 class="font-bebas text-center text-6xl leading-none">Przykładowe menu<br>spotkanie świąteczne
                    </h3>
                </vue-aos>
                <img src="@/assets/images/footer-leaf.png" alt="">
            </div>
            <div class="flex justify-center text-center">
                <div class="lg:w-1/2">
                    <h4 class="font-bebas text-center text-5xl leading-none mt-8">Bufet Świąteczny<br>12 potraw</h4>
                    <menu-block v-if="fetchMenu.cieple" :feed="fetchMenu.cieple"/>
                    <menu-block v-if="fetchMenu.zimne" :feed="fetchMenu.zimne"/>
                    <menu-block v-if="fetchMenu.dodatki" :feed="fetchMenu.dodatki"/>
                    <h4 class="font-bebas text-center text-5xl leading-none mt-8">Słodkie Świąteczne Przysmaki</h4>
                    <menu-block v-if="fetchMenu.bufet" :feed="fetchMenu.bufet"/>
                    <br>
                    <menu-block v-if="fetchMenu.napoje" :feed="fetchMenu.napoje"/>
                    <div class="mt-16 m-4 pt-4 border-t border-primary-lightest">
                        <p>Wizyta Mikołaja - na życzenie Organizatora<br>
                            Organizujemy bale mikołajkowe dla dzieci Pracowników – wycena indywidualna<br>
                            (na życzenie firm organizujemy zakup paczek z upominkami)</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container relative z-10 mt-8 lg:mt-8">
            <div class="text px-8 lg:w-1/2 lg:px-24">
                <p class="read-more-xl">
                    <router-link :to="{name: 'dom-company'}">Powrót do oferty dla firm</router-link>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    import VueAos from "vue-aos";
    import MenuBlock from "@/components/elements/MenuBlock";

    export default {
        metaInfo: {
            title: 'Dóm Złote Pola',
            titleTemplate: '%s - Oferta dla firm - Przykładowe menu spotkanie świąteczne',
            htmlAttrs: {
                lang: 'pl',
                amp: true
            }
        },
        components: {
            VueAos,
            MenuBlock
        },
        data() {
            return {
                fetchMenu: {},
            }
        },
        methods: {
            fetchData(feed) {
                return this.$axios.get('/static/menu/company/' + feed + '.json')
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
            this.fetchData('menu3').then(data => {
                that.fetchMenu = data.menu;
            })
        }
    }
</script>
