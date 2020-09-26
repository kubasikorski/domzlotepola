<template>
    <footer class="container flex-col lg:flex-row lg:items-end">
        <div class="flex flex-col w-full text-center md:flex-row md:text-left lg:w-2/3">
            <div class="px-14 border-primary-lightest md:w-1/2 lg:border-r">
                <span class="font-bebas text-graphite text-2xl">DÓM ZŁOTE POLA</span>
                <br>ul. Złote Pola 17
                <br>80-297 Miszewo / poczta Banino
            </div>

            <div class="px-14 border-primary-lightest text-center md:w-1/2 lg:border-r">
                <br>© Copyright 2020<br>DÓM ZŁOTE POLA
            </div>
        </div>

        <div class="w-full px-14 text-center mt-4 lg:w-1/3 lg:mt-0 lg:text-right">
            T: <a href="tel:+48 501 317 113">+48 501 317 113</a>
            <br>E: <a href="mailto:rezerwacje@domzlotepola.pl">rezerwacje@domzlotepola.pl</a>
        </div>
        <cookie-law theme="base" buttonText="Zgoda">
            <div slot="message">
                Ta strona korzysta z ciasteczek 🍪 aby świadczyć usługi na najwyższym poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.
            </div>
        </cookie-law>
    </footer>
</template>

<script>
    import CookieLaw from 'vue-cookie-law'
    export default {
        components: {CookieLaw},
        name: 'PageFooter',
    }
</script>
