<template>
    <div id="app">
        <page-header/>
        <router-view/>
        <page-footer/>
    </div>
</template>

<script>
    import PageHeader from "./components/PageHeader";
    import PageFooter from "./components/PageFooter";

    export default {
        components: {PageFooter, PageHeader}
    }
</script>

<style src="./assets/css/tailwind.css"/>
