<template>
    <div>
        <div class="container relative z-10">
            <div class="flex flex-col mt-16 lg:flex-row lg:mt-32">
                <div class="text px-16 lg:w-1/2 lg:px-24">
                    <vue-aos animation-class="fadeInLeft animated">
                        <h2>O Mnie</h2>
                    </vue-aos>
                    <p>
                        Nazywam się Ewa Banaś i jestem właścicielką Domu Złote Pola.
                        Zajmuję się organizacją rodzinnych przyjęć i spotkań firmowych. Wielu z Państwa
                        może mnie znać z mojej restauracji BabyCafe.pl, którą prowadziłam w sercu
                        gdańskiego Wrzeszcza przez ponad 10 lat. Restauracja BabyCafe.pl cieszyła się
                        Państwa uznaniem i sympatią dzięki połączeniu rodzinnej atmosfery z domową
                        tradycyjną kuchnią i bawialnią przygotowaną specjalnie dla dzieci. To dla mnie
                        bardzo ważne, żeby w czasie rodzinnych spotkań i przyjęć gościć wszystkich –
                        również najmłodszych.<br><br>
                        Doświadczenie, które zdobyłam w restauracji BabyCafe.pl pozwoliło mi poznać
                        potrzeby
                        i oczekiwania naszych wspaniałych gości. Do dziś odwiedzają nas kolejne pokolenia
                        rodzin,
                        z którymi organizowałam chrzciny, pierwsze urodziny, przyjęcia komunijne, obiady
                        ślubne
                        i wspaniałe świąteczne spotkania.
                        <br><br>
                        W rozwijaniu rodzinnej firmy dbam o to, aby:</p><br>
                    <ul>
                        <li>Goście, którzy nas odwiedzają czuli się Przyjaciółmi Domu Złote Pola.</li>
                        <li>Jedzenie było domowe, przygotowywane tradycyjnymi metodami, z przepisów Mamy i naszego Szefa Kuchni.
                        </li>
                    </ul>
                    <br>
                    <p>Zapraszam Państwa do Domu Złote Pola, który stał się moim domem, miejscem
                        wytchnienia, domem wielopokoleniowym, z tradycjami smaku, rodzinnych przepisów,
                        zapachem ogrodu
                        i serdeczną gościnnością.<br><br>
                        <img class="ewa-sign" src="@/assets/images/sign/ewa-banas.png" alt="Ewa Banaś">
                    </p>
                    <p class="read-more">
                        <router-link :to="{name: 'dom'}">Zobacz, co oferuje Dóm Złote Pola</router-link>
                    </p>
                </div>
                <div class="lg:w-1/2 text-center mt-8 lg:mt-0">
                    <div class="image-shadow shadow-lightest top-right">
                        <img src="@/assets/images/aboutme.jpg">
                    </div>
                </div>
            </div>
        </div>
        <div v-rellax="{speed: 5, center: true}" class="leaf"></div>
        <references bg="false"  readmore="true"></references>
    </div>
</template>
<script>
    import VueAos from 'vue-aos'
    import References from "@/components/elements/References";
    export default {
        metaInfo: {
            title: 'Dóm Złote Pola',
            titleTemplate: '%s - O mnie',
            htmlAttrs: {
                lang: 'pl',
                amp: true
            }
        },
        components: {
            VueAos,
            References
        },
        data() {
            return {
            }
        },
        methods: {
        }
    }
</script>
<style>
    .ewa-sign{
        width:50%;
    }
</style>
