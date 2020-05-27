<template>
    <div>
        <div class="container relative z-10">
            <div class="flex flex-col mt-16 lg:flex-row-reverse lg:mt-32">
                <div class="lg:w-1/2 text-center mt-8 lg:mt-0">
                    <div class="image-shadow shadow-lightest top-right">
                        <img src="@/assets/images/aboutme.jpg" alt="" class="">
                    </div>
                </div>

                <div class="text px-16 lg:w-1/2 lg:px-24">
                    <h2>Nie znaleziono strony</h2>
                    <p>
                        Przykro nam :(<br>
                        Niestety, strona, której szukasz nie jest obecnie dostępna.<br>
                        Zapraszamy do zapoznania się z naszą ofertą:<br><br>
                    </p>
                    <ul>
                        <li><router-link :to="{name: 'dom-family'}">Oferta dla rodzin</router-link></li>
                        <li><router-link :to="{name: 'dom-bride'}">Oferta dla pary młodej</router-link></li>
                        <li><router-link :to="{name: 'dom-company'}">Oferta dla firm</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        components: {
        },
        metaInfo: {
            title: 'Dóm Złote Pola',
            titleTemplate: '%s - Bład 404 - nie znaleziono strony',
            htmlAttrs: {
                lang: 'pl',
                amp: true
            }
        },
        data() {
            return {}
        },
        methods: {}
    }
</script>