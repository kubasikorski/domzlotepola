<template>
    <div class="reference-block container relative z-10 lg:px-16">
        <div class="flex flex-col mt-8 lg:flex-row lg:mt-16">
            <vue-aos animation-class="fadeInLeft animated">
                <div class="lg:w-1/2 text-center">
                    <div class="image-shadow top-left">
                        <image-transition :intervalTimer="2000"
                                          :feed="references.imageTransitions"></image-transition>
                    </div>
                </div>
            </vue-aos>
            <vue-aos animation-class="fadeInRight animated">
                <div class="text px-16 lg:w-1/2 lg:px-24">
                    <h2>Referencje</h2>
                    <carousel :perPage="1">
                        <slide v-bind:key="reference.id" v-for="reference in references.descriptions">
                            <p>
                                {{reference.opis}}
                            </p>
                        </slide>
                    </carousel>
                </div>
            </vue-aos>
        </div>
    </div>
</template>
<script>
    import VueAos from 'vue-aos'
    import {Carousel, Slide} from 'vue-carousel';
    import ImageTransition from "@/components/ImageTransition";
    export default {
        name: 'references',
        components: {
            VueAos,
            Carousel,
            Slide,
            ImageTransition,
        },
        data: () => ({
            references:
                {
                    imageTransitions: [
                        require('@/assets/images/home-references.jpg'),
                        require('@/assets/images/home-about.jpg'),
                        require('@/assets/images/home-rooms.jpg'),
                    ],
                    descriptions: [
                        {
                            id: 1,
                            opis: 'Co za miejsce, co za Ludzie to prowadzą i JAK! Z Miłością!!! Przepyszne, cudownie\n' +
                            '                                smacznie\n' +
                            '                                przyrządzone jedzenie i ładnie podane, w dodatku duże porcje.Menu bogate, byłam\n' +
                            '                                bardzo\n' +
                            '                                zaskoczona, że MOŻNA!!! A jadam w Trójmieście, mam porównanie. Wysoka jakość\n' +
                            '                                połączona z\n' +
                            '                                pomysłem na miejsce, w którym wszyscy dobrze się czują,( bo tę energię WIDAĆ) i\n' +
                            '                                goście, i\n' +
                            '                                obsługa. Obiad był niezwykłą przyjemnością, tak bym właśnie przyrządziła mięso i\n' +
                            '                                krem z\n' +
                            '                                pomidorów !! Tatar z łososia bajeczny! kawa wyjątkowo pyszna, mleko bez laktozy\n' +
                            '                                jest,\n' +
                            '                                smaczne\n' +
                            '                                delikatne wino, piękne szkło, świeże kwiaty w pięknej kompozycji...200 proc.\n' +
                            '                                satysfakcji :)\n' +
                            '                                PASJA-oto co oferują tam gościom :) I love it!!!'
                        }, {
                            id: 2,
                            opis: 'Co za miejsce, co za Ludzie to prowadzą i JAK! Z Miłością!!! Przepyszne, cudownie\n' +
                            '                                smacznie\n' +
                            '                                przyrządzone jedzenie i ładnie podane, w dodatku duże porcje.Menu bogate, byłam\n' +
                            '                                bardzo\n' +
                            '                                zaskoczona, że MOŻNA!!! A jadam w Trójmieście, mam porównanie. Wysoka jakość\n' +
                            '                                połączona z\n' +
                            '                                pomysłem na miejsce, w którym wszyscy dobrze się czują,( bo tę energię WIDAĆ) i\n' +
                            '                                goście, i\n' +
                            '                                obsługa. Obiad był niezwykłą przyjemnością, tak bym właśnie przyrządziła mięso i\n' +
                            '                                krem z\n' +
                            '                                pomidorów !! Tatar z łososia bajeczny! kawa wyjątkowo pyszna, mleko bez laktozy\n' +
                            '                                jest,\n' +
                            '                                smaczne\n' +
                            '                                delikatne wino, piękne szkło, świeże kwiaty w pięknej kompozycji...200 proc.\n' +
                            '                                satysfakcji :)\n' +
                            '                                PASJA-oto co oferują tam gościom :) I love it!!!'
                        }
                    ]
                },
        }),
    }
</script>