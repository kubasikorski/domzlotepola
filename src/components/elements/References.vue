<template>
    <div class="container relative z-10 lg:px-16" :class="{ 'reference-block' : bg == 'true' }">
        <div class="flex flex-col mt-8 lg:flex-row lg:mt-16">
            <vue-aos animation-class="fadeInLeft animated">
                <div class="lg:w-1/2 text-center">
                    <div class="image-shadow top-left">
                        <image-transition :intervalTimer="0" ref="referencesImageTransition"
                                          :feed="references.imageTransitions"></image-transition>
                    </div>
                </div>
            </vue-aos>
            <vue-aos animation-class="fadeInRight animated">
                <div class="text px-16 lg:w-1/2 lg:px-24">
                    <h2>Referencje</h2>
                    <carousel perPage="1" paginationPosition="top" autoplayHoverPause="true" autoplayTimeout="4000"  autoplay="true" @pageChange="slidePageChange">
                        <slide v-bind:key="reference.id" v-for="reference in references.descriptions">
                            <p>
                                {{reference.opis}}
                            </p>
                            <p v-if="reference.podpis!=''">
                                <strong>{{reference.podpis}}</strong>
                            </p>
                            <p v-if="readmore" class="read-more">
                                <a href="https://www.trojmiasto.pl/BabyCafe-pl-o35861.html#opinie" target="_blank">Zobacz więcej opinii</a>
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
        props:['bg','readmore'],
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
                        require('@/assets/images/references/references1.jpg'),
                        require('@/assets/images/references/references2.jpg'),
                        require('@/assets/images/references/references3.jpg'),
                        require('@/assets/images/references/references4.jpg'),
                        require('@/assets/images/references/references5.jpg'),
                        require('@/assets/images/references/references6.jpg'),
                        require('@/assets/images/references/references7.jpg'),
                    ],
                    descriptions: [
                        {
                            id: 1,
                            opis: 'Co za miejsce, co za Ludzie to prowadzą i JAK! Z Miłością!!! Przepyszne, cudownie smacznie przyrządzone jedzenie i ładnie podane, w dodatku duże porcje. Menu bogate, byłam bardzo zaskoczona, że MOŻNA!!! A jadam w Trójmieście, mam porównanie. Wysoka jakość połączona z pomysłem na miejsce, w którym wszyscy dobrze się czują,( bo tę energię WIDAĆ) i goście, i obsługa. Obiad był niezwykłą przyjemnością, tak bym właśnie przyrządziła mięso i krem z pomidorów !! Tatar z łososia bajeczny! kawa wyjątkowo pyszna, mleko bez laktozy jest, smaczne delikatne wino, piękne szkło, świeże kwiaty w pięknej kompozycji...200 proc. satysfakcji :) PASJA-oto co oferują tam gościom :) I love it!!!',
                            podpis: ''
                        }, {
                            id: 2,
                            opis: 'Wyprawialiśmy obiad rodzinny z okazji naszego Ślubu. Dziękujemy za wspaniałą obsługę, przepyszne jedzenie, wszyscy stanęli na wysokości zadania. Zarówno my jak i nasi Goście zachwyceni. Bardzo się cieszymy, że wybraliśmy to miejsce. Dzieci naszych Gości świetnie bawiły się w specjalnie przygotowanej Sali zabaw. Z czystym sumieniem możemy polecić to miejsce przyszłym nowożeńcom.',
                            podpis: 'Patrycja i Marcin'
                        }
                        , {
                            id: 3,
                            opis: '„Zorganizowaliśmy tutaj 90 urodziny naszej mamy. Wspaniałe miejsce. Mieliśmy także do dyspozycji taras co w tym dniu naprawdę się przydał bo pogoda była piękna. Jak sama nazwa wskazuje dzieci są mile widziane i naprawdę nie przeszkadzają starszym a my im 😊 Polecam oczywiście pyszne jedzenie. Brawo”',
                            podpis: 'Czesław'
                        }
                        , {
                            id: 4,
                            opis: '„W minioną sobotę w BabyCafe.pl  (obecnie Dóm Złote Pola) odbyła się rodzinna uroczystość z okazji 2 urodzin mojego synka. Wszystko przebiegło idealnie: pyszne, domowe jedzenie, obsługa sympatyczna i na najwyższym poziomie, wszyscy goście byli zachwyceni po raz kolejny, bo nie była to pierwsza uroczystość, którą tam organizowaliśmy. Serdecznie dziękujemy za wszystko. Jeżeli ktoś poszukuje kameralnego miejsca na organizację chrztu, komunii czy też urodzin dziecka to szczerze polecam, a miejsce do zabawy dla dzieci to dodatkowy atut tego miejsca.”',
                            podpis: 'Monika'
                        }
                        , {
                            id: 5,
                            opis: '„Wyprawialiśmy 30 czerwca chrzciny naszego synka Rysia. Przemiła obsługa i przepyszne domowe jedzenie sprawiły, że zarówno nasi goście jak i my jesteśmy bardzo zadowoleni z przebiegu uroczystości i na pewno będziemy polecali naszym znajomym organizowanie imprez w BabyCafe.pl (obecnie Dóm Złote Pola)”',
                            podpis: ''
                        }
                        , {
                            id: 6,
                            opis: '„Uczestniczyłam w uroczystości I komunii świętej organizowanej w restauracji BabyCafe.pl (obecnie Dóm Złote Pola) Restauracja jest czysta, miło urządzona i udekorowana. Właścicielka restauracji jest przesympatyczną osobą, czynnie biorącą udział w doglądaniu potrzeb klientów. Personel dyskretny, bardzo uprzejmy. W restauracji znajduje się monitorowany pokój zabaw dla dzieci. Super sprawa, ponieważ rodzic popijając spokojnie kawę ma możliwość stałego obserwowania poczynań swojego malucha. W ciepłe dni można zjeść obiad na tarasie. Jedzenie pyszne, smakowało zarówno nam dorosłym jak i maluchom. Pyszne desery. Z czystym sercem polecam restaurację BabyCafe.pl Będę częstym gościem”',
                            podpis: ''
                        }
                        , {
                            id: 7,
                            opis: '„Organizowaliśmy w tym miejscu 2 dniowe szkolenie dla naszych pracowników oraz imprezę firmową. Świetne kameralne miejsce z zapleczem noclegowym. Bardzo smaczne jedzenie, rewelacyjna obsługa. Miło, czysto, czuć rodzinną atmosferę. Wrócimy jeszcze nie jeden raz”',
                            podpis: ''
                        }
                    ]
                },
        }),
        methods: {
            slidePageChange(slideId) {
                this.$refs.referencesImageTransition.setReferencesSlide(slideId);
            },
        }
    }
</script>