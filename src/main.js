import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Vant导入
import Vant from 'vant'
// Vant 样式导入
import 'vant/lib/index.css'
// rem 適配基準值相關依賴包導入
import 'amfe-flexible/index.min.js'
// 導入全局樣式控制文件
// 在vant的css后導入
import '@/assets/css/global.less'
// Vant 注册
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
