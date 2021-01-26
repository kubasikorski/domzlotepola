<template>
  <div>
    <div class="container relative z-10">
      <div class="flex flex-col mt-16 lg:flex-row lg:mt-32">
        <div class="text px-16">
            <div class="grid xl:grid-cols-4 xl:gap-32 lg:grid-cols-4 lg:gap-8 md:grid-cols-4 md:gap-4 sm:grid-cols-2 sm:gap-16 grid-cols-2 gap-16">
              <div><img alt="Europejskie Fundusze Program Regionalny" title="Europejskie Fundusze Program Regionalny" src="@/assets/images/ue/tl1.png"></div>
              <div><img alt="Rzeczpospolita Polska" title="Rzeczpospolita Polska" src="@/assets/images/ue/tl2.png"></div>
              <div><img alt="Urząd Marszałkowksi Województwa Pomorskiego" title="Urząd Marszałkowksi Województwa Pomorskiego" src="@/assets/images/ue/tl3.png"></div>
              <div><img alt="Unia Europejska- Europejski Fundusz Rozwoju Regionalnego" title="Unia Europejska- Europejski Fundusz Rozwoju Regionalnego" src="@/assets/images/ue/tl4.png"></div>
            </div>
        </div>
      </div>

      <div class="flex flex-col mt-8 lg:flex-row lg:mt-8">
        <div class="text px-16  lg:px-24">
          <br><br>
          <p>
            <strong>Regionalny Program Operacyjny<br>
              Województwa Pomorskiego na lata 2014-2020
              <br>
              Projekt grantowy „SPEKTRUM. Pomorski System Usług Doradczych”.</strong>
            <br><br>
            Całkowita wartość projektu: 35 670,00 zł.<br>
            Wartość dofinansowania: 35 670,00 zł.<br>
            <br>
            <strong>Tytuł projektu:</strong><br>
            <br>
            Specjalistyczne usługi doradcze niwelujące skutki pandemii covid 19.
            <br><br>
            <strong>Cele projektu:</strong>
            <br><br>
            Kompleksowa usługa doradcza w następujących obszarach: zarządzanie i organizacja, finanse, marketing.
          </p>
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
    return {

    }
  },
  methods: {}
}
</script>
