<template>
  <div class="container relative z-10 lg:px-16 mb-16 text-sm p-4">
    <div
         class="wzk-widget iframe-height" data-wzk-widget-type="type3" data-wzk-notice="48184">
    </div>
  </div>
</template>
<script>
export default {
  name: 'wesele-z-klasa',
  mounted() {
    (() => {
      {
        const e = e => {
          const t = document.createElement("iframe");
          t.src = `https://widgets.4wzk.pl/${+e.dataset.wzkNotice % 1e3}/${e.dataset.wzkNotice}/${e.dataset.wzkWidgetType}.html`, e.prepend(t), t.style.border = "none", t.style.width = "100%", t.style.display = "block", t.style.transition = ".1s ease height"
        };
        try {
          window.wzkWigetLoaded || (window.wzkWigetLoaded = !0, [...document.querySelectorAll(".wzk-widget")].forEach((t => {
            e(t)
          })))
        } catch (e) {
          console.log(e)
        }
        window.addEventListener("message", (e => {
          try {
            const t = JSON.parse(e.data);
            if (t.accentColor) document.querySelector(":root").style.setProperty("--accent-color", t.accentColor), [...document.querySelectorAll(".wzk-accent-color")].forEach((e => {
              e.style.color = t.accentColor
            })); else if (t.height) {
              const e = document.querySelector(`.wzk-widget[data-wzk-widget-type="${t.widgetType}"] iframe`);
              e.style.height = "0px", e.style.height = t.height
            }
          } catch (e) {
            console.log(e)
          }
        }))
      }
    })();
  },
}
</script>