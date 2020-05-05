// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import Vant from 'vant';
import 'vant/lib/index.css';


Vue.use(Vant);
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  console.log("全局路由守卫",to)
  window.document.title = to.meta.title == undefined?'默认标题':to.meta.title
  next();
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
