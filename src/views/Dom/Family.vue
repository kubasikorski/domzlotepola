<template>
    <div>
        <banner type="short" :style="{'background-image': `url(${require('../../assets/images/banner-home.jpg')})`}"/>

        <div class="container relative z-10">
            <div class="flex flex-col mt-16 lg:flex-row-reverse lg:mt-32">
                <div class="lg:w-1/2 text-center">
                    <div class="image-shadow shadow-lightest top-right">
                        <img src="../../assets/images/rooms.jpg" alt="" class="">
                    </div>
                </div>

                <div class="text px-16 lg:w-1/2 lg:px-24">
                    <vue-aos animation-class="fadeInLeft animated">
                        <h2>Dóm Złote Pola</h2>
                    </vue-aos>
                    <p>
                        Dóm Złote Pola znajduje się w bezpośrednim sąsiedztwie Trójmiasta, przy ul. Złote Pola
                        w urokliwym Miszewie,obok Banina. To doskonała lokalizacja, do której łatwo dojechać
                        z Trójmiasta i z Kaszub. Czyste powietrze i sielska atmosfera są idealnym otoczeniem
                        dla wyjątkowych okazji rodzinnych jak i spotkań firmowych. Dóm Złote Pola położony jest wśród łąk i ziemi uprawnych. Do domu należy ogród warzywny z kwiatami i owocami.
                        W bezpośrednim sąsiedztwie znajduje się ekologiczne gospodarstwo. Do Domu Złote Pola należy uroczy ogród z warzywami, kwiatami i owocami.
                        To tutaj, w otoczeniu natury znajdziecie Państwo miejsce, w którym zorganizujemy dla Was rodzinne chrzciny, wyjątkowe urodziny, przyjęcie komunijne, romantyczne wesele.
                        Nasz Dóm otwieramy również na stylowe firmowe spotkania opłatkowe, Mikołajki czy bankiety.<br>
                        <br>
                        Do Państwa dyspozycji oddajemy piękną, pełną światła salę na przyjęcia, a także przygotowaną specjalnie dla dzieci bawialnię BabyCafe.pl. Do okien Domu Złote Pola zagląda zielony ogród, który daje wytchnienie i koi ciszą, kiedy macie ochotę na zaczerpnięcie świeżego powietrza.<br>
                        <br>
                        Państwa dzieci są u nas bardzo mile widziane, to o ich dobrze spędzony czas zadbaliśmy szczególnie. Bawialnia dziecięca zapewnia rozrywkę i zabawę najmłodszym gościom
                        w czasie przyjęć, a wygodne leżaczki i materace pozwolą odpocząć zmęczonym nóżkom.
                        Zapewniamy Państwu nocleg – Dóm Złote Pola dysponuje komfortowymi dwuosobowymi pokojami dla gości.
                        Otwieramy przed Wami drzwi do niezwykłego domu. Wypełnijcie go swoją radością, niezapomnianymi chwilami, wzruszeniami, a także beztroską zabawą. Niech Dóm Złote Pola będzie domem dla całej Waszej rodziny. Zapewniamy gościnność, rodzinną atmosferę, zapachy i smaki domowych potraw z przepisów Mamy.

                    </p>

                </div>
            </div>
        </div>


        <div v-rellax="{speed: 5, center: true}" class="leaf"></div>

        <div class="container relative z-10 lg:px-16">
            <div class="flex flex-col mt-16 lg:flex-row lg:mt-32">
                <div class="lg:w-1/2 text-center">
                    <div class="image-shadow top-left">
                        <img src="../../assets/images/home-references.jpg" alt="" class="">
                    </div>
                </div>

                <div class="text px-16 lg:w-1/2 lg:px-24">
                    <vue-aos animation-class="fadeInRight animated">
                        <h2>Referencje</h2>
                    </vue-aos>
                    <p>
                        Co za miejsce, co za Ludzie to prowadzą i JAK! Z Miłością!!! Przepyszne, cudownie smacznie
                        przyrządzone jedzenie i ładnie podane, w dodatku duże porcje.Menu bogate, byłam bardzo
                        zaskoczona, że MOŻNA!!! A jadam w Trójmieście, mam porównanie. Wysoka jakość połączona z
                        pomysłem na miejsce, w którym wszyscy dobrze się czują,( bo tę energię WIDAĆ) i goście, i
                        obsługa. Obiad był niezwykłą przyjemnością, tak bym właśnie przyrządziła mięso i krem z
                        pomidorów !! Tatar z łososia bajeczny! kawa wyjątkowo pyszna, mleko bez laktozy jest, smaczne
                        delikatne wino, piękne szkło, świeże kwiaty w pięknej kompozycji...200 proc. satysfakcji :)
                        PASJA-oto co oferują tam gościom :) I love it!!!
                    </p>
                    <p class="read-more">
                        <a href="#">Czytaj więcej</a>
                    </p>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
    import VueAos from 'vue-aos'
    import Banner from "../../components/Banner";
    export default {
        components: {
            VueAos,
            Banner
        },
        data() {
            return {
            }
        },
        methods: {
        }
    }
</script>
