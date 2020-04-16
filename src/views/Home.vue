<template>
    <div>
        <div class="container relative z-10 lg:px-16">
            <div class="flex flex-col mt-16 lg:flex-row-reverse lg:mt-32">
                <div class="lg:w-1/2 text-center">
                    <div class="image-shadow shadow-lighter top-right">
                        <img src="@/assets/images/home/home1.jpg" alt="" class="">
                    </div>
                </div>
                <div class="text px-16 lg:w-1/2 lg:px-24">
                    <h2>Dóm Złote Pola</h2>
                    <p>
                        Dóm Złote Pola znajduje się w bezpośrednim sąsiedztwie Trójmiasta, przy ul. Złote Pola w
                        urokliwym Miszewie, obok Banina. To doskonała lokalizacja, do której łatwo dojechać z
                        Trójmiasta
                        i z Kaszub. Czyste powietrze i sielska atmosfera są idealnym otoczeniem dla wyjątkowych
                        okazji
                        rodzinnych jak i spotkań firmowych. Dóm Złote Pola położony jest wśród łąk i ziemi
                        uprawnych. Do
                        domu należy ogród warzywny z kwiatami i owocami.
                    </p>
                    <p class="read-more">
                        <router-link :to="{name: 'dom'}" v-on:click.native="hideMobileNav">Czytaj więcej
                        </router-link>
                    </p>
                </div>
            </div>

            <div class="flex flex-col mt-16 lg:flex-row lg:mt-32">
                <vue-aos animation-class="fadeInUp animated faster">
                    <div class="lg:w-1/2 text-center">
                        <div class="image-shadow shadow-lightest top-left">
                            <img src="@/assets/images/home/home2.jpg" alt="" class="">
                        </div>
                    </div>
                </vue-aos>
                <vue-aos animation-class="fadeInUp animated">
                    <div class="text px-16 lg:w-1/2 lg:px-24">

                        <h2>Przyjęcia okolicznościowe</h2>
                        <p>
                            Nazywam się Ewa Banaś i jestem właścicielką Domu Złote Pola. Zajmuję się organizacją
                            rodzinnych
                            przyjęć i spotkań firmowych. Wielu z Państwa może mnie znać z mojej restauracji BabyCafe.pl,
                            którą prowadziłam w sercu gdańskiego Wrzeszcza przez ponad 10 lat. Restauracja BabyCafe.pl
                            cieszyła się Państwa uznaniem i sympatią dzięki połączeniu rodzinnej atmosfery z domową
                            tradycyjną kuchnią i bawialnią przygotowaną specjalnie dla dzieci. To dla mnie bardzo ważne,
                            żeby w czasie rodzinnych spotkań i przyjęć gościć wszystkich – również najmłodszych (...)
                        </p>
                        <p class="read-more">
                            <router-link :to="{name: 'about'}" v-on:click.native="hideMobileNav">Czytaj więcej
                            </router-link>
                        </p>
                    </div>
                </vue-aos>
            </div>
        </div>

        <div v-rellax="{speed: 5, center: true}" class="leaf"></div>

        <div class="container relative z-10 lg:px-16">
            <div class="flex flex-col mt-16 lg:flex-row-reverse lg:mt-32">
                <vue-aos animation-class="fadeInUp animated">
                    <div class="lg:w-1/2 text-center">
                        <div class="image-shadow shadow-lighter top-right">
                            <image-transition :intervalTimer="4000" :feed="imageTransitions.kids"></image-transition>
                        </div>
                    </div>
                </vue-aos>
                <vue-aos animation-class="fadeInUp animated faster">
                    <div class="text px-16 lg:w-1/2 lg:px-24">
                        <h2>Bawialnia dla dzieci</h2>

                        <p>
                            To odpoczynek dla Państwa i zabawa dla dzieci, czyli słowem – przepis na udane spotkanie
                            rodzinne.<br><br>
                            Najmłodszych gości zapraszamy do zabawy w bawialni BabyCafe.pl i do letniego placu zabaw
                            na świeżym powietrzu w ogrodzie. Nasza kuchnia oferuje ulubione dziecięce potrawy,
                            takie jak naleśniki z czekoladą, pierogi z truskawkami, rosół z domowym makaronem,
                            racuszki z jabłkami, z przepisów Babci Krysi.
                        </p>
                        <p class="read-more">
                            <router-link :to="{name: 'playground'}" v-on:click.native="hideMobileNav">Czytaj więcej
                            </router-link>
                        </p>
                    </div>
                </vue-aos>
            </div>
            <references bg="true"></references>
        </div>
    </div>
</template>

<script>
    import VueAos from 'vue-aos'
    import ImageTransition from "../components/ImageTransition";
    import References from "../components/elements/References";
    export default {
        name: 'home',
        metaInfo: {
            title: 'Dóm Złote Pola',
            titleTemplate: '%s - Strona główna',
            htmlAttrs: {
                lang: 'pl',
                amp: true
            }
        },
        components: {
            VueAos,
            ImageTransition,
            References
        },
        data: () => ({
            imageTransitions: {
                'kids': [
                    require('@/assets/images/playground/kids1.jpg'),
                    require('@/assets/images/playground/kids2.jpg'),
                ]
            }
        }),
    }
</script>