<template>
  <div class="container relative z-10 lg:px-16 mb-16 text-sm p-4 wzk-widget">
    <iframe src="https://widgets.4wzk.pl/184/48184/type3.html"
            style="border:none; width:100%;display:block;transition: .1s ease height"/>
  </div>
</template>
<script>
export default {
  name: 'wesele-z-klasa',
  mounted() {
    this.setWidgetHeight()
  },
  methods: {
    setWidgetHeight() {

      window.addEventListener("message", (e => {
        try {
          const t = JSON.parse(e.data);
          if (t.accentColor) document.querySelector(":root").style.setProperty("--accent-color", t.accentColor), [...document.querySelectorAll(".wzk-accent-color")].forEach((e => {
            e.style.color = t.accentColor
          })); else if (t.height) {
            const e = document.querySelector(`.wzk-widget iframe`);
            e.style.height = "0px", e.style.height = t.height
          }
          // eslint-disable-next-line no-empty
        } catch (e) {

        }
      }))
    }
  }
}
</script>