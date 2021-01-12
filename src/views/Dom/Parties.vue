<template>
  <div>
    <div class="container relative z-10">
      <div class="flex flex-col mt-16 lg:flex-row-reverse lg:mt-32">
        <div class="lg:w-1/2 text-center mt-8 lg:mt-0">
          <div class="image-shadow shadow-lightest top-right">
            <image-transition :intervalTimer="4000" :feed="imageTransitions.photos"></image-transition>
          </div>
        </div>
        <div class="text px-16 lg:w-1/2 lg:px-24">
          <vue-aos animation-class="fadeInLeft animated">
            <h2>Przyjęcia okolicznościowe</h2>
          </vue-aos>
          <p>
            Dóm Złote Pola zaprasza do pięknej, pełnej światła sali, na kameralne, jak i większe przyjęcia
            okolicznościowe.<br>
            Bankiety, spotkania z rodziną i przyjaciółmi, chrzciny, komunie, urodziny, bale, obiady ślubne,
            wesela – jesteśmy do Państwa dyspozycji z naszym doświadczeniem, które łączy tradycję z
            nowoczesnością.<br>
            <br>
            Przez ostatnie 10 lat przygotowaliśmy ponad 2800 przyjęć w restauracji BabyCafe.pl tak abyście czuli się
            Państwo u nas swobodnie i komfortowo.<br>
            Zapewniamy naszą gościnność, miłą obsługę, rodzinną atmosferę, zapachy i smaki domowych potraw a
            także fachowe doradztwo w doborze menu i organizacji przyjęć.<br>
            <br>
            Nasza Kuchnia zawsze pachnąca, świeża i domowa.
            Potrawy przygotowujemy na bazie rodzinnych receptur i doświadczenia oraz autorskich pomysłów Szefa kuchni.
            Na życzenie gości przygotowujemy potrawy wegetariańskie i bezglutenowe.<br>
            <br>
            Sala, do której zapraszamy na przyjęcia okolicznościowe jest nowa, przestronna, jasna, z
            widokiem na pola i ogród. Jest idealnie przystosowana do przyjęć tradycyjnych – przy stołach jak
            i stojących. Bezpośrednio z nią sąsiaduje bawialnia BabyCafe.pl dla naszych najmłodszych
            gości.<br>
            <br>
            Dóm Złote Pola to najlepszy adres na efektowne i niezapomniane przyjęcia okolicznościowe.<br>
          </p>
          <br>
          <ul>
            <li>Dóm Złote Pola rekomendowany przez Mistrza Polski Baristów Latte Art Marcina Michalika</li>
            <li>Sala ponad 210m2 do około 100 osób</li>
            <li>Sala klimatyzowana</li>
            <li>Bawialnia dla dzieci</li>
            <li>Pokoje gościnne</li>
            <li>Ogród z tarasem letnim</li>
            <li>Parking dla gości</li>
            <li>Teren ogrodzony</li>
            <li>Obiekt monitorowany</li>
          </ul>
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
import ImageTransition from "@/components/ImageTransition";

export default {
  components: {
    VueAos,
    References,
    ImageTransition,
  },
  metaInfo: {
    title: 'Dóm Złote Pola',
    titleTemplate: '%s - Przyjęcia okolicznościowe',
    htmlAttrs: {
      lang: 'pl',
      amp: true
    }
  },
  data: () => ({
    imageTransitions: {
      'photos': [
        require('@/assets/images/families/ori3.jpg'),
        require('@/assets/images/families/n1.jpg'),
      ]
    }
  }),
  methods: {}
}
</script>