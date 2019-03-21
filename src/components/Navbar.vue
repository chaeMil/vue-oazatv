<template>
    <vk-navbar>
        <div class="uk-container">
            <vk-navbar-nav>
                <vk-navbar-logo>
                    <router-link to="/">Oáza.tv</router-link>
                </vk-navbar-logo>
                <vk-navbar-item>
                    <router-link to="/archive">{{ $t("navbar.archive") }}</router-link>
                </vk-navbar-item>
            </vk-navbar-nav>
        </div>
    </vk-navbar>
</template>

<script>
    export default {
        name: 'Navbar',
        components: {}
    }
</script>

<style lang="less" scoped>

</style>