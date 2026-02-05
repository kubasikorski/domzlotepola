<template>
  <div>
    <div class="container relative z-10 lg:px-16">
      <div class="flex flex-col mt-16 lg:flex-row-reverse lg:mt-32">
        <div class="lg:w-1/2 text-center mt-8 lg:mt-0">
          <div class="image-shadow shadow-lighter top-right">
            <image-transition :intervalTimer="4000"
                              :feed="imageTransitions.dom"></image-transition>
          </div>
        </div>
        <div class="text px-16 lg:w-1/2 lg:px-24">
          <h2>Dóm Złote Pola</h2>
          <p>
            Dóm Złote Pola znajduje się w bezpośrednim sąsiedztwie Trójmiasta, przy ul. Złote Pola w
            urokliwym Miszewie, obok Banina. To doskonała lokalizacja, do której łatwo dojechać z
            Trójmiasta i z Kaszub. Czyste powietrze i sielska atmosfera są idealnym otoczeniem dla
            wyjątkowych
            okazji rodzinnych jak i spotkań firmowych. Dóm Złote Pola położony jest wśród łąk i ziemi
            uprawnych. Do domu należy ogród warzywny z kwiatami i owocami.
          </p>
          <p class="read-more">
            <router-link :to="{name: 'dom'}">Czytaj więcej
            </router-link>
          </p>
        </div>
      </div>

      <div class="flex flex-col mt-16 lg:flex-row lg:mt-32">
        <vue-aos animation-class="fadeInUp animated faster">
          <div class="lg:w-1/2 text-center mt-8 lg:mt-0">
            <div class="image-shadow shadow-lightest top-left">
              <image-transition :intervalTimer="4000"
                                :feed="imageTransitions.przyjecia"></image-transition>
            </div>
          </div>
        </vue-aos>
        <vue-aos animation-class="fadeInUp animated">
          <div class="text px-16 lg:w-1/2 lg:px-24">

            <h2>Przyjęcia okolicznościowe</h2>
            <p>
              Dóm Złote Pola zaprasza do pięknej, pełnej światła sali, na kameralne, jak i większe
              przyjęcia okolicznościowe.<br>
              Bankiety, spotkania z rodziną i przyjaciółmi, chrzciny, komunie, urodziny, bale, obiady
              ślubne, wesela – jesteśmy do Państwa dyspozycji z naszym doświadczeniem, które łączy
              tradycję z nowoczesnością.<br>
              <br>
              Przez ostatnie 10 lat przygotowaliśmy ponad 2800 przyjęć w restauracji BabyCafe.pl tak
              abyście czuli się Państwo u nas swobodnie i komfortowo.<br>
              Zapewniamy naszą gościnność, miłą obsługę, rodzinną atmosferę, zapachy i smaki domowych
              potraw a także fachowe doradztwo w doborze menu i organizacji przyjęć(...)<br>
            </p>
            <p class="read-more">
              <router-link :to="{name: 'dom-parties'}">Czytaj więcej
              </router-link>
            </p>
          </div>
        </vue-aos>
      </div>
    </div>

    <div v-rellax="{speed: 5, center: true}" class="leaf"></div>

    <div class="container relative z-10 lg:px-16">
      <div class="flex flex-col mt-16 lg:flex-row-reverse lg:mt-32">
        <vue-aos animation-class="fadeInUp animated">
          <div class="lg:w-1/2 text-center mt-8 lg:mt-0">
            <div class="image-shadow shadow-lighter top-right">
              <image-transition :intervalTimer="4000" :feed="imageTransitions.kids"></image-transition>
            </div>
          </div>
        </vue-aos>
        <vue-aos animation-class="fadeInUp animated faster">
          <div class="text px-16 lg:w-1/2 lg:px-24">
            <h2>Bawialnia dla dzieci</h2>

            <p>
              To odpoczynek dla Państwa i zabawa dla dzieci, czyli słowem – przepis na udane spotkanie
              rodzinne.<br><br>
              Najmłodszych gości zapraszamy do zabawy w bawialni BabyCafe.pl i do letniego placu zabaw
              na świeżym powietrzu w ogrodzie. Nasza kuchnia oferuje ulubione dziecięce potrawy,
              takie jak naleśniki z czekoladą, pierogi z truskawkami, rosół z domowym makaronem,
              racuszki z jabłkami, z przepisów Babci Krysi.
            </p>
            <p class="read-more">
              <router-link :to="{name: 'playground'}">Czytaj więcej
              </router-link>
            </p>
          </div>
        </vue-aos>
      </div>
      <references bg="true"></references>
    </div>

    <wesele-z-klasa />

    <div class="container relative z-10 lg:px-16 mb-16 text-sm p-4">
      Dóm Złote Pola uzyskał Subwencję Finansową w ramach umowy z Polskim Funduszem Rozwoju S.A. <img class="h-3 inline"
                                                                                                      alt="Polski Fundusze Rozwoju S.A."
                                                                                                      title="Polski Fundusze Rozwoju S.A."
                                                                                                      src="@/assets/images/pfr.png">
    </div>
  </div>
</template>

<script>
import VueAos from 'vue-aos'
import ImageTransition from "../components/ImageTransition";
import WeseleZKlasa from "../components/WeseleZKlasa";
import References from "../components/elements/References";

export default {
  name: 'home',
  metaInfo: {
    title: 'Dóm Złote Pola',
    titleTemplate: '%s - Strona główna',
    htmlAttrs: {
      lang: 'pl',
      amp: true
    }
  },
  components: {
    WeseleZKlasa,
    VueAos,
    ImageTransition,
    References
  },
  data: () => ({
    imageTransitions: {
      'przyjecia': [
        require('@/assets/images/home/home2.jpg'),
        require('@/assets/images/home/home2b.jpg'),
        require('@/assets/images/home/home2c-n.jpg'),
        require('@/assets/images/home/przyjecia1.jpg'),
      ],
      'kids': [
        require('@/assets/images/playground/ori1.jpg'),
        require('@/assets/images/playground/ori2.jpg'),
        require('@/assets/images/playground/kids1.jpg'),
        require('@/assets/images/playground/kids2.jpg'),
      ],
      'dom': [
        require('@/assets/images/home/home0ori.jpg'),
        require('@/assets/images/home/home1.jpg'),
      ]
    }
  }),

}
</script>