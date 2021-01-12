<template>
  <div>
    <div class="container relative z-10 lg:px-16">
      <div class="flex flex-col mt-16 lg:flex-row lg:mt-32">
        <div class="text px-16  lg:px-24">
          <vue-aos animation-class="fadeInLeft animated">
            <h2>Fotogaleria</h2>
          </vue-aos>
        </div>
      </div>
    </div>
    <div>
      <div class="container mt-12 px-16 lg:pl-24 pr-16">
        <silent-box :gallery="galleryfeed"></silent-box>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
import VueAos from "vue-aos";

export default {
  metaInfo: {
    title: 'Dóm Złote Pola',
    titleTemplate: '%s - Galeria',
    htmlAttrs: {
      lang: 'pl',
      amp: true
    }
  },
  components: {
    VueAos,
  },
  data() {
    return {
      galleryfeed: [
        {
          "src":require('@/assets/images/galeria/n9.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/n9.jpg'),
          "description":"Sala bankietowa"
        },
        {
          "src":require('@/assets/images/galeria/11.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/11.jpg'),
          "description":"Lobby"
        },
        {
          "src":require('@/assets/images/galeria/n16.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/n16.jpg'),
          "description":"Sala bankietowa"
        },
        {
          "src":require('@/assets/images/galeria/n4.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/n4.jpg'),
          "description":"Sala bankietowa"
        },
        {
          "src":require('@/assets/images/galeria/n121821.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/n121821.jpg'),
          "description":"Sala bankietowa"
        },
        {
          "src":require('@/assets/images/galeria/n13.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/n13.jpg'),
          "description":"Sala bankietowa"
        },
        {
          "src":require('@/assets/images/galeria/n11.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/n11.jpg'),
          "description":"Sala bankietowa"
        },
        {
          "src":require('@/assets/images/galeria/n15.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/n15.jpg'),
          "description":"Łazienki dla gości"
        },
        {
          "src":require('@/assets/images/galeria/5.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/5.jpg'),
          "description":"Pokoje gościnne"
        },
        {
          "src":require('@/assets/images/galeria/8.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/8.jpg'),
          "description":"Pokoje gościnne"
        },
        {
          "src":require('@/assets/images/galeria/9.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/9.jpg'),
          "description":"Pokoje gościnne"
        },
        {
          "src":require('@/assets/images/galeria/n34.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/n34.jpg'),
          "description":"Pokoje gościnne"
        },
        {
          "src":require('@/assets/images/galeria/4.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/4.jpg'),
          "description":"Pokoje gościnne"
        },
        {
          "src":require('@/assets/images/galeria/7.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/7.jpg'),
          "description":"Pokoje gościnne"
        },
        {
          "src":require('@/assets/images/galeria/10.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/10.jpg'),
          "description":"Pokoje gościnne"
        },
        {
          "src":require('@/assets/images/galeria/n49.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/n49.jpg'),
          "description":"Pokoje gościnne"
        },
        {
          "src":require('@/assets/images/galeria/3.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/3.jpg'),
          "description":"Widok"
        },
        {
          "src":require('@/assets/images/galeria/2.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/2.jpg'),
          "description":"Dóm Złote Pola"
        },
        {
          "src":require('@/assets/images/galeria/1.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/1.jpg'),
          "description":"Dóm Złote Pola"
        },
        {
          "src":require('@/assets/images/galeria/n3.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/n3.jpg'),
          "description":"Dóm Złote Pola"
        },
        {
          "src":require('@/assets/images/galeria/13.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/13.jpg'),
          "description":"Dóm Złote Pola"
        },
        {
          "src":require('@/assets/images/galeria/n122734.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/n122734.jpg'),
          "description":"Dóm Złote Pola"
        },
        {
          "src":require('@/assets/images/galeria/n122549.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/n122549.jpg'),
          "description":"Dóm Złote Pola"
        },
        {
          "src":require('@/assets/images/galeria/n27.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/n27.jpg'),
          "description":"Dóm Złote Pola"
        },
        {
          "src":require('@/assets/images/galeria/n19.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/n19.jpg'),
          "description":"Bawialnia dla dzieci"
        },
        {
          "src":require('@/assets/images/galeria/12.jpg'),
          "thumbnail":require('@/assets/images/galeria/thumbnails/12.jpg'),
          "description":"Certyfikat jakości"
        },


      ],
    }
  },
}
</script>
