<template>
    <div class="banner" :class="size">
        <div class="container h-full flex justify-center items-end text-white lg:justify-end lg:items-center">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Banner',
        props:['size']
    }
</script>
