import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入element ui组件样式
import 'element-ui/lib/theme-chalk/index.css'
// 导入按需加载的element ui组件
import element from '@/element/index.js'
// 初始化全局样式
import '@/assets/less/global.less'
Vue.use(element)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
