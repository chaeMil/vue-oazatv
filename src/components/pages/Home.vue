<template>
    <h1>HOME</h1>
</template>

<script>
    export default {
        name: 'Home',
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