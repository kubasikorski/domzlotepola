<template>
    <div>
        <div class="container relative z-10 mt-12 px-16 lg:pl-24 pr-16">
            <div class="gallery">
                <div v-if="firstitem && firstitem.visible == true" class="item">
                    <img :src="firstitem.thumb" alt="">
                    <div class="description shown">
                        <h4 class="font-bebas text-3xl">{{firstitem.lead}}</h4>
                        <img src="@/assets/images/gallery-leaf.png" alt="">
                        <p class="text-center font-medium" v-html="firstitem.description"></p>
                    </div>
                </div>
                <div v-for="(item, key) in feed" :key="key" class="item" v-on:click="showZoom(key, false)">
                    <img :src="item.thumb" alt="" class="cursor-pointer">
                    <div class="description">
                        <h4 class="font-bebas text-3xl">{{item.lead}}</h4>
                        <img src="@/assets/images/gallery-leaf.png" alt="">
                        <p class="text-center font-medium" v-html="item.description"></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="gallery-zoom" :class="{'is-fullscreen': zoom.fullscreen}" v-if="zoom.show">
            <img src="@/assets/images/gallery-fullscreen.png" alt="" class="fullscreen" v-on:click="toggleFullscreen">
            <img src="@/assets/images/gallery-close.png" alt="" class="close" v-on:click="hideZoom">

            <div :style="{'background-image': `url(${zoom.image})`}" v-if="zoom.fullscreen" class="image">
                <div class="prev" v-on:click="showZoom(zoom.key - 1, true)" v-if="zoom.key > 0">
                    <img src="@/assets/images/gallery-prev.png" alt="">
                </div>
                <div class="next" v-on:click="showZoom(zoom.key + 1, true)" v-if="zoom.key + 1 < feed.length">
                    <img src="@/assets/images/gallery-next.png" alt="">
                </div>
            </div>

            <div class="flex flex-col mt-16 lg:flex-row lg:mt-32" v-if="zoom.fullscreen === false">
                <div class="lg:w-2/3 text-center">
                    <div class="image-shadow shadow-lightest bottom-left relative">
                        <img src="@/assets/images/gallery-prev.png" alt="" class="prev"
                             v-on:click="showZoom(zoom.key - 1, false)" v-if="zoom.key > 0">
                        <img :src="zoom.zoom" alt="" class="">
                        <img src="@/assets/images/gallery-next.png" alt="" class="next"
                             v-on:click="showZoom(zoom.key + 1, false)" v-if="zoom.key + 1 < feed.length">
                    </div>
                </div>

                <div class="text px-16 pb-16 lg:w-1/3 lg:px-24">
                    <h2 v-if="zoom.lead" v-html="zoom.lead"></h2>
                    <div v-html="zoom.description"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        components: {},
        props: ['feed','firstitem','gallery'],
        data() {
            return {
                zoom: {
                    key: null,
                    show: false,
                    zoom: null,
                    thumb: null,
                    image: null,
                    fullscreen: false,
                    description: null
                },
            }
        },
        methods: {
            showZoom(key, fullscreen) {
                let item = this.feed[key];
                this.zoom = {
                    key: key,
                    show: true,
                    zoom: item.zoom,
                    thumb: item.thumb,
                    image: item.image,
                    fullscreen: fullscreen,
                    description: item.description,
                    lead: item.lead
                };

                document.body.classList.add('overflow-hidden');
            },

            hideZoom() {
                this.zoom.show = false;
                document.body.classList.remove('overflow-hidden');
            },

            toggleFullscreen() {
                this.zoom.fullscreen = !this.zoom.fullscreen;
            }
        }
    }
</script>
