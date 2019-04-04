<template>
    <div class="uk-container">
        <h1>{{ $t("navbar.archive") }}</h1>
        <vk-grid class="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l"
                 matched gutter="medium">
            <div v-for="video in videos" :key="video.id">
                <VideoThumb :video="video"/>
            </div>
        </vk-grid>
        <vk-pagination :page.sync="currentPage" :perPage="15" :total="total">
            <vk-pagination-page-prev></vk-pagination-page-prev>
            <vk-pagination-pages></vk-pagination-pages>
            <vk-pagination-page-next></vk-pagination-page-next>
        </vk-pagination>
    </div>
</template>

<script>
    import Api from "../../utils/api";
    import axios from 'axios';
    import VideoThumb from '../VideoThumb';

    export default {
        name: 'Archive',
        components: {VideoThumb},
        props: ["page"],
        data: function () {
            return {
                videos: [],
                total: 0,
            }
        },
        computed: {
            currentPage: {
                get: function () {
                    return parseInt(this.page != null ? this.page : 1);
                },
                set: function (value) {
                    this.$router.push({name: 'archive', params: {page: value.toString()}}, () => {
                        window.scrollTo(0,0);
                        this.getArchivePage();
                    });
                }
            }
        },
        methods: {
            goBack() {
                window.history.length > 1
                    ? this.$router.go(-1)
                    : this.$router.push('/')
            },
            getArchivePage() {
                axios
                    .get(Api.getServer() + "videos/?page=" + this.$route.params.page)
                    .then(response => {
                        this.videos = response.data.videos;
                        this.total = response.data.count;
                    });
            }
        },
        mounted() {
            this.getArchivePage();
        }
    }
</script>

<style lang="less">

</style>