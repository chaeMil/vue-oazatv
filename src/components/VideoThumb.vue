<template>
    <vk-card>
        <vk-card-title>
            {{ video.title }}
        </vk-card-title>
    </vk-card>
</template>

<script>
    export default {
        name: "VideoThumb",
        props: ["video"]
    }
</script>

<style lang="less">

</style>