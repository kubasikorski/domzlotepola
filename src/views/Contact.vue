<template>
    <div>
        <banner :style="{'background-image': `url(${require('../assets/images/banner-home.jpg')})`}">
            <div class="caption">
                <h2>"Śród takich pól przed laty..."</h2>
                <p>
                    Czyste powietrze i sielska atmosfera są idealnym
                    otoczeniem dla wyjątkowych okazji rodzinnych jak i
                    spotkań firmowych. Dóm Złote Pola położony jest
                    wśród łąk i ziemii uprawnych. Do domu należy ogród
                    warzywny z kwiatami i owocami...
                </p>
                <p class="mt-4">
                    <a href="#" class="border border-white font-bebas text-2xl uppercase px-4 pt-px hover:bg-white hover:text-primary">Czytaj o nas</a>
                </p>
            </div>
        </banner>

        <div class="container relative z-10 lg:px-16">
            <div class="flex flex-col mt-16 lg:flex-row-reverse lg:mt-32">
                <div class="lg:w-1/2 text-center lg:pl-16">
                    <div class="image-shadow shadow-lighter top-right">
                        <img src="../assets/images/contact.jpg" alt="" class="">
                    </div>
                </div>

                <div class="text px-16 lg:w-1/2 lg:px-0">
                    <vue-aos animation-class="fadeInLeft animated">
                        <h2>Kontakt</h2>
                    </vue-aos>
                    <p>
                        Dom Złote Pola położony jest w bezpośrednim sąsiedztwie Trójmiasta, przy ul. Złote Pola 17 w
                        Miszewie, w urokliwej, sielskiej okolicy obok Banina. Tutaj wszystko toczy się swoim rytmem i
                        przywodzi na myśl wspomnienia rodzinnego domu z czasów dzieciństwa.
                    </p>
                    <p>
                        Dóm Złote Pola jest otwarty na potrzeby gości, dlatego zapraszamy do umówienia się na spotkanie
                        przy domowym cieście i świeżo mielonej kawie, aby się poznać i zaplanować Wasze wyjątkowe
                        przyjęcie.
                    </p>

                    <form class="mt-4 lg:pr-16">
                        <input type="text" placeholder="Imię i nazwisko" class="appearance-none w-full border-b border-primary-lighter py-2 mt-4 focus:border-primary focus:outline-none">
                        <input type="text" placeholder="Email" class="appearance-none w-full border-b border-primary-lighter py-2 mt-4 focus:border-primary focus:outline-none">
                        <input type="text" placeholder="Telefon" class="appearance-none w-full border-b border-primary-lighter py-2 mt-4 focus:border-primary focus:outline-none">
                        <textarea rows="10" class="appearance-none w-full border border-primary-lighter py-2 mt-4 focus:border-primary focus:outline-none"></textarea>
                        <button type="submit" class="font-bebas uppercase leading-none relative mt-4 border px-4 py-2 hover:text-primary">napisz do mnie</button>
                    </form>

                </div>
            </div>
        </div>

        <div class="h-80 bg-primary-lightest my-8 lg:mt-16 relative z-10">
            <!-- mapa -->
        </div>

        <div v-rellax="{speed: 5, center: true}" class="leaf"></div>

        <div class="container relative z-10 lg:px-16">
            <div class="flex flex-col mt-16 lg:flex-row lg:mt-32">
                <div class="lg:w-1/2 text-center">
                    <div class="image-shadow top-left">
                        <img src="../assets/images/home-references.jpg" alt="" class="">
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
    import Banner from "../components/Banner";
    import VueAos from "vue-aos";

    export default {
        components: {
            Banner,
            VueAos
        }
    }
</script>
