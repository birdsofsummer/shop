import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'babel-polyfill'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './main.styl'
//import { Loading } from 'element-ui';

Vue.use(Vuetify)
Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App),
  data () { return { }},
  created(){ this.$loading({ fullscreen: true }) },
  mounted () { this.$loading().close() }
}).$mount('#app')
