import Vue from 'vue'
import Router from 'vue-router'
import CartList from '../page/cartList'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/cartList'},
    {path: '/cartList', name: 'cartList', component: CartList}
  ]
})
