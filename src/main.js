import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from "axios";

// axios.defaults.baseURL="http://127.0.0.1:3333/api/v1/"
axios.defaults.baseURL="https://project-scp-adonis.herokuapp.com/api/v1/"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
let token = window.localStorage.getItem('_tokenOne')
if(token){
  axios.defaults.headers.post['Authorization'] = `Bearer ${window.localStorage.getItem('_tokenOne')}`
  axios.defaults.headers.put['Authorization'] = `Bearer ${window.localStorage.getItem('_tokenOne')}`
  axios.defaults.headers.delete['Authorization'] = `Bearer ${window.localStorage.getItem('_tokenOne')}`
    // "Access-Control-Allow-Origin": "*",
    //'Authorization': `Bearer ${window.localStorage.getItem('_tokenOne')}` 
}
else{
    router.push("/login")
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
