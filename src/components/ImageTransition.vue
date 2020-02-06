<template>
    <div>
        <img v-for="image in imageFeed" v-bind:key="image.key" :src="image.imageSrc" alt="" class=""
             v-bind:style="{opacity : image.opacity}">
    </div>
</template>

<script>
    export default {
        name: 'image-transitions',
        props: ['feed', 'intervalTimer'],
        computed: {
            imageCount() {
                return this.feed.length;
            }
        },
        created() {
            this.feed.forEach((value, index) => {
                var obj = {
                    key: index,
                    imageSrc: value,
                    opacity: (index == 0 ? 100 : 0),
                };
                this.imageFeed.push(obj);
            });
        },
        mounted() {
            this.startTransition();
        },
        beforeDestroy() {
            clearInterval(this.interval)
        },
        data: () => ({
            activeImage: 0,
            interval: null,
            imageFeed: []
        }),
        methods: {
            startTransition() {
                let that = this;
                this.interval = setInterval(function () {
                    that.activeImage++;
                    if (that.activeImage > that.imageCount -1) {
                        that.activeImage = 0;
                    }
                    that.imageFeed.forEach((value,index) => {
                        value.opacity = ( index == that.activeImage ? 100 : 0 );
                    });
                }, this.intervalTimer);
            }
        }
    }
</script>