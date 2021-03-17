import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

import 'bulma/css/bulma.css'

window.api = axios.create({
    baseURL: 'https://allweb.fun/coop/api/',
    headers: { Authorization: '92090f29b970e387c6fedc36c849a86bfcc47e0b' }
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