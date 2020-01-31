<template>
    <banner :size="useBannerFeed.size" :style="{ backgroundImage: `url('${useBannerFeed.background}')` }">
        <vue-aos animation-class="fadeIn slow animated">
            <div v-if="useBannerFeed.captionExist" class="caption">
                <h2 class="font-bebas text-7xl">"Śród takich pól przed laty..."</h2>
                <p class="text-lg leading-normal">
                    Czyste powietrze i sielska atmosfera są idealnym
                    otoczeniem dla wyjątkowych okazji rodzinnych jak i
                    spotkań firmowych. Dóm Złote Pola położony jest
                    wśród łąk i ziemii uprawnych. Do domu należy ogród
                    warzywny z kwiatami i owocami...
                </p>
                    <vue-aos animation-class="slideInUp slow animated">
                    <p class="mt-4">
                        <router-link :to="{name: 'dom'}" class="read-more" v-on:click.native="hideMobileNav">Czytaj
                            o
                            nas
                        </router-link>
                    </p>
                </vue-aos>
            </div>
        </vue-aos>
    </banner>
</template>

<script>
    import Banner from "../components/Banner";
    import VueAos from 'vue-aos'

    export default {
        name: 'TopBanner',
        components: {
            Banner,
            VueAos
        },
        props: ['currentRoute'],
        computed: {
            useBannerFeed() {
                if (this.currentRoute in this.bannerFeed) {
                    return this.bannerFeed[this.currentRoute];
                } else {
                    return this.bannerFeed['default'];
                }
            }
        },
        data() {
            return {
                bannerFeed: {
                    home: {
                        captionExist:true,
                        size: 'large',
                        background: require('../assets/images/banner-top/banner-home.jpg'),
                        lead: '"Śród takich pól przed laty..."',
                        caption: 'Czyste powietrze i sielska atmosfera są idealnym otoczeniem dla wyjątkowych okazji rodzinnych jak i spotkań firmowych. Dóm Złote Pola położony jest wśród łąk i ziemii uprawnych. Do domu należy ogród warzywny z kwiatami i owocami...',
                        button: 'Czytaj o nas'
                    },
                    about: {
                        captionExist:false,
                        size: 'short',
                        background: require('../assets/images/banner-top/banner-home2.jpg'),
                    },
                    default: {
                        captionExist:false,
                        size: 'short',
                        background: require('../assets/images/banner-top/banner-home2.jpg'),
                    }
                }
            }
        },
    }
</script>
