<template>
    <div id="app">
        <page-header/>
        <transition
                name="fade"
                mode="out-in"
                        @beforeLeave="beforeLeave"
                        @enter="enter"
                        @afterEnter="afterEnter"
        >
        <router-view/>
        </transition>
        <page-footer/>
    </div>
</template>

<script>
    import PageHeader from "./components/PageHeader";
    import PageFooter from "./components/PageFooter";
    import 'animate.css';

    export default {
        components: {PageFooter, PageHeader},
        data() {
            return {
                prevHeight: 0,
            };
        },
        methods: {
            beforeLeave(element) {
                this.prevHeight = getComputedStyle(element).height;
            },
            enter(element) {
                const { height } = getComputedStyle(element);

                element.style.height = this.prevHeight;

                setTimeout(() => {
                    element.style.height = height;
                });
            },
            afterEnter(element) {
                element.style.height = 'auto';
            },
        },
    }
</script>
<style>
    .fade-enter-active, .fade-leave-active {
        transition-property: opacity;
        transition-duration: .25s;
    }

    .fade-enter-active {
        transition-delay: .25s;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>
<style src="./assets/css/tailwind.css"/>
