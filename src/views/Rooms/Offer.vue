<template>
  <div>
    <div class="container relative z-10">
      <div class="flex flex-col mt-16 lg:flex-row lg:mt-32">
        <div class="text px-16 lg:w-1/2 lg:px-24">
          <vue-aos animation-class="fadeInLeft animated">
            <h2>Pokoje gościnne - oferta</h2>
          </vue-aos>
          <p>
            W Domu Złote Pola znajdują się apartamenty i pokoje gościnne umieszczone na pierwszym piętrze
            budynku.<br>
            Każdy z nich został indywidualnie zaprojektowany, posiada najwyższy komfort wyposażenia, stylowy
            wystrój, wyjątkowy i wyciszający klimat oraz elegancką łazienkę, które w połączeniu z otaczającą
            przyrodą i ciszą pozwalają na wypoczynek wśród pól.<br>
            Na życzenie gości dostępne jest domowe śniadanie lub pełne wyżywienie całodzienne oraz bezpłatny
            parking monitorowany.<br>
          </p><br>
          <p><strong class="gold">Apartament Domu Złote Pola</strong> z podwójnym łożem małżeńskim typu king
            size oraz
            elegancką łazienką z wanną.</p>
          <br>
          <p><strong class="gold">Apartament Rodzinny</strong> z podwójnym łożem małżeńskim typu king size
            oraz komfortową
            łazienką z prysznicem a także dodatkowym wyposażeniem na potrzeby pobytu z dziećmi: rozkładana
            sofa, łóżeczko dla dziecka, krzesełko do karmienia, wanienka, naczynia dla dzieci.</p>
          <br>
          <p><strong class="gold">Pokoje gościnne z zapachem lawendy, jaśminu, róży czy sosny</strong> z
            dwuosobowym
            podwójnym łożem lub z dwoma oddzielnymi łóżkami jednoosobowymi oraz komfortowymi łazienkami z
            prysznicem.</p>
          <br>
          <p><strong>Wyposażenie apartamentów i pokoi:</strong></p><br>
          <ul>
            <li>łóżka z wysokiej jakości komfortowymi materacami</li>
            <li>elegancka łazienka</li>
            <li>internet (Wi-Fi)</li>
            <li>lodówka</li>
            <li>TV</li>
            <li>sejf</li>
            <li>biurko</li>
            <li>czajnik, zestaw powitalny (kawa, herbata, woda mineralna)</li>
            <li>szafa</li>
            <li>szlafrok</li>
            <li>kapcie</li>
            <li>suszarka</li>
            <li>ręczniki</li>
            <li>zestaw kosmetyków</li>
            <li>deska do prasowania</li>
            <li>żelazko</li>
          </ul>
        </div>
        <div class="lg:w-1/2 text-center mt-8 lg:mt-0">
          <div class="image-shadow shadow-lightest top-right">
            <image-transition :intervalTimer="4000" :feed="imageTransitions.rooms"></image-transition>
          </div>
        </div>
      </div>

    </div>
    <div v-rellax="{speed: 5, center: true}" class="leaf"></div>
    <div class="container relative z-10 container relative z-10 text">

      <div class="flex">
        <div class="w-1/6"></div>
        <div class="w-4/6">
          <div class="text-right"><p><strong class="gold tracking-wider text-xl">W CELU UZYSKANIA
            OFERTY POBYTU ZAPRASZAMY DO KONTAKTU</strong><br></p></div>
          <div class="text-right"><p> T: +48 501 317 113<br>E: rezerwacje@domzlotepola.pl</p></div>
        </div>
        <div class="w-1/6"></div>
      </div>

    </div>
    <references bg="false" readmore="true"></references>
  </div>
</template>
<script>
import VueAos from 'vue-aos'
import ImageTransition from "@/components/ImageTransition";
import References from "@/components/elements/References";

export default {
  components: {
    VueAos,
    References,
    ImageTransition
  },
  metaInfo: {
    title: 'Dóm Złote Pola',
    titleTemplate: '%s - Pokoje gościnne - oferta',
    htmlAttrs: {
      lang: 'pl',
      amp: true
    }
  },
  data: () => ({
    imageTransitions: {
      'rooms': [
        require('@/assets/images/rooms/nr7.jpg'),
        require('@/assets/images/rooms/nr4.jpg'),
        require('@/assets/images/rooms/nr1.jpg'),
        require('@/assets/images/rooms/rooms3.jpg'),
      ]
    }
  }),
}
</script>
