import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import mui from '../static/mui/js/mui.js'
import '../static/mui/css/mui.css'
import '../static/mui/css/mui-icons-extra.css'
import '../static/mui/css/iconfont.css'
import '../static/normalize.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
