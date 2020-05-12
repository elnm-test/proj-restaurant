import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import styles from './styles/global.scss'
import '@fortawesome/fontawesome-free/js/all.js'
import '@fortawesome/fontawesome-free/css/all.css'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import 'element-ui/lib/theme-chalk/index.css';
import '../src/helpersFunc'

Vue.use(ElementUI,{locale})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  styles,
  render: h => h(App)
}).$mount('#app')
