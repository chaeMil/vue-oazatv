<template>
    <div>
        <h1>{{ $t("navbar.archive") }}</h1>
        <div class="videos">
            <VideoThumb v-for="video in videos" :key="video.id" :video="video"/>
        </div>
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