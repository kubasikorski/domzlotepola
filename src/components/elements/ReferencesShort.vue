<template>
    <div class="container relative z-10 lg:px-16">
        <div class="flex flex-col mt-16 lg:flex-row lg:mt-32">
            <div class="lg:w-1/2 text-center">
                <div class="image-shadow top-left">
                    <img src="@/assets/images/references/references1.jpg" alt="" class="">
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
                    <a href="https://www.trojmiasto.pl/BabyCafe-pl-o35861.html#opinie" target="_blank">Zobacz więcej opinii</a>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    import VueAos from 'vue-aos'
    export default {
        name: 'references-short',
        components: {
            VueAos,
        },
        data: () => ({

        }),
    }
</script>