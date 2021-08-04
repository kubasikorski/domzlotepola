<template>
  <div>
    <div class="container relative z-10">
      <div class="flex flex-col mt-16 lg:flex-row lg:mt-32">
        <div class="text px-16">
          <div
              class="grid xl:grid-cols-4 xl:gap-32 lg:grid-cols-4 lg:gap-8 md:grid-cols-4 md:gap-4 sm:grid-cols-2 sm:gap-16 grid-cols-2 gap-16">
            <div><img
                src="@/assets/images/ue/tl1-wies.png"></div>
            <div><img  src="@/assets/images/ue/tl2-wies.png">
            </div>
            <div><img  src="@/assets/images/ue/tl3-wies.png"></div>
            <div><img
                src="@/assets/images/ue/tl4-wies.png"></div>
          </div>
        </div>
      </div>

      <div class="flex flex-col mt-8 lg:flex-row lg:mt-8">
        <div class="text px-16  lg:px-24">
          <br><br>
          <p>
            <strong>„Europejski Fundusz Rolny na rzecz Rozwoju Obszarów Wiejskich:
              Europa inwestująca w obszary wiejskie”.</strong>
            <br>
          <p>Projekt realizowany w ramach poddziałania 19.2 „Wsparcie na wdrażanie operacji w ramach strategii rozwoju
            lokalnego kierowanego przez społeczność” PROW 2014–2020,<br>
            operacja pn.: „Nowoczesne oblicze wypoczynku i biesiadowania w scenerii przepięknych kaszubskich złotych
            pól w gościnnym domu przyjęć Dóm Złote Pola w Miszewie - wyposażenie wysokiej jakości pokoi gościnnych
            oraz zagospodarowanie terenu i części wspólnych obiektu”, której celem jest rozszerzenie możliwości
            komercyjnych gościnnego domu przyjęć Dóm Złote Pola w Miszewie poprzez:</p><br>
          <ul>
            <li>wyposażenie 6 pokoi z łazienkami,</li>
            <li>zagospodarowanie części wspólnych,</li>
            <li>zagospodarowanie otoczenia.</li>
          </ul><br>
          <p>
            Operacja współfinansowana jest ze środków Unii Europejskiej w ramach poddziałania 19.2 „Wsparcie na
            wdrażanie
            operacji w ramach strategii rozwoju lokalnego kierowanego przez społeczność” Programu Rozwoju Obszarów
            Wiejskich
            na lata 2014–2020.</p>
          <br>
          <p>Całkowita wartość operacji: 338 214,64 zł.<br>
            Wartość dofinansowania: 192 478,00 zł.<br>
            <br>
            Instytucja Zarządzająca Programem Rozwoju Obszarów Wiejskich na lata 2014–2020 – Minister Rolnictwa i
            Rozwoju Wsi.
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
    return {}
  },
  methods: {}
}
</script>
