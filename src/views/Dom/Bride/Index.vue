<template>
  <div>
    <div class="container relative z-10 mt-24">
      <div class="bride-packages" v-if="pricelists && pricelists[0]">
        <div class="item">
          <div class="text-center">
            <div class="image-shadow shadow-lightest top-left32">
              <img src="@/assets/images/bride/p2.jpg" alt="" class="">
            </div>
            <div class="item-text">
              <h3>MENU<br>WESELNE</h3>
              <p class="font-bold">od {{ pricelists[0].basic_price | price }} zł / osoba</p>
            </div>
            <ul class="read-more-container">
              <li>
                <router-link :to="{name: 'dom-bride-menu1'}">Zobacz menu
                </router-link>
              </li>
              <li><a target="_blank"
                     :href="getFileDownload(pricelists[0].pricelist_pdf)">Pobierz
                PDF</a></li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="text-center">
            <div class="image-shadow shadow-lightest top-left32">
              <img src="@/assets/images/bride/p3.jpg" alt="" class="">
            </div>
            <div class="item-text">
              <h3>MENU<br>WESELNE</h3>
              <p class="font-bold">od {{ pricelists[1].basic_price | price }} zł / osoba</p>
            </div>
            <ul class="read-more-container">
              <li>
                <router-link :to="{name: 'dom-bride-menu2'}">Zobacz menu
                </router-link>
              </li>
              <li><a target="_blank" :href="getFileDownload(pricelists[1].pricelist_pdf)">Pobierz PDF</a></li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="text-center">
            <div class="image-shadow shadow-lightest top-left32">
              <img src="@/assets/images/bride/p4n.jpg" alt="" class="">
            </div>
            <div class="item-text">
              <h3>PRZYKŁADOWE MENU<br>OBIAD ŚLUBNY</h3>
              <p class="font-bold">od {{ pricelists[2].basic_price | price }} zł / osoba</p>
            </div>
            <ul class="read-more-container">
              <li>
                <router-link :to="{name: 'dom-bride-menu3'}">Zobacz menu
                </router-link>
              </li>
              <li><a target="_blank" :href="getFileDownload(pricelists[2].pricelist_pdf)">Pobierz PDF</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container relative z-10">
      <div class="flex flex-col mt-16 lg:flex-row-reverse lg:mt-32">
        <div class="lg:w-1/2 text-center mt-8 lg:mt-0">
          <div class="image-shadow shadow-lightest top-right">
            <image-transition :intervalTimer="4000" :feed="imageTransitions.photos"></image-transition>
          </div>
        </div>
        <div class="text px-16 lg:w-1/2 lg:px-24">
          <vue-aos animation-class="fadeInLeft animated">
            <h2>OBIAD ŚLUBNY<br>WESELE<br>
              <span class="gold"><span class="lowercase">w</span> Domu Złote Pola</span></h2>
          </vue-aos>
          <p><strong class="gold">Powitanie chlebem i solą oraz Apartament dla Pary Młodej w prezencie od Domu</strong>
          </p>
          <br>
          <ul>
            <li>Nowa klimatyzowana sala ponad 210m2</li>
            <li>Kameralne przyjęcia i większe do około 100 osób</li>
            <li>Menu według rodzinnych receptur i autorskich propozycji Szefa kuchni</li>
            <li>Profesjonalna obsługa: Barmani Mikserzy, Bariści, Obsługa kelnerska</li>
            <li>Rodzinna atmosfera</li>
            <li>Bawialnia dla dzieci</li>
            <li>Menu dla dzieci w specjalnej cenie</li>
            <li>Korkowe bez opłat</li>
            <li>Nowoczesne oświetlenie LED RGB</li>
            <li>Projektor, ekran</li>
            <li>Ogród z letnim tarasem</li>
            <li>Pokoje gościnne</li>
            <li>Parking dla gości</li>
            <li>Teren ogrodzony</li>
            <li>Obiekt monitorowany</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueAos from "vue-aos";
import ImageTransition from "@/components/ImageTransition";
import fetchDataMixin from "@/mixins/fetchDataMixin";

export default {
  metaInfo: {
    title: 'Dóm Złote Pola',
    titleTemplate: '%s - Oferta dla pary młodej',
    htmlAttrs: {
      lang: 'pl',
      amp: true
    }
  },
  components: {
    VueAos,
    ImageTransition
  },
  mixins: [fetchDataMixin],
  data: () => ({
    pricelists: [],
    imageTransitions: {
      'photos': [
        require('@/assets/images/bride/btm1.jpg'),
        require('@/assets/images/bride/btm-n1.jpg'),
        require('@/assets/images/bride/btm-f9.jpg'),
        require('@/assets/images/bride/btm-f14.jpg'),
        require('@/assets/images/bride/btm-f27.jpg'),
        require('@/assets/images/bride/btm-n2.jpg'),
        require('@/assets/images/bride/btm-n3.jpg'),
        require('@/assets/images/bride/btm-n4.jpg'),
      ]
    }
  }),
  mounted() {
    let that = this;
    this.fetchData('items/cennik').then(data => {
      that.pricelists = data.data;
    })
  }
}
</script>
