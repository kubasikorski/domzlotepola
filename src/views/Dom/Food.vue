<template>
    <div>
        <div class="container relative z-10 lg:px-16">
            <div class="flex flex-col mt-16 lg:flex-row-reverse lg:mt-32">
                <div class="lg:w-1/2 text-center lg:pl-16">
                    <div class="image-shadow shadow-lightest bottom-right">
                        <img src="../../assets/images/menu.jpg" alt="" class="">
                    </div>
                </div>

                <div class="text px-16 lg:w-1/2 lg:px-24">
                    <vue-aos animation-class="fadeInLeft animated">
                        <h2>Nasze jedzenie</h2>
                    </vue-aos>
                    <p>
                        Dobre jedzenie to podstawa udanego spotkania. Kuchnia Domu Złote Pola kieruje się zasadą: ma być
                        smacznie, starannie, domowo i świątecznie.<br>
                        Nasza spiżarnia pełna jest lokalnych produktów, świeżego masła, domowych przetworów, chrupiącego
                        chleba, własnych warzyw, ziół i owoców.<br><br>
                        Wybieramy produkty wysokiej jakości. Korzystamy z przydomowego ogrodu, znamy się z naszymi
                        dostawcami od lat, współpracujemy z gospodarstwami rolnymi.
                    </p>
                </div>
            </div>
        </div>

        <div v-rellax="{speed: 5, center: true}" class="leaf menu"></div>

        <div class="container relative z-10 mt-16 lg:mt-32">
            <div class="flex flex-col items-center">
                <h3 class="font-bebas text-center text-6xl leading-none">Przykładowe dania<br>Domu Złote Pola</h3>
                <img src="../../assets/images/footer-leaf.png" alt="">
            </div>

            <div class="flex justify-center text-center">
                <div class="lg:w-1/2">
                    <h4 class="font-bebas text-4xl leading-none mt-12 text-center border-b border-primary-lightest">
                        Przystawki</h4>
                    <ol class=" list-outside leading-normal mt-8 pl-5">
                        <li class="pb-1">Śledzik w śmietanie na placuszku ziemniaczanym ze świeżym koprem </li>
                        <li class="pb-1">Tatar z siekanej polędwicy wołowej z tradycyjnymi dodatkami      </li>
                    </ol>

                    <h4 class="font-bebas text-4xl leading-none mt-12 text-center border-b border-primary-lightest">
                        Zupy</h4>
                    <ol class=" list-outside leading-normal mt-8 pl-5">
                        <li class="pb-1">Rosół z kurcząt i indyka z domowym makaronem i natką pietruszki</li>
                        <li class="pb-1">Zupa pomidorowa gotowana na świeżych pomidorach z wiejską śmietaną</li>
                        <li class="pb-1">Krem z selera z karmelizowanymi orzechami</li>
                    </ol>

                    <h4 class="font-bebas text-4xl leading-none mt-12 text-center border-b border-primary-lightest">
                        Dania główne</h4>
                    <ol class=" list-outside leading-normal mt-8 pl-5">
                        <li class="pb-1">Udko z kaczki z konfiturą z czerwonej cebuli, czerwoną kapustą z miodem i
                            żurawiną, kluseczki
                        </li>
                        <li class="pb-1">Polędwiczki wieprzowe z sosem śmietanowo – kurkowym i mielonym pieprzem,
                            ziemniaki puree, buraczki z tartym chrzanem
                        </li>
                        <li class="pb-1">Łosoś w sosie śmietanowo- cytrynowym na białym winie ze świeżym rozmarynem,
                            ziemniaki zapieczone pod beszamelem, sałaty
                        </li>
                        <li class="pb-1">Sznycel z cielęciny marynowany w mleku, z jajkiem sadzonym i szczypiorem,
                            ziemniaki z wody z koperkiem, fasola szparagowa
                        </li>
                    </ol>

                    <h4 class="font-bebas text-4xl leading-none mt-12 text-center border-b border-primary-lightest">
                        Domowe wypieki</h4>
                    <ol class=" list-outside leading-normal mt-8 pl-5">
                        <li class="pb-1">Tort czekoladowy z wiśniami na wiśniówce</li>
                        <li class="pb-1">Tort truskawkowy z bezą i świeżą miętą</li>
                        <li class="pb-1">Sernik Cioci Hani z syropem lawendowym</li>
                        <li class="pb-1">Szarlotka z kruszonką z renetą lub antonówką</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueAos from "vue-aos";

    export default {
        metaInfo: {
            title: 'Dóm Złote Pola',
            titleTemplate: '%s - Jedzenie',
            htmlAttrs: {
                lang: 'pl',
                amp: true
            }
        },
        components: {
            VueAos
        }
    }
</script>
