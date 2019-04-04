<template>
    <div class="uk-container">

    </div>
</template>

<script>
    import Api from "../../utils/api";
    import axios from 'axios';

    export default {
        name: 'Archive',
        components: {},
        props: ["video_hash"],
        data: function () {
            return {
                video: null
            }
        }
    }
</script>

<style lang="less">

</style>