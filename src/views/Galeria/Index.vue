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
      <div class="container mt-12 px-16 lg:pl-24 pr-16 min-h-screen">
        <div v-if="!this.loading && orderedGallery">
          <silent-box :gallery="orderedGallery"></silent-box>
        </div>
      </div>
    </div>
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
      loading: true,
      fetchGallery: [],
      orderedGallery: [],
    }
  },
  mounted() {
    let that = this;
    this.fetchData('items/gallery/1?fields[]=gallery_files.sort,gallery_files.directus_files_id.id,gallery_files.directus_files_id.description').then(data => {
      that.fetchGallery = data.data.gallery_files;
      that.buildSilentGallery();
    })
  },
  methods: {
    buildSilentGallery() {
      let that = this;
      this.fetchGallery && this.fetchGallery.map(function (value) {
        var object = {
          'order': value.sort,
          'src': 'https://dzp.cubedev.pl/assets/' + value.directus_files_id.id + '?access_token=122|uBNKCgj74Oa7Tj4V6z89FiWZeCQJQZVLogHtWPrc&key=gallery-full',
          'thumbnail': 'https://dzp.cubedev.pl/assets/' + value.directus_files_id.id + '?access_token=122|uBNKCgj74Oa7Tj4V6z89FiWZeCQJQZVLogHtWPrc&key=gallery-thumb',
          'description': value.directus_files_id.description,
        };
        that.orderedGallery.push(object);
      });
      this.loading = false;
    },
    fetchData(feed) {
      return this.$axios.get('https://dzp.cubedev.pl/' + feed,
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
  },

}
</script>
