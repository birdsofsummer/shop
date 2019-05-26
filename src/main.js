import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
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

navigator.serviceWorker.register('sw.js', { scope: '/' })
Vue.use(Vuetify)
Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: 'img/1.jpg',
  loading: 'img/loading.gif',
  attempt: 1,
  // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
  listenEvents: [ 'scroll' ],
  lazyComponent: true,
  observer: true,
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  },

})
Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App),
  data () { return { }},
  created(){ this.$loading({ fullscreen: true }) },
  mounted () { this.$loading().close() }
}).$mount('#app')


