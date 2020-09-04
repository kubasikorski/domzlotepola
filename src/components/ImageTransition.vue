<template>
    <div>
        <img v-for="image in imageFeed" v-bind:key="image.key" :src="image.imageSrc" alt="" class="image-transision"
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
            this.showImage(0);
            if(this.intervalTimer>0) {
                this.startIntervalTransition();
            }
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
            setReferencesSlide(slideId){
                if (slideId <= this.imageCount -1) {
                    this.showImage(slideId);
                }
            },
            showImage(idimage){
                let that = this;
                that.imageFeed.forEach((value,index) => {
                    value.opacity = ( index == idimage ? 100 : 0 );
                });
            },
            startIntervalTransition() {
                let that = this;
                this.interval = setInterval(function () {
                    that.activeImage++;
                    if (that.activeImage > that.imageCount -1) {
                        that.activeImage = 0;
                    }
                    that.showImage(that.activeImage);
                }, this.intervalTimer);
            }
        }
    }
</script>