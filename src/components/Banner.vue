<template>
  <div>
    <div class="relative banner" :class="size">
      <div class="container h-full flex justify-center items-end text-white lg:justify-end lg:items-center">
        <slot/>
      </div>
      <div v-if="size == 'large'" class="invisible lg:visible absolute -bottom-16 right-0 flex gap-2 mr-2">
        <img
            class="h-24 cursor-pointer hover:scale-105 transition-transform"
            :class="{ 'animate-badge': animateBadges && currentBadge === 0 }"
            src="@/assets/images/common/trojmiasto-ranking.png"
            alt="Ranking Trojmiasto.pl"
            @click="showModal = true">
        <img
            class="h-24"
            :class="{ 'animate-badge': animateBadges && currentBadge === 1 }"
            src="@/assets/images/Sticker-Overlay-TRA-2022.png">
        <img
            class="h-24"
            :class="{ 'animate-badge': animateBadges && currentBadge === 2 }"
            src="@/assets/images/common/wedding.png"
            alt="Wedding.pl Wybór Par Młodych 2024">
      </div>
    </div>
    <transition name="modal">
      <div
          v-if="showModal"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          @click="showModal = false">
        <div class="relative max-w-4xl max-h-screen" @click.stop>
          <a href="https://www.trojmiasto.pl/Dom-Zlote-Pola-o35861.html" target="_blank">
            <img
                src="@/assets/images/common/trojmiasto-ranking-large.jpg"
                alt="Ranking Trojmiasto.pl"
                class="max-w-full max-h-screen object-contain">
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: ['size'],
  data() {
    return {
      showModal: false,
      animateBadges: false,
      currentBadge: -1
    }
  },
  mounted() {
    // Czekamy 2 sekundy po załadowaniu strony
    setTimeout(() => {
      this.animateBadges = true;
      this.animateBadgesSequentially();
    }, 2000);
  },
  methods: {
    animateBadgesSequentially() {
      // Animacja pierwszej ikonki
      this.currentBadge = 0;

      setTimeout(() => {
        // Animacja drugiej ikonki
        this.currentBadge = 1;

        setTimeout(() => {
          // Animacja trzeciej ikonki
          this.currentBadge = 2;

          // Po zakończeniu ostatniej animacji resetujemy
          setTimeout(() => {
            this.currentBadge = -1;
          }, 600);
        }, 600);
      }, 600);
    }
  }
}
</script>

<style scoped>
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

@keyframes badge-bounce {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}

.animate-badge {
  animation: badge-bounce 0.6s ease-in-out;
}
</style>