<template>
    <div>
        <div class="relative z-20 xl:container">
          <div class="invisible lg:visible lg:flex lg:flex-row-reverse lg:py-4 lg:px-8 space-x-4 space-x-reverse">
            <a href="https://www.instagram.com/domzlotepola/" target="_blank"><svg class="imglink" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
            <a href="https://www.facebook.com/domzlotepola" target="_blank"><svg class="imglink" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg></a>
            <router-link :to="{name: 'fundusze-ue',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav">
              <img class="h-5 imglink" alt="Unia Europejska" title="Unia Europejska" src="@/assets/images/ue/UE_pl_top.svg">
            </router-link>
          </div>
            <header class="fixed inset-x-0 top-0 justify-end items-center z-10 lg:flex lg:justify-between lg:static lg:py-2">
                <router-link :to="{name: 'home',params:{'lang':this.useLang}}" class="logo" v-on:click.native="hideMobileNav">
                    <img src="../assets/images/logo-desktop.png" alt="Dóm Złote Pola">
                </router-link>
                <nav :class="{'is-open': mobileNav}">
                    <router-link :to="{name: 'home',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav" class="hidden lg:inline-block homeicon">
                        <img src="@/assets/images/home-icon.png" alt="Home"/>
                    </router-link>

                    <div class="nav-item-dropdown">
                        <router-link :to="{name: 'dom',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav" class="nav-item nav-main">Dóm Złote Pola</router-link>
                        <div class="nav-dropdown " :class="{ 'force-open' : currentRouteName == 'home' }">
                            <router-link :to="{name: 'dom-family',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav">Oferta dla rodzin</router-link>
                            <router-link :to="{name: 'dom-bride',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav">Oferta dla pary młodej</router-link>
                            <router-link :to="{name: 'dom-company',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav">Oferta dla firm</router-link>
                            <router-link :to="{name: 'dom-food-index',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav">Nasze jedzenie</router-link>
                            <router-link :to="{name: 'dom',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav">Co nas wyróżnia</router-link>
                            <router-link :to="{name: 'galeria',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav">Galeria</router-link>
                        </div>
                    </div>
                    <router-link :to="{name: 'playground',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav" href="#" class="nav-item">Bawialnia dla dzieci</router-link>
                    <router-link :to="{name: 'about',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav" class="nav-item">O mnie</router-link>
                    <router-link :to="{name: 'rooms',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav" href="#" class="nav-item">Pokoje</router-link>
                    <router-link :to="{name: 'contact',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav" class="nav-item">Kontakt</router-link>
                  <router-link :to="{name: 'fundusze-ue',params:{'lang':this.useLang}}" v-on:click.native="hideMobileNav" class="nav-item lg:hidden">Fundusze UE</router-link>
                  <div class="lg:hidden flex flex-row-reverse py-4 px-8 space-x-4 space-x-reverse h-full">
                    <a href="https://www.instagram.com/domzlotepola/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                    <a href="https://www.facebook.com/domzlotepola" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg></a>
                  </div>
                </nav>
                <div class="flex justify-end text-nav text-sm font-light bg-white py-6 relative z-10 lg:py-0">
                    <div class="hidden mr-8 lg:block">
                        T: <a href="tel:+48 501 317 113">+48 501 317 113</a>
                        <br>E: <a href="mailto:rezerwacje@domzlotepola.pl">rezerwacje@domzlotepola.pl</a>
                    </div>
                    <div class="hidden mr-8 lg:hidden xl:block">
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
            TopBanner,
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
