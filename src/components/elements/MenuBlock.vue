<template>
    <div>
        <vue-aos v-if="feed.title" animation-class="fadeIn animated">
            <h4 class="font-bebas text-4xl leading-none mt-12 text-center border-b border-primary"
                v-html="feed.title"></h4>
        </vue-aos>
        <vue-aos v-if="feed.description" animation-class="fadeIn animated">
            <p class="mt-4 italic break-words" v-html="feed.description" ></p>
        </vue-aos>
        <vue-aos v-if="feed.description2" animation-class="fadeIn animated">
            <p class="mt-4 italic font-semibold break-words" v-html="feed.description2" ></p>
        </vue-aos>
        <vue-aos animation-class="fadeIn animated" v-if="feed.items && feed.items.length > 0">
            <ol class=" list-outside leading-normal mt-8 pl-5">
                <li v-bind:key="item" v-for="item in feed.items" class="mb-2 border-b border-primary-lightest border-dotted pb-1 break-keep text-wrap" v-html="item"></li>
            </ol>
        </vue-aos>
    </div>
</template>
<script>
    import VueAos from "vue-aos";

    export default {
        name: 'menublock',
        props: ['feed'],
        components: {VueAos},
        data: () => ({}),
        methods: {}
    }
</script>