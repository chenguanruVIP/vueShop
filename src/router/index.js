import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/shop/index'
import classify from '@/components/shop/classify'
import cart from '@/components/shop/cart'
import goodInfo from '@/components/shop/goodInfo'
import member from '@/components/member/member'
import orderList from '@/components/member/orderList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{
        title:'首页',
        login:false,
        isAlive:true,
        idTabbat:true
      }
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify,
      meta:{
        title:'分类',
        login:false,
        isAlive:false,
        idTabbat:true
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
      meta:{
        title:'购物车',
        login:true,
        isAlive:false,
        idTabbat:true
      }
    },
    {
      path: '/member',
      name: 'member',
      component: member,
      meta:{
        title:'个人中心',
        login:true,
        isAlive:false,
        idTabbat:true
      }
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: orderList,
      meta:{
        title:'订单中心',
        login:true,
        isAlive:false
      }
    },
    {
      path: '/goodInfo',
      name: 'goodInfo',
      component: goodInfo,
      meta:{
        title:'商品详情',
        login:false,
        isAlive:false
      }
    }
  ]
})
