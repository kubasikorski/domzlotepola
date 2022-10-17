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
    <div class="container relative z-10 lg:px-16">
      <div class="flex flex-col mt-16 lg:flex-row lg:mt-32">
        <div class="text px-16  lg:px-24">
          <vue-aos animation-class="fadeInLeft animated">
            <h2>Zobacz Dóm złote pola</h2>
          </vue-aos>
        </div>
      </div>
    </div>
    <div>
      <div class="container mt-12 px-16 lg:pl-24 pr-16">
        <div class='embed-container'>
          <iframe src='https://player.vimeo.com/video/758478578?h=35f0480433&autoplay=0&loop=1&background=0' webkitAllowFullScreen
                  mozallowfullscreen allowFullScreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueAos from "vue-aos";
import fetchDataMixin from "@/mixins/fetchDataMixin";

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
  mixins: [fetchDataMixin],
  data() {
    return {
      vimeo: {
        videoID: '759135177',
        videoUrl: 'https://vimeo.com/759135177/6f6b4ac96d',
        width: '100',
        options: {
          muted: true,
          autoplay: true,
        },
        playerReady: false
      },
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
    onReady() {
      this.playerReady = true
    },
    play() {
      this.$refs.player.play()
    },
    pause() {
      this.$refs.player.pause()
    },
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
  },

}
</script>
<style scoped>
.embed-container {
  --video--width: 632;
  --video--height: 355;
  position: relative;
  padding-bottom: calc(var(--video--height) / var(--video--width) * 100%);
  overflow: hidden;
  max-width: 100%;
  background: white;
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>