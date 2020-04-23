<template>
    <div>
        <div class="container relative z-10 mt-16 lg:mt-32 food">
            <div class="flex flex-col items-center">
                <vue-aos animation-class="fadeInLeft animated">
                    <h3 class="font-bebas text-center text-6xl leading-none">Menu<br>od 125 zł / osoba</h3>
                </vue-aos>
                <img src="@/assets/images/footer-leaf.png" alt="">
            </div>
            <div class="flex justify-center text-center">
                <div class="lg:w-1/2">
                    <menu-block v-if="fetchMenu.przystawka" :feed="fetchMenu.przystawka"/>
                    <menu-block v-if="fetchMenu.zupawaza" :feed="fetchMenu.zupawaza"/>
                    <menu-block v-if="fetchMenu.daniaglowne" :feed="fetchMenu.daniaglowne"/>
                    <menu-block v-if="fetchMenu.dodatki" :feed="fetchMenu.dodatki"/>
                    <menu-block v-if="fetchMenu.surowki" :feed="fetchMenu.surowki"/>
                    <menu-block v-if="fetchMenu.deser" :feed="fetchMenu.deser"/>
                    <menu-block v-if="fetchMenu.napojezimne" :feed="fetchMenu.napojezimne"/>
                    <menu-block v-if="fetchMenu.napojegorace" :feed="fetchMenu.napojegorace"/>
                    <div class="mt-16 m-4 pt-4 border-t border-primary-lightest">
                        <p class="leading-relaxed">Cena <span class="font-semibold">od 125 zł</span> za osobę
                            dorosłą<br>(cena
                            zależna od ilości osób i czasu trwania przyjęcia)<br>dzieci do lat 3 bez opłat
                            <br><br>
                            <span class="font-semibold">Specjalnie dla gości Domu Złote Pola<br>przygotowaliśmy dodatkowe propozycje</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center mt-8">
                <vue-aos animation-class="fadeInLeft animated">
                    <h3 class="font-bebas text-center text-6xl leading-none">Menu<br> dla dzieci</h3>
                </vue-aos>
                <img src="@/assets/images/footer-leaf.png" alt="">
            </div>
            <div class="flex justify-center text-center">
                <div class="lg:w-1/2">
                    <menu-block v-if="fetchMenu.dzieci && fetchMenu.dzieci.zupadziecko" :feed="fetchMenu.dzieci.zupadziecko"/>
                    <menu-block v-if="fetchMenu.dzieci && fetchMenu.dzieci.daniaglowne" :feed="fetchMenu.dzieci.daniaglowne"/>
                    <menu-block v-if="fetchMenu.dzieci && fetchMenu.dzieci.dodatki" :feed="fetchMenu.dzieci.dodatki"/>
                    <menu-block v-if="fetchMenu.dzieci && fetchMenu.dzieci.deser" :feed="fetchMenu.dzieci.deser"/>
                    <div class="mt-16 m-4 pt-4 border-t border-primary-lightest">
                        <p class="leading-relaxed">Napoje na stole biesiadnym bez ograniczeń<br>Cena <span
                                class="font-semibold">44 zł</span> za dziecko
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container relative z-10 lg:px-16">
            <div class="flex flex-col mt-4 lg:flex-row lg:mt-4">
                <div class="text px-16 lg:px-24">
                    <ul>
                        <li>Do dyspozycji gości bawialnia dla dzieci bez dodatkowych opłat.</li>
                        <li>Na życzenie gości animacje dla dzieci w bawialni lub ogrodzie. *<br>
                            <span class="italic">*Opieka  Animatorów  w trakcie trwania przyjęcia,  w/g indywidualnej wyceny, zależnej od ilości dzieci, programu i czasu animacji.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="container relative z-10 mt-16 lg:mt-32 food">
            <div class="flex flex-col items-center">
                <vue-aos animation-class="fadeInLeft animated">
                    <h3 class="font-bebas text-center text-6xl leading-none">Bar kawowy Baristy</h3>
                </vue-aos>
                <h4 class="font-bebas text-center text-4xl leading-none">rekomendowany przez mistrza Polski Baristów<br>Latte
                    Art Marcina Michalika</h4>
                <img src="@/assets/images/footer-leaf.png" alt="">
            </div>
            <div class="flex justify-center text-center">
                <div class="lg:w-1/2 mt-6">
                    <p class="leading-relaxed">Proponowane Państwu kawy przygotowujemy zawsze ze świeżo mielonej
                        mieszanki kaw
                        skomponowanej specjalnie dla Domu Złote Pola.
                        Świeżo mieloną kawę zaparzamy w wysokociśnieniowym ekspresie, ręcznie obsługiwanym przez naszych
                        Baristów, aby wydobyć jak największe bogactwo aromatów i smaków.
                    </p>
                    <menu-block v-if="barista.wariant1" :feed="barista.wariant1"/>
                    <menu-block v-if="barista.wariant2" :feed="barista.wariant2"/>
                    <menu-block v-if="barista.wariant3" :feed="barista.wariant3"/>
                    <div class="mt-16 m-4 pt-4 border-t border-primary-lightest">
                        <p class="leading-relaxed italic">
                            wariant 1 – cena 8 zł od osoby<br>
                            wariant 1 + wariant 2 – cena 17 zł od osoby<br>
                            wariant 1 + wariant 2 + wariant 3 –cena 26 zł od osoby<br>
                            (cena menu kawowego powyżej 20 osób)

                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container relative z-10 mt-16 lg:mt-32 food">
            <div class="flex flex-col items-center">
                <vue-aos animation-class="fadeInLeft animated">
                    <h3 class="font-bebas text-center text-6xl leading-none">Napoje chłodzące domowej roboty</h3>
                </vue-aos>
                <h4 class="font-bebas text-center text-4xl leading-none">podane w dzbankach na stole biesiadnym lub
                    bufecie</h4>
                <img src="@/assets/images/footer-leaf.png" alt="">
            </div>
            <div class="flex justify-center text-center">
                <div class="lg:w-1/2 mt-6">
                    <p class="leading-relaxed">
                        <menu-block v-if="napoje && napoje.napoje1" :feed="napoje.napoje1"/>
                    </p>
                    <div class="mt-16 m-4 pt-4 border-t border-primary-lightest">
                        <p class=" leading-relaxed italic">Cena 17,00zł od osoby / 0,5l na osobę</p>
                    </div>
                </div>
            </div>
            <div class="text px-16 lg:px-24 flex justify-center text-center">
                <ul class="text-left">
                    <li>Umożliwiamy dostarczenie własnych alkoholi i zimnych napoi bez dodatkowych opłat.</li>
                    <li>Umożliwiamy dostarczenie dodatkowych własnych ciast i tortów bez dodatkowych opłat za okazaniem
                        dowodu zakupu oraz dostawy bezpośrednio przez cukiernię.
                    </li>
                    <li>Atrakcyjne ceny dla uczestników przyjęć okolicznościowych na pobyt w pokojach gościnnych Domu
                        Złote Pola.
                    </li>
                </ul>
            </div>
            <div class="container relative z-10 mt-8 lg:mt-8">
                <div class="text px-8 lg:w-1/2 lg:px-24">
                    <p class="read-more-xl">
                        <router-link :to="{name: 'dom-family'}">Powrót do oferty dla rodzin</router-link>
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
            titleTemplate: '%s - Oferta dla rodzin - Menu od 89 zł / osoba',
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
                barista: {
                },
                napoje:{
                }
            }
        },
        methods: {
            fetchData(feed) {
                return this.$axios.get('/static/menu/families/'+feed+'.json')
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
            this.fetchData('barista').then(data => {
                that.barista = data.barista;
            })
            this.fetchData('napoje').then(data => {
                that.napoje = data.napoje;
            })
        }
    }
</script>
