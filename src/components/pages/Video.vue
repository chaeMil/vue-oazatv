<template>
    <div class="uk-container">
        <div v-if="video != null">
            <h1>{{video.title}}</h1>
        </div>

        <video id="player"
               ref="player"
               class="video-js"
               controls
               preload="auto"
               :poster="thumbnail"
               data-setup='{}'>
            <source :src="videoFile" type="video/mp4">
            <p class="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a
                web browser that
                <a href="http://videojs.com/html5-video-support/" target="_blank">
                    supports HTML5 video
                </a>
            </p>
        </video>
    </div>
</template>

<script>
    import Api from "../../utils/api";
    import axios from 'axios';
    import videojs from 'video.js';

    import VideoUtils from "../../utils/video_utils";

    export default {
        name: 'Archive',
        components: {},
        props: ["hash_id"],
        data: function () {
            return {
                video: null
            }
        },
        methods: {
            onGetVideoSuccess: function () {
                this.player = videojs('player');
                this.player.play();
            }
        },
        computed: {
            thumbnail: function () {
                return VideoUtils.getThumbnailFromVideo(this.video);
            },
            videoFile: function () {
                return VideoUtils.getVideoFileFromVideo(this.video);
            }
        },
        mounted() {
            axios
                .get(Api.getServer() + "videos/" + this.hash_id)
                .then(response => {
                    console.log(this.video);
                    this.video = response.data;
                    this.$nextTick(function () {
                        this.onGetVideoSuccess();
                    });
                });
        },
        beforeDestroy() {
            this.player.dispose();
        }
    }
</script>

<style lang="less">

</style>