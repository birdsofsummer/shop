import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import { Loading } from 'element-ui';

Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App),
  data () { return { }},
  created(){ this.$loading({ fullscreen: true }) },
  mounted () { this.$loading().close() }
}).$mount('#app')
