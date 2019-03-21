<template>
    <h1>{{ $t("navbar.archive") }}</h1>

</template>

<script>
    export default {
        name: 'Archive',
        components: {},
        methods: {
            goBack() {
                window.history.length > 1
                    ? this.$router.go(-1)
                    : this.$router.push('/')
            }
        }
    }
</script>

<style lang="less">

</style>