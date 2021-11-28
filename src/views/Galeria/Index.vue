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
          "order": 10,
          "src": require('@/assets/images/galeria/n9.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n9.jpg'),
          "description": "Sala bankietowa"
        },
        {
          "order": 20,
          "src": require('@/assets/images/galeria/n16.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n16.jpg'),
          "description": "Sala bankietowa"
        },
        {
          "order": 30,
          "src": require('@/assets/images/galeria/n4.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n4.jpg'),
          "description": "Sala bankietowa"
        },
        {
          "order": 40,
          "src": require('@/assets/images/galeria/n13.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n13.jpg'),
          "description": "Sala bankietowa"
        },

        {
          "order": 50,
          "src": require('@/assets/images/galeria/NB7A8716.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/NB7A8716.jpg'),
          "description": ""
        },
        {
          "order": 51,
          "src": require('@/assets/images/galeria/NB7A8735.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/NB7A8735.jpg'),
          "description": ""
        },
        {
          "order": 52,
          "src": require('@/assets/images/galeria/IMGL8844.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/IMGL8844.jpg'),
          "description": ""
        },
        {
          "order": 53,
          "src": require('@/assets/images/galeria/IMGL8863.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/IMGL8863.jpg'),
          "description": ""
        },
        {
          "order": 54,
          "src": require('@/assets/images/galeria/n121821.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n121821.jpg'),
          "description": "Sala bankietowa"
        },
        {
          "order": 60,
          "src": require('@/assets/images/galeria/sb1-6.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/sb1-6.jpg'),
          "description": "Sala bankietowa"
        },
        {
          "order": 70,
          "src": require('@/assets/images/galeria/sb2-7.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/sb2-7.jpg'),
          "description": "Sala bankietowa"
        },
        {
          "order": 80,
          "src": require('@/assets/images/galeria/n11.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n11.jpg'),
          "description": "Sala bankietowa"
        },

        {
          "order": 90,
          "src": require('@/assets/images/galeria/n27.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n27.jpg'),
          "description": "Dóm Złote Pola"
        },
        {
          "order": 100,
          "src": require('@/assets/images/galeria/n122549.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n122549.jpg'),
          "description": "Dóm Złote Pola"
        },
        {
          "order": 110,
          "src": require('@/assets/images/galeria/n122734.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n122734.jpg'),
          "description": "Dóm Złote Pola"
        },
        {
          "order": 120,
          "src": require('@/assets/images/galeria/11.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/11.jpg'),
          "description": "Lobby"
        },

          //
        {
          "order": 121,
          "src": require('@/assets/images/galeria/1_received_585977609332523.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/1_received_585977609332523.jpg'),
          "description": "Dóm Złote Pola"
        },
        {
          "order": 122,
          "src": require('@/assets/images/galeria/2_received_268430118647405.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/2_received_268430118647405.jpg'),
          "description": "Dóm Złote Pola"
        },
        {
          "order": 123,
          "src": require('@/assets/images/galeria/3_received_697066261207588.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/3_received_697066261207588.jpg'),
          "description": "Dóm Złote Pola"
        },
        {
          "order": 124,
          "src": require('@/assets/images/galeria/4_received_737447134325277.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/4_received_737447134325277.jpg'),
          "description": "Dóm Złote Pola"
        },
        {
          "order": 125,
          "src": require('@/assets/images/galeria/5_received_4683197671703469.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/5_received_4683197671703469.jpg'),
          "description": "Dóm Złote Pola"
        },
          //

        {
          "order": 130,
          "src": require('@/assets/images/galeria/4.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/4.jpg'),
          "description": "Pokoje gościnne"
        },
        {
          "order": 140,
          "src": require('@/assets/images/galeria/5.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/5.jpg'),
          "description": "Pokoje gościnne"
        },
        {
          "order": 150,
          "src": require('@/assets/images/galeria/8.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/8.jpg'),
          "description": "Pokoje gościnne"
        },
        {
          "order": 160,
          "src": require('@/assets/images/galeria/n34.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n34.jpg'),
          "description": "Pokoje gościnne"
        },
        {
          "order": 170,
          "src": require('@/assets/images/galeria/9.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/9.jpg'),
          "description": "Pokoje gościnne"
        },
        {
          "order": 180,
          "src": require('@/assets/images/galeria/3.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/3.jpg'),
          "description": "Widok"
        },
        {
          "order": 190,
          "src": require('@/assets/images/galeria/2.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/2.jpg'),
          "description": "Dóm Złote Pola"
        },
        {
          "order": 200,
          "src": require('@/assets/images/galeria/1.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/1.jpg'),
          "description": "Dóm Złote Pola"
        },
        {
          "order": 210,
          "src": require('@/assets/images/galeria/n3.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n3.jpg'),
          "description": "Dóm Złote Pola"
        },
        {
          "order": 220,
          "src": require('@/assets/images/galeria/13.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/13.jpg'),
          "description": "Dóm Złote Pola"
        },
        {
          "order": 230,
          "src": require('@/assets/images/galeria/n15.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n15.jpg'),
          "description": "Łazienki dla gości"
        },

        {
          "order": 240,
          "src": require('@/assets/images/galeria/10.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/10.jpg'),
          "description": "Pokoje gościnne"
        },
        {
          "order": 250,
          "src": require('@/assets/images/galeria/7.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/7.jpg'),
          "description": "Pokoje gościnne"
        },




        {
          "order": 270,
          "src": require('@/assets/images/galeria/n19.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/n19.jpg'),
          "description": "Bawialnia dla dzieci"
        },

        {
          "order": 280,
          "src": require('@/assets/images/galeria/DSC_6390.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/DSC_6390.jpg'),
          "description": ""
        },
        {
          "order": 290,
          "src": require('@/assets/images/galeria/DSC_6396.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/DSC_6396.jpg'),
          "description": ""
        },
        {
          "order": 300,
          "src": require('@/assets/images/galeria/DSC_6408.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/DSC_6408.jpg'),
          "description": ""
        },
        {
          "order": 310,
          "src": require('@/assets/images/galeria/DSC_6411.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/DSC_6411.jpg'),
          "description": ""
        },
        {
          "order": 320,
          "src": require('@/assets/images/galeria/DSC_6433.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/DSC_6433.jpg'),
          "description": ""
        },
        {
          "order": 330,
          "src": require('@/assets/images/galeria/DSC_6450.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/DSC_6450.jpg'),
          "description": ""
        },
        {
          "order": 340,
          "src": require('@/assets/images/galeria/DSC_6454.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/DSC_6454.jpg'),
          "description": ""
        },
        {
          "order": 350,
          "src": require('@/assets/images/galeria/12.jpg'),
          "thumbnail": require('@/assets/images/galeria/thumbnails/12.jpg'),
          "description": "Certyfikat jakości serwisu Chrzciny i Komunie"
        },
        {
          "order": 360,
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
