<template>
    <div class="relative z-20 md:container">
        <header class="fixed inset-x-0 top-0 justify-end items-center z-10 lg:flex lg:justify-between lg:static lg:py-6">
            <router-link :to="{name: 'home'}" class="logo" v-on:click.native="hideMobileNav">
                <img src="../assets/images/logo-desktop.png" alt="Dóm Złote Pola">
            </router-link>

            <nav :class="{'is-open': mobileNav}">
                <router-link :to="{name: 'home'}" v-on:click.native="hideMobileNav" class="hidden lg:inline-block">
                    <img src="../assets/images/home-icon.png" alt="Home"/>
                </router-link>
                <router-link :to="{name: 'about'}" v-on:click.native="hideMobileNav" class="nav-item">O mnie</router-link>
                <div class="nav-item-dropdown">
                    <a href="#" class="nav-item">Dóm Złote Pola</a>
                    <div class="nav-dropdown">
                        <a href="#">Oferta dla rodzin </a>
                        <a href="#">Oferta dla pary młodej </a>
                        <a href="#">Oferta dla firm</a>
                    </div>
                </div>
                <a href="#" class="nav-item">Bawialnia dla dzieci</a>
                <router-link :to="{name: 'rooms'}" href="#" class="nav-item">Pokoje</router-link>
                <router-link :to="{name: 'contact'}" v-on:click.native="hideMobileNav" class="nav-item">Kontakt</router-link>
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
</template>

<script>
    export default {
        name: 'PageHeader',

        data() {
            return {
                mobileNav: false
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
