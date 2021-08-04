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
      <br><br>
      <div class="flex flex-col mt-8 lg:flex-row lg:mt-8">
        <div class="text px-20 lg:w-1/2">
          <p>
            Europejski Fundusz Rolny na rzecz Rozwoju Obszarów Wiejskich: Europa inwestująca w obszary wiejskie
          </p>
          <p class="read-more-xl">
            <router-link :to="{name: 'fundusze-ue-3'}">Czytaj więcej</router-link>
          </p>
        </div>
      </div>

      <div class="flex flex-col mt-16 lg:flex-row lg:mt-32">
        <div class="text px-16">
            <div
                class="grid xl:grid-cols-4 xl:gap-32 lg:grid-cols-4 lg:gap-8 md:grid-cols-4 md:gap-4 sm:grid-cols-2 sm:gap-16 grid-cols-2 gap-16">
              <div><img alt="Europejskie Fundusze Program Regionalny" title="Europejskie Fundusze Program Regionalny"
                        src="@/assets/images/ue/tl1.png"></div>
              <div><img alt="Rzeczpospolita Polska" title="Rzeczpospolita Polska" src="@/assets/images/ue/tl2.png">
              </div>
              <div><img alt="Urząd Marszałkowski Województwa Pomorskiego"
                        title="Urząd Marszałkowski Województwa Pomorskiego" src="@/assets/images/ue/tl3.png"></div>
              <div><img alt="Unia Europejska- Europejski Fundusz Rozwoju Regionalnego"
                        title="Unia Europejska- Europejski Fundusz Rozwoju Regionalnego"
                        src="@/assets/images/ue/tl4.png"></div>
            </div>
        </div>
      </div>
      <br><br>
      <div class="flex flex-col mt-8 lg:flex-row lg:mt-8">
        <div class="text px-20 lg:w-1/2">
          <p>
            Regionalny Program Operacyjny Województwa Pomorskiego na lata 2014-2020.<br>
            Projekt współfinansowany ze środków Unii Europejskiej<br>
            w ramach Poddziałania 02.02.01.
          </p>
          <p class="read-more-xl">
            <router-link :to="{name: 'fundusze-ue-1'}">Czytaj więcej</router-link>
          </p>
        </div>
        <div class="text px-20 lg:w-1/2">
          <p>
            Regionalny Program Operacyjny Województwa Pomorskiego na lata 2014-2020.<br>
            Projekt grantowy „SPEKTRUM. Pomorski System Usług Doradczych”.
          </p>
          <p class="read-more-xl">
            <router-link :to="{name: 'fundusze-ue-2'}">Czytaj więcej</router-link>
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
