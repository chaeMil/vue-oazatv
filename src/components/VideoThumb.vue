<template>
    <router-link tag="a" :to="{name: 'video', params: {hash_id: video.hash_id}}">
        <vk-card class="uk-card-small">
            <div slot="media-top">
                <div class="thumbnail" v-bind:style="'background-image: url(' + thumbnail + ');'"></div>
            </div>
            <vk-card-title>
                {{ title }}
            </vk-card-title>
        </vk-card>
    </router-link>
</template>

<script>
    import VideoUtils from '../utils/video_utils';

    export default {
        name: "VideoThumb",
        props: ["video"],
        computed: {
            thumbnail: function () {
                return VideoUtils.getThumbnailFromVideo(this.video);
            },
            title: function() {
                return VideoUtils.getTitleFromVideo(this.video);
            }
        }
    }
</script>

<style lang="less">
    .thumbnail {
        width: 100%;
        padding-bottom: 56.25%;
        background-size: cover;
        background-position: center;
        background-color: #F5F5F5;
    }
</style>