<template>
    <div>
        <div class="container relative z-10 mt-16 lg:mt-32 food">
            <div class="flex flex-col items-center">
                <vue-aos animation-class="fadeInLeft animated">
                    <h3 class="font-bebas text-center text-6xl leading-none">Przykładowe menu<br>biznes lunch</h3>
                </vue-aos>
                <img src="@/assets/images/footer-leaf.png" alt="">
            </div>
            <div class="flex justify-center text-center">
                <div class="lg:w-1/2">
                    <menu-block v-if="fetchMenu.goracy" :feed="fetchMenu.goracy"/>
                    <menu-block v-if="fetchMenu.salatkowy" :feed="fetchMenu.salatkowy"/>
                    <menu-block v-if="fetchMenu.slodki" :feed="fetchMenu.slodki"/>
                </div>
            </div>
        </div>
        <div class="container relative z-10 mt-16 lg:mt-32 food">
            <div class="container relative z-10 mt-8 lg:mt-8">
                <div class="text px-8 lg:w-1/2 lg:px-24">
                    <p class="read-more-xl">
                        <router-link :to="{name: 'dom-company'}">Powrót do oferty dla firm</router-link>
                    </p>
                </div>
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
            titleTemplate: '%s - Oferta dla firm - Przykładowe menu biznes lunch',
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
                fetchMenu: {
                },
            }
        },
        methods: {
            fetchData(feed) {
                return this.$axios.get('/static/menu/company/'+feed+'.json')
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
            this.fetchData('menu2').then(data => {
                that.fetchMenu = data.menu;
            })
        }
    }
</script>
