import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import '@vuikit/theme'

import Home from './components/pages/Home';
import Archive from './components/pages/Archive';

Vue.use(VueRouter);
Vue.use(Vuikit);
Vue.use(VuikitIcons);

const routes = [
    {path: '/', component: Home},
    {path: '/archive', component: Archive}
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
