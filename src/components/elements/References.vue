<template>
  <div v-if="!loading" class="container relative z-10 lg:px-16" :class="{ 'reference-block' : bg == 'true' }">
    <div class="flex flex-col mt-8 lg:flex-row lg:mt-16">
      <div class="lg:w-1/2 text-center">
        <div class="image-shadow top-left">
          <image-transition :intervalTimer="0" ref="referencesImageTransition"
                            :feed="references.imageTransitions"></image-transition>
        </div>
      </div>
      <div class="text px-16 lg:w-1/2 lg:px-24">
        <h2>Opinie gości</h2>
        <carousel :paginationPadding=7 :perPage=1 :loop=true :minSwipeDistance=16 paginationPosition="top"
                  :autoplayHoverPause=false :autoplayTimeout=4000 :autoplay=true @pageChange="slidePageChange">
          <slide v-bind:key="reference.id" v-for="reference in references.descriptions">
            <p>
              {{ reference.opis }}
            </p>
            <p v-if="reference.podpis!=''">
              <strong>{{ reference.podpis }}</strong>
            </p>
          </slide>
        </carousel>
        <p v-if="readmore" class="read-more">
          <a href="https://www.trojmiasto.pl/BabyCafe-pl-o35861.html#opinie" target="_blank">Zobacz więcej
            opinii</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import {Carousel, Slide} from 'vue-carousel';
import ImageTransition from "@/components/ImageTransition";

export default {
  name: 'references',
  props: ['bg', 'readmore'],
  components: {
    Carousel,
    Slide,
    ImageTransition,
  },
  data: () => ({
    loading: true,
    references:
        {
          imageTransitions: [],
          descriptions: []
        },
  }),
  mounted() {
    let that = this;
    this.fetchData().then(data => {
      data.data && data.data.map(function (value) {
        var imageObject = 'https://dzp.cubedev.pl/assets/' + value.image + '?access_token=122|uBNKCgj74Oa7Tj4V6z89FiWZeCQJQZVLogHtWPrc';
        var textObject = {
          'opis': value.description,
          'podpis': value.name,
        };
        that.references.imageTransitions.push(imageObject);
        that.references.descriptions.push(textObject);
      });
      this.loading = false;
    })
  },
  methods: {
    fetchData() {
      return this.$axios.get('https://dzp.cubedev.pl/items/Opinie',
          {
            headers: {
              'Authorization': 'Bearer 122|uBNKCgj74Oa7Tj4V6z89FiWZeCQJQZVLogHtWPrc'
            }
          }
      )
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            throw error.response.data;
          });
    },
    slidePageChange(slideId) {
      this.$refs.referencesImageTransition.setReferencesSlide(slideId);
    },
  }
}
</script>