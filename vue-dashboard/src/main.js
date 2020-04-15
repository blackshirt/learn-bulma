import Vue from 'vue'
import App from './App.vue'

import router from './router'
import DefaultLayout from './layout/DefaultLayout'
import PublicLayout from './layout/PublicLayout'


Vue.component('public-layout', PublicLayout);
Vue.component('default-layout', DefaultLayout);

Vue.config.productionTip = false

new Vue({
    el: "#app",
    router,
    render: h => h(App),
});