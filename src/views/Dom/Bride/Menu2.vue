<template>
  <div>
    <div class="container relative z-10 mt-16 lg:mt-32 food">
      <div class="flex flex-col items-center">
        <vue-aos animation-class="fadeInLeft animated">
          <h3 class="font-bebas text-center text-6xl leading-none">Menu weselne<br>od {{ pricelist.basic_price | price }} zł / osoba
          </h3>
        </vue-aos>
        <img src="@/assets/images/footer-leaf.png" alt="">
      </div>
      <div class="flex justify-center text-center">
        <div class="lg:w-1/2">

          <vue-aos animation-class="fadeIn animated">
            <h4 class="font-bebas text-4xl leading-none mt-12 text-center border-b border-primary-lightest">
              POWITANIE CHLEBEM I SOLĄ</h4>
          </vue-aos>
          <menu-block v-if="fetchMenu.przystawka" :feed="fetchMenu.przystawka"/>
          <menu-block v-if="fetchMenu.zupa" :feed="fetchMenu.zupa"/>
          <menu-block v-if="fetchMenu.daniaglowne" :feed="fetchMenu.daniaglowne"/>
          <menu-block v-if="fetchMenu.dodatki" :feed="fetchMenu.dodatki"/>
          <menu-block v-if="fetchMenu.surowki" :feed="fetchMenu.surowki"/>
          <menu-block v-if="fetchMenu.deser" :feed="fetchMenu.deser"/>
          <p class="mt-4 italic font-semibold">smaki uzgadniane indywidualnie<br>na przykład: </p>
          <menu-block v-if="fetchMenu.deser2" :feed="fetchMenu.deser2"/>
          <p class="mt-4 italic font-semibold">
            jedna pozycja minimum 20 porcji<br>
            sugerowana ilość minimum 2 porcje/osoba
          </p>
          <menu-block v-if="fetchMenu.zakaski" :feed="fetchMenu.zakaski"/>
          <menu-block v-if="fetchMenu.kolacja" :feed="fetchMenu.kolacja"/>
          <menu-block v-if="fetchMenu.popolnocy" :feed="fetchMenu.popolnocy"/>
          <menu-block v-if="fetchMenu.napojezimne" :feed="fetchMenu.napojezimne"/>
          <menu-block v-if="fetchMenu.napojegorace" :feed="fetchMenu.napojegorace"/>

          <div class="mt-16 m-4 pt-4 border-t border-primary-lightest">
            <p class="leading-relaxed">Cena <span class="font-semibold">od {{ pricelist.basic_price | price }} zł</span> za osobę
              dorosłą
              <br>(cena zależna od ilości osób i czasu trwania wesela)
              <br>
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center mt-8">
        <vue-aos animation-class="fadeInLeft animated">
          <h3 class="font-bebas text-center text-6xl leading-none">Menu<br> dla dzieci</h3>
        </vue-aos>
        <img src="@/assets/images/footer-leaf.png" alt="">
      </div>
      <div class="flex justify-center text-center">
        <div class="lg:w-1/2">
          <menu-block v-if="fetchMenu.dzieci && fetchMenu.dzieci.zupa" :feed="fetchMenu.dzieci.zupa"/>
          <menu-block v-if="fetchMenu.dzieci && fetchMenu.dzieci.daniaglowne"
                      :feed="fetchMenu.dzieci.daniaglowne"/>
          <menu-block v-if="fetchMenu.dzieci && fetchMenu.dzieci.dodatki" :feed="fetchMenu.dzieci.dodatki"/>
          <menu-block v-if="fetchMenu.dzieci && fetchMenu.dzieci.deser" :feed="fetchMenu.dzieci.deser"/>
          <menu-block v-if="fetchMenu.dzieci && fetchMenu.dzieci.kolacja" :feed="fetchMenu.dzieci.kolacja"/>
          <div class="mt-16 m-4 pt-4 border-t border-primary-lightest">
            <p class="leading-relaxed">
              80zł/dziecko do 3 lat<br>
              100zł/dziecko od 4 do 10 lat<br>
              indywidualna wycena/dziecko powyżej 10 lat<br>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container relative z-10 lg:px-16">
      <div class="flex flex-col mt-4 lg:flex-row lg:mt-4">
        <div class="text px-16 lg:px-24">
          <ul>
            <li>Do dyspozycji gości bawialnia dla dzieci bez dodatkowych opłat.</li>
            <li>Na życzenie gości animacje dla dzieci w bawialni lub ogrodzie. *<br>
              <span class="italic">*Opieka  Animatorów  w trakcie trwania wesela, w/g indywidualnej wyceny, zależnej od ilości dzieci, programu i czasu animacji.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container relative z-10 mt-16 lg:mt-32 food">
      <div class="flex flex-col items-center">
        <div class="lg:w-1/2 text-center mt-8 lg:mt-0">
          <div class="image-shadow shadow-lightest top-right">
            <img src="@/assets/images/menu/barista.jpg" alt="">
          </div>
        </div>
        <vue-aos animation-class="fadeInLeft animated">
          <h3 class="font-bebas text-center text-6xl leading-none">Bar kawowy Baristy</h3>
        </vue-aos>
        <h4 class="font-bebas text-center text-4xl leading-none">rekomendowany przez mistrza Polski Baristów<br>Latte
          Art Marcina Michalika</h4>
        <img src="@/assets/images/footer-leaf.png" alt="">
      </div>
      <div class="flex justify-center text-center">
        <div class="lg:w-1/2 mt-6">
          <p class="leading-relaxed">Proponowane Państwu kawy przygotowujemy zawsze ze świeżo mielonej
            mieszanki kaw
            skomponowanej specjalnie dla Domu Złote Pola.
            Świeżo mieloną kawę zaparzamy w wysokociśnieniowym ekspresie, ręcznie obsługiwanym przez naszych
            Baristów, aby wydobyć jak największe bogactwo aromatów i smaków.
          </p>
          <menu-block v-if="barista.wariant1" :feed="barista.wariant1"/>
          <menu-block v-if="barista.wariant2" :feed="barista.wariant2"/>
          <menu-block v-if="barista.wariant3" :feed="barista.wariant3"/>
          <div class="mt-16 m-4 pt-4 border-t border-primary-lightest">
            <p class="leading-relaxed italic">
              wariant 1 – cena {{ pricelist.variant1_price | price }} zł / od osoby powyżej 80 osób<br>
              wariant 1 + wariant 2 – cena {{ pricelist.variant2_price | price }} zł / od osoby powyżej 80 osób<br>
              wariant 1 + wariant 2 + wariant 3 – cena {{ pricelist.variant3_price | price }} zł / od osoby powyżej 80 osób<br>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container relative z-10 mt-16 lg:mt-32 food">


      <div class="text px-16 lg:px-24 flex justify-center text-center">
        <ul class="text-left">
          <li>Umożliwiamy dostarczenie własnych alkoholi i zimnych napoi bez dodatkowych opłat.</li>
          <li>Umożliwiamy dostarczenie dodatkowych własnych ciast i tortów bez dodatkowych opłat za okazaniem
            dowodu zakupu oraz dostawy bezpośrednio przez cukiernię.
          </li>
          <li>Krojenie tortu, serwis ciast, bieżące uzupełnianie lodu bez dodatkowych opłat.</li>
          <li>Korzystanie w trakcie przyjęcia weselnego z projektora i ekranu bez dodatkowych opłat.</li>
          <li>Menu dla Zespołu, DJ, Fotografa za 50% ceny menu za osobę.</li>
          <li>Stół wiejski według indywidualnej wyceny.</li>
          <li>Poprawiny według indywidualnej wyceny.</li>
          <li>Atrakcyjne ceny dla uczestników przyjęć okolicznościowych na pobyt w pokojach gościnnych Domu
            Złote Pola.
          </li>
        </ul>
      </div>
      <div class="container relative z-10 mt-8 lg:mt-8">
        <div class="text px-8 lg:w-1/2 lg:px-24">
          <p class="read-more-xl">
            <router-link :to="{name: 'dom-bride'}">Powrót do oferty dla pary młodej</router-link>
          </p>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import VueAos from "vue-aos";
import MenuBlock from "@/components/elements/MenuBlock";
import fetchDataMixin from "@/mixins/fetchDataMixin";

export default {
  metaInfo: {
    title: 'Dóm Złote Pola',
    titleTemplate: '%s - Oferta dla pary młodej - Menu weselne od 395 zł / osoba',
    htmlAttrs: {
      lang: 'pl',
      amp: true
    }
  },
  components: {
    VueAos,
    MenuBlock
  },
  mixins: [fetchDataMixin],
  data() {
    return {
      fetchMenu: {},
      barista: {},
      napoje: {},
      pricelist:{},
    }
  },
  methods: {
    fetchDataJson(feed) {
      return this.$axios.get('/static/menu/' + feed + '.json')
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            throw error.response.data;
          });
    },
  },
  mounted() {
    let that = this;
    this.fetchData('items/cennik/2').then(data => {
      that.pricelist = data.data;
    })
    this.fetchDataJson('brides/menu2').then(data => {
      that.fetchMenu = data.menu;
    })
    this.fetchDataJson('families/barista').then(data => {
      that.barista = data.barista;
    })
    this.fetchDataJson('families/napoje').then(data => {
      that.napoje = data.napoje;
    })
  }
}
</script>
