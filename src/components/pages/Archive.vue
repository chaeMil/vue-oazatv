<template>
    <div class="uk-container">
        <h1>{{ $t("navbar.archive") }}</h1>
        <vk-grid class="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l"
                 matched gutter="medium">
            <div v-for="video in videos" :key="video.id">
                <VideoThumb :video="video"/>
            </div>
        </vk-grid>
    </div>
</template>

<script>
    import Api from "../../utils/api";
    import axios from 'axios';
    import VideoThumb from '../VideoThumb';

    export default {
        name: 'Archive',
        components: {VideoThumb},
        data: function () {
            return {
                videos: []
            }
        },
        methods: {
            goBack() {
                window.history.length > 1
                    ? this.$router.go(-1)
                    : this.$router.push('/')
            }
        },
        mounted() {
            axios
                .get(Api.getServer() + "videos/")
                .then(response => {
                    this.videos = response.data;
                });
        }
    }
</script>

<style lang="less">

</style>