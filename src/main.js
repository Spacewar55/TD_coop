import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

import 'bulma/css/bulma.css'

window.api = axios.create({
    baseURL: 'https://tools.sopress.net/iut/coop/api/',
    headers: { Authorization: '9fed0c214b4f61121158a3f8d6955f9874d1d611' }
  });

Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    api.interceptors.request.use(config => {
        if(this.$store.state.token) {
            config.url+='?token='+this.$store.state.token
        }
        return config;
    })
},
    router,
    store,
    render: h => h(App)
}).$mount('#app');