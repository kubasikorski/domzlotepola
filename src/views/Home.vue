<template>
    <div>
        <div class="container relative z-10 lg:px-16">
            <div class="flex flex-col mt-16 lg:flex-row-reverse lg:mt-32">
                <div class="lg:w-1/2 text-center">
                    <div class="image-shadow shadow-lighter top-right">
                        <img src="../assets/images/home-about.jpg" alt="" class="">
                    </div>
                </div>
                <div class="text px-16 lg:w-1/2 lg:px-24">
                    <h2>Dóm Złote Pola</h2>
                    <p>
                        Dóm Złote Pola znajduje się w bezpośrednim sąsiedztwie Trójmiasta, przy ul. Złote Pola w
                        urokliwym Miszewie,obok Banina. To doskonała lokalizacja, do której łatwo dojechać z
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
                            <img src="../assets/images/home-dom.jpg" alt="" class="">
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
                            <image-transition :intervalTimer="4000" :feed="imageTransitions.rooms"></image-transition>
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


        </div>
        <div class="reference-block container relative z-10 lg:px-16">
            <div class="flex flex-col mt-8 lg:flex-row lg:mt-16">
                <vue-aos animation-class="fadeInLeft animated">
                    <div class="lg:w-1/2 text-center">
                        <div class="image-shadow top-left">
                            <image-transition :intervalTimer="2000" :feed="imageTransitions.references"></image-transition>
                        </div>
                    </div>
                </vue-aos>
                <vue-aos animation-class="fadeInRight animated">
                    <div class="text px-16 lg:w-1/2 lg:px-24">
                        <h2>Referencje</h2>
                        <carousel :perPage="1">
                            <slide>
                                <p>
                                    Co za miejsce, co za Ludzie to prowadzą i JAK! Z Miłością!!! Przepyszne, cudownie
                                    smacznie
                                    przyrządzone jedzenie i ładnie podane, w dodatku duże porcje.Menu bogate, byłam
                                    bardzo
                                    zaskoczona, że MOŻNA!!! A jadam w Trójmieście, mam porównanie. Wysoka jakość
                                    połączona z
                                    pomysłem na miejsce, w którym wszyscy dobrze się czują,( bo tę energię WIDAĆ) i
                                    goście, i
                                    obsługa. Obiad był niezwykłą przyjemnością, tak bym właśnie przyrządziła mięso i
                                    krem z
                                    pomidorów !! Tatar z łososia bajeczny! kawa wyjątkowo pyszna, mleko bez laktozy
                                    jest,
                                    smaczne
                                    delikatne wino, piękne szkło, świeże kwiaty w pięknej kompozycji...200 proc.
                                    satysfakcji :)
                                    PASJA-oto co oferują tam gościom :) I love it!!!
                                </p>
                            </slide>
                            <slide>
                                <p>
                                    Co za miejsce, co za Ludzie to prowadzą i JAK! Z Miłością!!! Przepyszne, cudownie
                                    smacznie
                                    przyrządzone jedzenie i ładnie podane, w dodatku duże porcje.Menu bogate, byłam
                                    bardzo
                                    zaskoczona, że MOŻNA!!! A jadam w Trójmieście, mam porównanie. Wysoka jakość
                                    połączona z
                                    pomysłem na miejsce, w którym wszyscy dobrze się czują,( bo tę energię WIDAĆ) i
                                    goście, i
                                    obsługa. Obiad był niezwykłą przyjemnością, tak bym właśnie przyrządziła mięso i
                                    krem z
                                    pomidorów !! Tatar z łososia bajeczny! kawa wyjątkowo pyszna, mleko bez laktozy
                                    jest,
                                    smaczne
                                    delikatne wino, piękne szkło, świeże kwiaty w pięknej kompozycji...200 proc.
                                    satysfakcji :)
                                    PASJA-oto co oferują tam gościom :) I love it!!!
                                </p>
                            </slide>
                            <slide>
                                <p>
                                    Co za miejsce, co za Ludzie to prowadzą i JAK! Z Miłością!!! Przepyszne, cudownie
                                    smacznie
                                    przyrządzone jedzenie i ładnie podane, w dodatku duże porcje.Menu bogate, byłam
                                    bardzo
                                    zaskoczona, że MOŻNA!!! A jadam w Trójmieście, mam porównanie. Wysoka jakość
                                    połączona z
                                    pomysłem na miejsce, w którym wszyscy dobrze się czują,( bo tę energię WIDAĆ) i
                                    goście, i
                                    obsługa. Obiad był niezwykłą przyjemnością, tak bym właśnie przyrządziła mięso i
                                    krem z
                                    pomidorów !! Tatar z łososia bajeczny! kawa wyjątkowo pyszna, mleko bez laktozy
                                    jest,
                                    smaczne
                                    delikatne wino, piękne szkło, świeże kwiaty w pięknej kompozycji...200 proc.
                                    satysfakcji :)
                                    PASJA-oto co oferują tam gościom :) I love it!!!
                                </p>
                            </slide>
                            <slide>
                                <p>
                                    Co za miejsce, co za Ludzie to prowadzą i JAK! Z Miłością!!! Przepyszne, cudownie
                                    smacznie
                                    przyrządzone jedzenie i ładnie podane, w dodatku duże porcje.Menu bogate, byłam
                                    bardzo
                                    zaskoczona, że MOŻNA!!! A jadam w Trójmieście, mam porównanie. Wysoka jakość
                                    połączona z
                                    pomysłem na miejsce, w którym wszyscy dobrze się czują,( bo tę energię WIDAĆ) i
                                    goście, i
                                    obsługa. Obiad był niezwykłą przyjemnością, tak bym właśnie przyrządziła mięso i
                                    krem z
                                    pomidorów !! Tatar z łososia bajeczny! kawa wyjątkowo pyszna, mleko bez laktozy
                                    jest,
                                    smaczne
                                    delikatne wino, piękne szkło, świeże kwiaty w pięknej kompozycji...200 proc.
                                    satysfakcji :)
                                    PASJA-oto co oferują tam gościom :) I love it!!!
                                </p>
                            </slide>
                        </carousel>
                        <p class="read-more">
                            <a href="https://www.trojmiasto.pl/BabyCafe-pl-o35861.html#opinie" target="_blank">Zobacz więcej opinii</a>
                        </p>
                    </div>
                </vue-aos>
            </div>
        </div>
    </div>
</template>

<script>
    import VueAos from 'vue-aos'
    import {Carousel, Slide} from 'vue-carousel';
    import ImageTransition from "../components/ImageTransition";
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
            Carousel,
            Slide,
            ImageTransition
        },
        data: () => ({
            imageTransitions: {
                'references': [
                    require('@/assets/images/home-references.jpg'),
                    require('@/assets/images/home-about.jpg'),
                    require('@/assets/images/home-rooms.jpg'),
                ],
                'rooms': [
                    require('@/assets/images/home-about.jpg'),
                    require('@/assets/images/home-rooms.jpg'),
                ]
            }
        }),
    }
</script>