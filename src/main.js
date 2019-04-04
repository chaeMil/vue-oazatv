import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import '@vuikit/theme'

import Home from './components/pages/Home';
import Archive from './components/pages/Archive';
import Video from './components/pages/Video';

import i18n from './i18n'

Vue.use(VueRouter);
Vue.use(Vuikit);
Vue.use(VuikitIcons);

const routes = [
    {path: '/', component: Home},
    {name: 'archive', path: '/archive/:page?', component: Archive, props: true},
    {name: 'video', path: '/video/watch/:hash_id', component: Video, props: true}
];

const router = new VueRouter({
    routes
});

Vue.config.productionTip = false;

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app');
