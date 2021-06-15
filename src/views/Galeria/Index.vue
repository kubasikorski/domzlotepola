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
        <silent-box :gallery="orderedGallery"></silent-box>
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
      galleryInOrder:[],
      galleryfeed: [
        {
          "order": 1,
          "src": require('@/assets/images/galeria/n9.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n9.jpg'),
          "description": "Sala bankietowa"
        },
        {
          "order": 12,
          "src": require('@/assets/images/galeria/11.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/11.jpg'),
          "description": "Lobby"
        },
        {
          "order": 2,
          "src": require('@/assets/images/galeria/n16.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n16.jpg'),
          "description": "Sala bankietowa"
        },
        {
          "order": 3,
          "src": require('@/assets/images/galeria/n4.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n4.jpg'),
          "description": "Sala bankietowa"
        },
        {
          "order": 5,
          "src": require('@/assets/images/galeria/n121821.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n121821.jpg'),
          "description": "Sala bankietowa"
        },
        {
          "order": 4,
          "src": require('@/assets/images/galeria/n13.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n13.jpg'),
          "description": "Sala bankietowa"
        },
        {
          "order": 8,
          "src": require('@/assets/images/galeria/n11.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n11.jpg'),
          "description": "Sala bankietowa"
        },
        {
          "order": 23,
          "src": require('@/assets/images/galeria/n15.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n15.jpg'),
          "description": "Łazienki dla gości"
        },
        {
          "order": 14,
          "src": require('@/assets/images/galeria/5.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/5.jpg'),
          "description": "Pokoje gościnne"
        },
        {
          "order": 15,
          "src": require('@/assets/images/galeria/8.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/8.jpg'),
          "description": "Pokoje gościnne"
        },
        {
          "order": 17,
          "src": require('@/assets/images/galeria/9.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/9.jpg'),
          "description": "Pokoje gościnne"
        },
        {
          "order": 16,
          "src": require('@/assets/images/galeria/n34.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n34.jpg'),
          "description": "Pokoje gościnne"
        },
        {
          "order": 13,
          "src": require('@/assets/images/galeria/4.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/4.jpg'),
          "description": "Pokoje gościnne"
        },
        {
          "order": 25,
          "src": require('@/assets/images/galeria/7.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/7.jpg'),
          "description": "Pokoje gościnne"
        },
        {
          "order": 24,
          "src": require('@/assets/images/galeria/10.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/10.jpg'),
          "description": "Pokoje gościnne"
        },

        {
          "order": 18,
          "src": require('@/assets/images/galeria/3.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/3.jpg'),
          "description": "Widok"
        },
        {
          "order": 19,
          "src": require('@/assets/images/galeria/2.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/2.jpg'),
          "description": "Dóm Złote Pola"
        },
        {
          "order": 20,
          "src": require('@/assets/images/galeria/1.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/1.jpg'),
          "description": "Dóm Złote Pola"
        },
        {
          "order": 21,
          "src": require('@/assets/images/galeria/n3.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n3.jpg'),
          "description": "Dóm Złote Pola"
        },
        {
          "order": 22,
          "src": require('@/assets/images/galeria/13.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/13.jpg'),
          "description": "Dóm Złote Pola"
        },
        {
          "order": 11,
          "src": require('@/assets/images/galeria/n122734.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n122734.jpg'),
          "description": "Dóm Złote Pola"
        },
        {
          "order": 10,
          "src": require('@/assets/images/galeria/n122549.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n122549.jpg'),
          "description": "Dóm Złote Pola"
        },
        {
          "order": 9,
          "src": require('@/assets/images/galeria/n27.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n27.jpg'),
          "description": "Dóm Złote Pola"
        },
        {
          "order": 27,
          "src": require('@/assets/images/galeria/n19.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n19.jpg'),
          "description": "Bawialnia dla dzieci"
        },
        {
          "order": 6,
          "src": require('@/assets/images/galeria/sb1-6.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/sb1-6.jpg'),
          "description": "Sala bankietowa"
        },
        {
          "order": 7,
          "src": require('@/assets/images/galeria/sb2-7.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/sb2-7.jpg'),
          "description": "Sala bankietowa"
        },
        {
          "order": 28,
          "src": require('@/assets/images/galeria/DSC_6390.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/DSC_6390.jpg'),
          "description": ""
        },
        {
          "order": 29,
          "src": require('@/assets/images/galeria/DSC_6396.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/DSC_6396.jpg'),
          "description": ""
        },
        {
          "order": 30,
          "src": require('@/assets/images/galeria/DSC_6408.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/DSC_6408.jpg'),
          "description": ""
        },
        {
          "order": 31,
          "src": require('@/assets/images/galeria/DSC_6411.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/DSC_6411.jpg'),
          "description": ""
        },
        {
          "order": 32,
          "src": require('@/assets/images/galeria/DSC_6433.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/DSC_6433.jpg'),
          "description": ""
        },
        {
          "order": 33,
          "src": require('@/assets/images/galeria/DSC_6450.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/DSC_6450.jpg'),
          "description": ""
        },
        {
          "order": 34,
          "src": require('@/assets/images/galeria/DSC_6454.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/DSC_6454.jpg'),
          "description": ""
        },
        {
          "order": 35,
          "src": require('@/assets/images/galeria/12.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/12.jpg'),
          "description": "Certyfikat jakości serwisu Chrzciny i Komunie"
        },
        {
          "order": 36,
          "src": require('@/assets/images/galeria/wesele-cert.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/wesele-cert.jpg'),
          "description": "Certyfikat jakości serwisu GdzieWesele.pl"
        },
      ],
    }
  },
  methods:{
    changesOrder(galleryfeed){
      let newarray = galleryfeed.sort((a, b) => a.order - b.order );
      return newarray;
    }
  },
  computed: {
    orderedGallery: function () {
      return this.changesOrder(this.galleryfeed);
      //
    }
  }
}
</script>
