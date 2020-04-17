<template>
    <div v-if="updateExists">
        <button v-on:click="refreshApp" class="btn grey">Dostępna jest nowa wersja serwisu, kliknij aby odświeżyć!</button>
    </div>
</template>

<script>
    export default {
        name: "Update",

        data() {
            return {
                refreshing: false,
                registration: null,
                updateExists: false,
            };
        },

        created () {
            document.addEventListener(
                'swUpdated', this.showRefreshUI, { once: true }
            );

            navigator.serviceWorker.addEventListener(
                'controllerchange', () => {
                    if (this.refreshing) return;
                    this.refreshing = true;
                    window.location.reload();
                }
            );
        },

        methods: {
            showRefreshUI(e) {
                this.registration = e.detail;
                this.updateExists = true;
            },

            refreshApp () {
                this.updateExists = false;
                if (!this.registration || !this.registration.waiting) {
                    return;
                }
                this.registration.waiting.postMessage('skipWaiting');
            }
        }
    }
</script>
<style scoped>
    div {
        background-color: white;
        border-top: 1px solid #333333;
        padding: 2rem;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 10;
        @media (min-width: 600px) {
            border-left: 1px solid #333333;
            left: auto;
        }
    }
</style>