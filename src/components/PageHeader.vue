<template>
    <div>
        <div class="relative z-20 md:container">
            <header class="fixed inset-x-0 top-0 justify-end items-center z-10 lg:flex lg:justify-between lg:static lg:py-6">
                <router-link :to="{name: 'home',params:{'lang':this.useLang}}" class="logo" v-on:click.native="hideMobileNav">
                    <img src="../assets/images/logo-desktop.png" alt="Dóm Złote Pola">
                </router-link>
                <nav :class="{'is-open': mobileNav}">
                    <router-link :to="{name: 'home',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav" class="hidden lg:inline-block">
                        <img src="../assets/images/home-icon.png" alt="Home"/>
                    </router-link>
                    <router-link :to="{name: 'about',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav" class="nav-item">O mnie</router-link>
                    <div class="nav-item-dropdown">
                        <router-link :to="{name: 'dom',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav" class="nav-item">Dóm Złote Pola</router-link>
                        <div class="nav-dropdown">
                            <router-link :to="{name: 'dom-family',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav">Oferta dla rodzin</router-link>
                            <router-link :to="{name: 'dom-bride',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav">Oferta dla pary młodej</router-link>
                            <router-link :to="{name: 'dom-company',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav">Oferta dla firm</router-link>
                            <router-link :to="{name: 'dom-food-index',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav">Nasze jedzenie</router-link>
                            <router-link :to="{name: 'dom',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav">Co nas wyróżnia</router-link>
                        </div>
                    </div>
                    <router-link :to="{name: 'playground',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav" href="#" class="nav-item">Bawialnia dla dzieci</router-link>
                    <router-link :to="{name: 'rooms',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav" href="#" class="nav-item">Pokoje</router-link>
                    <router-link :to="{name: 'contact',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav" class="nav-item">Kontakt
                    </router-link>
                </nav>
                <div class="flex justify-end text-nav text-sm font-light bg-white py-6 relative z-10 lg:py-0">
                    <div class="hidden mr-8 lg:block">
                        T: <a href="tel:+48 501 317 113">+48 501 317 113</a>
                        <br>E: <a href="mailto:rezerwacje@domzlotepola.pl">rezerwacje@domzlotepola.pl</a>
                    </div>
                    <div class="hidden mr-8 lg:block">
                        ul. Złote Pola 17
                        <br>80-297 Miszewo
                    </div>
                    <a href="#" v-on:click.prevent="toggleMobileNav" class="hamburger" :class="{'is-open': mobileNav}">
                        <div class="bg-black h-px w-8 mb-2"></div>
                        <div class="bg-black h-px w-8 mb-2"></div>
                        <div class="bg-black h-px w-8"></div>
                    </a>
                </div>
            </header>
        </div>
        <top-banner :currentRoute="currentRouteName"></top-banner>
    </div>
</template>
<script>
    import TopBanner from "../components/TopBanner";

    export default {
        name: 'PageHeader',
        components: {
            TopBanner
        },
        computed: {
            currentRouteName() {
                return this.$route.name;
            },
            useLang() {
                let lang = localStorage.getItem('lang');
                return (lang ? lang : 'pl');
            }
        },
        data() {
            return {
                mobileNav: false,
            }
        },

        methods: {
            toggleMobileNav() {
                this.mobileNav = !this.mobileNav;
            },

            hideMobileNav() {
                this.mobileNav = false;
            },
        }
    }
</script>
