import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VueI18n from 'vue-i18n'

import zh from './zh.js'

import en from './en.js'



Vue.use(VueI18n)
const i18n = new VueI18n({
locale: localStorage.getItem('lang') || 'zh',
messages: {
'zh': zh, // 中文语言包
'en': en // 英文语言包
}
})

Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false
//修改title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
