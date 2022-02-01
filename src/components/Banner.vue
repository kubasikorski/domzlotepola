<template>
    <div class="relative banner" :class="size">
        <div class="container h-full flex justify-center items-end text-white lg:justify-end lg:items-center">
            <slot />
        </div>
      <div v-if="size == 'large'" class="absolute -bottom-16 right-0">
        <img class="w-sm" src="@/assets/images/Sticker-Overlay-TRA-2022.png">
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Banner',
        props:['size']
    }
</script>
