<template>
    <div>
        <div class="container relative z-10">
            <div class="flex flex-col mt-16 lg:flex-row-reverse lg:mt-32">
                <div class="lg:w-1/2 text-center mt-8 lg:mt-0">
                    <div class="image-shadow shadow-lightest top-right">
                        <image-transition :intervalTimer="4000" :feed="imageTransitions.photos"></image-transition>
                    </div>
                </div>
                <div class="text px-16 lg:w-1/2 lg:px-24">
                    <vue-aos animation-class="fadeInLeft animated">
                        <h2>Oferta dla rodzin</h2>
                    </vue-aos>
                    <p>
                        Dóm Złote Pola otwiera drzwi przed wszystkimi, którzy chcą w sielskiej atmosferze cieszyć się
                        swoją rodziną, przyjaciółmi, znajomymi i wspólnie z nimi przeżywać najpiękniejsze chwile podczas
                        komunii, chrztów, wesel, urodzin, imienin czy uroczystych obiadów.
                    </p>
                    <br>
                    <ul>
                        <li>Chrzciny</li>
                        <li>Pierwsze urodziny</li>
                        <li>Komunie</li>
                        <li>Przyjęcia okolicznościowe</li>
                    </ul>
                    <p class="read-more">
                        <router-link :to="{name: 'dom-parties'}">Czytaj więcej
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
        <div v-rellax="{speed: 5, center: true}" class="leaf"></div>
        <div class="container relative z-10">
            <br>
            <div class="bride-packages">
                <div class="item">
                    <div class="text-center">
                        <div class="item-text">
                            <h3>Przykładowe<br>MENU</h3>
                            <p class="font-bold">od 89 zł / osoba</p>
                        </div>
                    </div>
                    <ul class="read-more-container">
                        <li>
                            <router-link :to="{name: 'dom-family-menu-od-89-zl'}">Zobacz menu
                            </router-link>
                        </li>
                        <li>
                            <a target="_blank" href="/pdf/family/menu-89zl.pdf">Pobierz PDF</a>
                        </li>
                    </ul>
                </div>
                <div class="item">
                    <div class="text-center">
                        <div class="item-text">
                            <h3>Przykładowe<br>MENU</h3>
                            <p class="font-bold">od 125 zł / osoba</p>
                        </div>
                        <ul class="read-more-container">
                            <li>
                                <router-link :to="{name: 'dom-family-menu-od-125-zl'}">Zobacz menu
                                </router-link>
                            </li>
                            <li>
                                <a target="_blank" href="/pdf/family/menu-125zl.pdf">Pobierz PDF</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="item">
                    <div class="text-center">
                        <div class="item-text">
                            <h3>Przykładowe<br>MENU</h3>
                            <p class="font-bold">od 188 zł / osoba</p>
                        </div>
                        <ul class="read-more-container">
                            <li>
                                <router-link :to="{name: 'dom-family-menu-od-188-zl'}">Zobacz menu
                                </router-link>
                            </li>
                            <li>
                                <a target="_blank" href="/pdf/family/menu-188zl.pdf">Pobierz PDF</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br><br><br><br>
        </div>
    </div>
</template>
<script>
    import VueAos from 'vue-aos'
    import ImageTransition from "@/components/ImageTransition";
    export default {
        metaInfo: {
            title: 'Dóm Złote Pola',
            titleTemplate: '%s - Oferta dla rodzin',
            htmlAttrs: {
                lang: 'pl',
                amp: true
            }
        },
        components: {
            VueAos,
            ImageTransition
        },
        data: () => ({
            imageTransitions: {
                'photos': [
                    require('@/assets/images/families/ori1.jpg'),
                    require('@/assets/images/families/ori2.jpg'),
                    require('@/assets/images/families/kids.jpg'),
                    require('@/assets/images/families/chrzciny.jpg'),
                    require('@/assets/images/families/urodziny.jpg'),
                    require('@/assets/images/families/komunie.jpg'),
                    require('@/assets/images/families/n1.jpg'),
                    require('@/assets/images/families/n2.jpg'),
                ]
            }
        }),
        methods: {}
    }
</script>
