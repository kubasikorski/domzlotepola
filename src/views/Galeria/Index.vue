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
        <div class="gallery">
          <silent-box :gallery="sgallery"></silent-box>
        </div>
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

      sgallery: [
        {
          src: require('@/assets/images/food/shutter5-thumb.jpg'),
        },
        {
          src: require('@/assets/images/food/food2-thumb.jpg'),
        },
      ],

      gallery: {
        firstitem: {
          visible: false,
          thumb: require('@/assets/images/food/cover.jpg'),
          zoom: require('@/assets/images/food/cover.jpg'),
          image: require('@/assets/images/food/cover.jpg'),
          lead: 'Pyszne',
          description: 'Gotowanie to nasza pasja...'
        },
        captions: false,
        canZoom: true,
        items: [
          {
            thumb: require('@/assets/images/food/shutter5-thumb.jpg'),
            zoom: require('@/assets/images/food/shutter5-thumb.jpg'),
            image: require('@/assets/images/food/shutter5-thumb.jpg'),
            lead: 'Danie 1',
            description: '<p>Danie 1</p>'
          },
          {
            thumb: require('@/assets/images/food/food2-thumb.jpg'),
            lead: 'Danie 2',
            description: '<p>Danie 2</p>'
          },
          {
            thumb: require('@/assets/images/food/shutter6-thumb.jpg'),
            lead: 'Danie 3',
            description: '<p>Danie 3</p>'
          },
          {
            thumb: require('@/assets/images/food/food4-thumb.jpg'),
            lead: 'Danie 4',
            description: '<p>Danie 4</p>'
          },
          {
            thumb: require('@/assets/images/food/shutter2-thumb.jpg'),
            lead: 'Danie 5',
            description: '<p>Danie 5</p>'
          },
          {
            thumb: require('@/assets/images/food/shutter1-thumb.jpg'),
            lead: 'Danie 5',
            description: '<p>Danie 5</p>'
          },
          {
            thumb: require('@/assets/images/food/food3-thumb.jpg'),
            lead: 'Danie 3',
            description: '<p>Danie 3</p>'
          },
          {
            thumb: require('@/assets/images/food/food5-thumb.jpg'),
            lead: 'Danie 5',
            description: '<p>Danie 5</p>'
          },
          {
            thumb: require('@/assets/images/food/shutter3-thumb.jpg'),
            lead: 'Danie 5',
            description: '<p>Danie 5</p>'
          },
          {
            thumb: require('@/assets/images/food/shutter4-thumb.jpg'),
            lead: 'Danie 5',
            description: '<p>Danie 5</p>'
          },
          {
            thumb: require('@/assets/images/food/food1-thumb.jpg'),
            lead: 'Danie 5',
            description: '<p>Danie 5</p>'
          },

          {
            thumb: require('@/assets/images/food/shutter7-thumb.jpg'),
            lead: 'Danie 5',
            description: '<p>Danie 5</p>'
          },
          {
            thumb: require('@/assets/images/food/shutter8-thumb.jpg'),
            lead: 'Danie 5',
            description: '<p>Danie 5</p>'
          },
          {
            thumb: require('@/assets/images/food/shutter9-thumb.jpg'),
            lead: 'Danie 5',
            description: '<p>Danie 5</p>'
          },
          {
            thumb: require('@/assets/images/food/pierogi-thumb.jpg'),
            lead: 'Danie 5',
            description: '<p>Danie 5</p>'
          },
          {
            thumb: require('@/assets/images/food/shutter11-thumb.jpg'),
            lead: 'Danie 5',
            description: '<p>Danie 5</p>'
          },
          {
            thumb: require('@/assets/images/food/shutter12-thumb.jpg'),
            lead: 'Danie 5',
            description: '<p>Danie 5</p>'
          },
        ]
      },


    }
  },
}
</script>
