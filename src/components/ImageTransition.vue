<template>
    <div>
        <img v-for="image in feed" v-bind:key="image" :src="image" alt="" class="">
    </div>
</template>

<script>
    export default {
        name: 'image-transitions',
        props: ['feed'],
        data: () => ({}),
    }
</script>