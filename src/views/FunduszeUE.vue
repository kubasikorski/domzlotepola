<template>
  <div>
    <div class="container relative z-10">
      <div class="flex flex-col mt-16 lg:flex-row lg:mt-32">
        <div class="text px-16">
        <vue-aos animation-class="fadeInLeft animated">
          <div class="grid xl:grid-cols-4 xl:gap-32 lg:grid-cols-4 lg:gap-8 md:grid-cols-4 md:gap-4 sm:grid-cols-2 sm:gap-16 grid-cols-2 gap-16">
            <div><img alt="Europejskie Fundusze Program Regionalny" title="Europejskie Fundusze Program Regionalny" src="@/assets/images/ue/tl1.png"></div>
            <div><img alt="Rzeczpospolita Polska" title="Rzeczpospolita Polska" src="@/assets/images/ue/tl2.png"></div>
            <div><img alt="Urząd Marszałkowksi Województwa Pomorskiego" title="Urząd Marszałkowksi Województwa Pomorskiego" src="@/assets/images/ue/tl3.png"></div>
            <div><img alt="Unia Europejska- Europejski Fundusz Rozwoju Regionalnego" title="Unia Europejska- Europejski Fundusz Rozwoju Regionalnego" src="@/assets/images/ue/tl4.png"></div>
          </div>
        </vue-aos>
      </div>
      </div>

      <div class="flex flex-col mt-8 lg:flex-row lg:mt-8">
        <div class="text px-16 lg:w-1/2 lg:px-24">
          <br><br>
          <p>
            <strong>Regionalny Program Operacyjny<br>
              Województwa Pomorskiego na lata 2014-2020
              <br>
              Projekt współfinansowany ze środków Unii Europejskiej w ramach Poddziałania
              02.02.01. Inwestycje profilowane - wsparcie dotacyjne</strong>
            <br><br>
            Całkowita wartość projektu: 333 025,59 zł.<br>
            Wartość dofinansowania: 250 000,00 zł.<br>
            <br>
            <strong>Tytuł projektu:</strong><br>
            <br>
            Wykonanie tarasu, ogrodzenia, wyposażenia meblarskiego sali głównej oraz adaptacja części
            <br>
            I piętra na urządzenie pokoi gościnnych z łazienkami i ich
            wyposażenie w łóżka w obiekcie Dóm Złote Pola w Miszewie.
            <br><br>
            <strong>Cele projektu i planowane efekty:</strong>
            <br><br>
            Zadania 1-3 bezpośrednio związane są z rozwiązywaniem barier sanitarno-porządkowych
            związanych z wystąpieniem COVID-19. Są to działania zwiększające bezpieczeństwo
            klientów oraz ułatwiające operacyjne prowadzenie imprez. Efektem ich realizacji jest
            wykonanie tarasu, ogrodzenia, zakup wyposażenia meblarskiego do sali głównej.
            Zadania 4-5 umożliwiają tworzenie kompleksowej oferty organizacji przyjęć
            okolicznościowych (uroczystość + gastronomia + nocleg) i otwierają nowy segment
            działalności (wynajem samoistny) oraz są odpowiedzią na zmieniające się preferencje strony
            popytowej (klient ze względów bezpieczeństwa, w tym sanitarnego, preferuje obiekty z
            noclegiem, by niwelować konieczność przemieszczania się i korzystania z wielu lokalizacji).
            Efektem ich realizacji jest powstanie 6 pokoi z łazienkami + korytarz na wynajem dla gości
            obiektu.<br>
            <br>
            Wspólnym efektem realizacji projektu jest lepsze dostosowanie obiektu Dóm Złote Pola do
            podwyższonych wymogów sanitarnych i organizacyjnych, doinwestowanie obiektu,
            udoskonalenia oferty rynkowej i poszerzenie bazy przychodowej.
          </p>
        </div>
        <div class="lg:w-1/2 text-center mt-8 lg:mt-0">
          <div class="image-shadow shadow-lightest top-right">
            <image-transition :intervalTimer="4000" :feed="imageTransitions.ue"></image-transition>
          </div>
        </div>
      </div>
    </div>
    <div v-rellax="{speed: 5, center: true}" class="leaf"></div>
    <references bg="false" readmore="true"></references>
  </div>
</template>
<script>
import VueAos from 'vue-aos'
import References from "@/components/elements/References";
import ImageTransition from "../components/ImageTransition";

export default {
  metaInfo: {
    title: 'Dóm Złote Pola',
    titleTemplate: '%s - Fundusze UE',
    htmlAttrs: {
      lang: 'pl',
      amp: true
    }
  },
  components: {
    VueAos,
    References,
    ImageTransition
  },
  data() {
    return {
      imageTransitions: {
        'ue': [
          require('@/assets/images/ue/r1.jpg'),
          require('@/assets/images/ue/r2.jpg'),
          require('@/assets/images/ue/r3.jpg'),
          require('@/assets/images/ue/r4.jpg'),
          require('@/assets/images/ue/r5.jpg'),
          require('@/assets/images/ue/r6.jpg'),
        ],
      },
    }
  },
  methods: {}
}
</script>
