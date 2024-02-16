<template>
    <div class="relative banner" :class="size">
        <div class="container h-full flex justify-center items-end text-white lg:justify-end lg:items-center">
            <slot />
        </div>
      <div v-if="size == 'large'" class="absolute -bottom-16 right-0 flex gap-2">
        <img class="h-24" src="@/assets/images/Sticker-Overlay-TRA-2022.png">
        <img class="h-24" src="https://wedding.pl/img/banners/bride_choice2023.png" alt="Wedding.pl Wybór Par Młodych 2023">
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Banner',
        props:['size']
    }
</script>
