<template>
    <div id="app">
        <page-header/>
        <transition name="router-view-fade">
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
        components: {PageFooter, PageHeader}
    }
</script>

<style src="./assets/css/tailwind.css"/>
