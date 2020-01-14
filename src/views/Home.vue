<template>
    <div>
        <banner :style="{'background-image': `url(${require('../assets/images/banner-home.jpg')})`}">
            <div class="caption">
                <h2 class="font-bebas text-7xl">"Śród takich pól przed laty..."</h2>
                <p class="text-lg leading-normal">
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
                <div class="lg:w-1/2 text-center">
                    <div class="image-shadow shadow-lighter top-right">
                        <img src="../assets/images/home-about.jpg" alt="" class="">
                    </div>
                </div>

                <div class="text px-16 lg:w-1/2 lg:px-24">
                    <vue-aos animation-class="fadeInLeft animated">
                        <h2>O mnie</h2>
                    </vue-aos>
                    <p>
                        Nazywam się Ewa Banaś i jestem właścicielką Domu Złote Pola. Zajmuję się organizacją rodzinnych
                        przyjęć i spotkań firmowych. Wielu z Państwa może mnie znać z mojej restauracji BabyCafe.pl,
                        którą prowadziłam w sercu gdańskiego Wrzeszcza przez ponad 10 lat. Restauracja BabyCafe.pl
                        cieszyła się Państwa uznaniem i sympatią dzięki połączeniu rodzinnej atmosfery z domową
                        tradycyjną kuchnią i bawialnią przygotowaną specjalnie dla dzieci. To dla mnie bardzo ważne,
                        żeby w czasie rodzinnych spotkań i przyjęć gościć wszystkich – również najmłodszych.
                    </p>
                    <p>
                        Doświadczenie, które zdobyłam w restauracji BabyCafe.pl pozwoliło mi poznać potrzeby i
                        oczekiwania naszych wspaniałych gości. Do dziś odwiedzają nas kolejne pokolenia rodzin, z
                        którymi organizowałam chrzciny, pierwsze urodziny, przyjęcia komunijne, obiady ślubne i
                        wspaniałe świąteczne spotkania... W rozwijaniu rodzinnej firmy dbam o to, aby: Goście, którzy
                        nas odwiedzają czuli się Przyjaciółmi Domu Złote Pola. Jedzenie było domowe, przygotowywane
                        tradycyjnymi metodami, z przepisów Mamy i naszego Szefa Kuchni.
                    </p>
                    <p class="read-more">
                        <a href="#">Czytaj więcej</a>
                    </p>
                </div>
            </div>

            <div class="flex flex-col mt-16 lg:flex-row lg:mt-32">
                <div class="lg:w-1/2 text-center">
                    <div class="image-shadow shadow-lightest top-left">
                        <img src="../assets/images/home-dom.jpg" alt="" class="">
                    </div>
                </div>

                <div class="text px-16 lg:w-1/2 lg:px-24">
                    <vue-aos animation-class="fadeInRight animated">
                        <h2>Dóm Złote Pola</h2>
                    </vue-aos>
                    <p>
                        Dóm Złote Pola znajduje się w bezpośrednim sąsiedztwie Trójmiasta, przy ul. Złote Pola w
                        urokliwym Miszewie,obok Banina. To doskonała lokalizacja, do której łatwo dojechać z Trójmiasta
                        i z Kaszub. Czyste powietrze i sielska atmosfera są idealnym otoczeniem dla wyjątkowych okazji
                        rodzinnych jak i spotkań firmowych. Dóm Złote Pola położony jest wśród łąk i ziemi uprawnych. Do
                        domu należy ogród warzywny z kwiatami i owocami.
                        <br>W bezpośrednim sąsiedztwie znajduje się ekologiczne gospodarstwo. Do Domu Złote Pola należy
                        uroczy ogród z warzywami, kwiatami i owocami.
                        <br>To tutaj, w otoczeniu natury znajdziecie Państwo miejsce, w którym zorganizujemy dla Was
                        rodzinne chrzciny, wyjątkowe urodziny, przyjęcie komunijne, romantyczne wesele. Nasz Dóm
                        otwieramy również na stylowe firmowe spotkania opłatkowe, Mikołajki czy bankiety.
                        <br>W rozwijaniu rodzinnej firmy dbam o to, aby:
                        <br>Goście, którzy nas odwiedzają czuli się Przyjaciółmi Domu Złote Pola.
                        <br>Jedzenie było domowe, przygotowywane tradycyjnymi metodami, z przepisów Mamy i naszego Szefa
                        Kuchni...
                    </p>
                    <p class="read-more">
                        <a href="#">Czytaj więcej</a>
                    </p>
                </div>
            </div>
        </div>

        <div v-rellax="{speed: 5, center: true}" class="leaf"></div>

        <div class="container relative z-10 lg:px-16">
            <div class="flex flex-col mt-16 lg:flex-row-reverse lg:mt-32">
                <div class="lg:w-1/2 text-center">
                    <div class="image-shadow shadow-lighter top-right">
                        <img src="../assets/images/home-rooms.jpg" alt="" class="">
                    </div>
                </div>

                <div class="text px-16 lg:w-1/2 lg:px-24">
                    <vue-aos animation-class="fadeInLeft animated">
                        <h2>Pokoje</h2>
                    </vue-aos>
                    <p>
                        Zapewniamy Państwu nocleg – Dóm Złote Pola dysponuje komfortowymi dwuosobowymi pokojami dla
                        gości.
                    </p>
                    <p>
                        Otwieramy przed Wami drzwi do niezwykłego domu. Wypełnijcie go swoją radością, niezapomnianymi
                        chwilami, wzruszeniami, a także beztroską zabawą. Niech Dóm Złote Pola będzie domem dla całej
                        Waszej rodziny. Zapewniamy gościnność, rodzinną atmosferę, zapachy i smaki domowych potraw z
                        przepisów Mamy.
                    </p>
                    <p>
                        To odpoczynek dla Państwa i zabawa dla dzieci, czyli słowem – przepis na udane spotkanie
                        rodzinne.
                    </p>
                    <p>
                        Dóm Złote Pola jest otwarty na potrzeby gości, dlatego zapraszamy do umówienia się na spotkanie
                        przy domowym cieście i świeżo mielonej kawie, aby się poznać i zaplanować Wasze wyjątkowe
                        przyjęcie...
                    </p>
                    <p class="read-more">
                        <a href="#">Czytaj więcej</a>
                    </p>
                </div>
            </div>

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
    import VueAos from 'vue-aos'
    import Banner from "../components/Banner";

    export default {
        name: 'home',

        components: {
            Banner,
            VueAos
        }
    }
</script>
