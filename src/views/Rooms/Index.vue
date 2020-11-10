<template>
  <div>

    <div class="container relative z-10">
      <div class="flex flex-col mt-16 lg:flex-row lg:mt-32">
        <div class="text px-16 lg:w-1/2 lg:px-24">
          <vue-aos animation-class="fadeInLeft animated">
            <h2>Pokoje</h2>
          </vue-aos>
          <p>
            Zapewniamy Państwu nocleg – Dóm Złote Pola dysponuje komfortowymi pokojami dla
            gości.
            <br>Otwieramy przed Wami drzwi do niezwykłego domu. Wypełnijcie go swoją radością,
            niezapomnianymi chwilami, wzruszeniami, a także beztroską zabawą. Niech Dóm Złote Pola będzie
            domem dla całej Waszej rodziny. Zapewniamy gościnność, rodzinną atmosferę, zapachy i smaki
            domowych potraw z przepisów Mamy.
          </p>
          <p class="read-more-xl">
            <router-link :to="{name: 'rooms-offer'}">Pokoje gościnne oferta</router-link>
          </p>
        </div>
        <div class="lg:w-1/2 text-center mt-8 lg:mt-0">
          <div class="image-shadow shadow-lightest top-right">
            <image-transition :intervalTimer="4000" :feed="imageTransitions.rooms"></image-transition>
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
    titleTemplate: '%s - Pokoje',
    htmlAttrs: {
      lang: 'pl',
      amp: true
    }
  },
  data: () => ({
    imageTransitions: {
      'rooms': [
        require('@/assets/images/rooms/nr7.jpg'),
        require('@/assets/images/rooms/nr2.jpg'),
        require('@/assets/images/rooms/nr3.jpg'),
        require('@/assets/images/rooms/nr4.jpg'),
        require('@/assets/images/rooms/nr5.jpg'),
        require('@/assets/images/rooms/nr6.jpg'),
        require('@/assets/images/rooms/nr8.jpg'),
        require('@/assets/images/rooms/nr1.jpg'),
        require('@/assets/images/rooms/rooms3.jpg'),
        require('@/assets/images/rooms/rooms2.jpg'),
      ]
    }
  }),
}
</script>
