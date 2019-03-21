<template>
    <vk-card class="uk-card-small">
        <div slot="media-top">
            <img v-if="thumbnail !== ''" :src="thumbnail" :alt="video.title">
        </div>
        <vk-card-title>
            {{ video.title }}
        </vk-card-title>
    </vk-card>
</template>

<script>
    import Api from '../utils/api'

    export default {
        name: "VideoThumb",
        props: ["video"],
        computed: {
            thumbnail: function () {
                let url = "";
                if (this.video.archive_files != null)
                    this.video.archive_files.forEach((item) => {
                        if (item.file_type === "image")
                            url = Api.getServerRoot() + item.file.small.url;
                    });
                return url
            }
        }
    }
</script>

<style lang="less">

</style>