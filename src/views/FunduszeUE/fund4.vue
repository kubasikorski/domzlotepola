<template>
  <div>
    <div class="container relative z-10">
      <div class="flex flex-col mt-16 lg:flex-row lg:mt-32">
        <div class="text px-16">
          <div
              class="grid xl:grid-cols-4 xl:gap-32 lg:grid-cols-4 lg:gap-8 md:grid-cols-4 md:gap-4 sm:grid-cols-2 sm:gap-16 grid-cols-2 gap-16">
            <div><img alt="Europejskie Fundusze Program Regionalny" title="Europejskie Fundusze Program Regionalny"
                      src="@/assets/images/ue/tl1.png"></div>
            <div><img alt="Rzeczpospolita Polska" title="Rzeczpospolita Polska" src="@/assets/images/ue/tl2.png"></div>
            <div><img alt="Urząd Marszałkowski Województwa Pomorskiego"
                      title="Urząd Marszałkowski Województwa Pomorskiego" src="@/assets/images/ue/tl3.png"></div>
            <div><img alt="Unia Europejska- Europejski Fundusz Rozwoju Regionalnego"
                      title="Unia Europejska- Europejski Fundusz Rozwoju Regionalnego" src="@/assets/images/ue/tl4.png">
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col mt-8 lg:flex-row lg:mt-8">
        <div class="text px-16  lg:px-24">
          <br><br>
          <p>
            Sfinansowano w ramach reakcji Unii na pandemię COVID-19  Projekt współfinansowany ze środków Unii Europejskiej o tytule<br>
            <br>
            IMPULS – odbudowa potencjału pomorskich przedsiębiorstw z branży czasu wolnego w ramach Poddziałania 13.1.1. MIKRO, MAŁE i ŚREDNIE PRZEDSIĘBIORSTWA –<br>
            REACT-EU – WSPARCIE DOTACYJNE dla OSI PRIORYTETOWEJ 13.<br>
            ODBUDOWA I ODPORNOŚĆ (REACT-EU) REGIONALNEGO PROGRAMU OPERACYJNEGO WOJEWÓDZTWA POMORSKIEGO NA LATA 2014-2020<br>
          </p>
          <br>
          Całkowita wartość projektu: 241 676,90 zł.<br>
          Wartość dofinansowania: 160 000,00 zł.<br>
          <br>
          <p>
            <strong>Tytuł projektu:</strong><br><br>
            IMPULS odbudowy potencjału przedsiębiorstwa Dóm Złote Pola
              poprzez zakup wyposażenia.<br><br>
            <strong>Cele projektu i planowane efekty:</strong>
            <br><br>
            Projekt rozwojowy przedsiębiorstwa poprawiający jego potencjał konkurencyjny,
            zdolność do rozszerzenia działalności o nowe produkty lub usługi oraz zwiększający
            produktywność, m.in. poprzez wdrażanie nowych lub zmianę dotychczasowych
            rozwiązań produkcyjnych, technologicznych i ekoefektywnych.<br>
            Unowocześnienia składników majątku trwałego i wyposażenia poprzez zakup:<br><br>
          </p>
          <ul>
            <li>instalacji fotowoltaicznej na dachu budynku obiektu Dóm Złote Pola</li>
            <li>baterii prysznicowych stanowiących wyposażenie technologii kuchni</li>
            <li>pergoli z ruchomym dachem lamelowym stanowiącej zadaszenie tarasu ogrodowego</li>
          </ul>
        </div>
      </div>
    </div>
    <div v-rellax="{speed: 5, center: true}" class="leaf"></div>
    <references bg="false" readmore="true"></references>
  </div>
</template>
<script>
import References from "@/components/elements/References";

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
    References,
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
