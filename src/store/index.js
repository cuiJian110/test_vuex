import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import {cartList} from './modules'
const store = new Vuex.Store({
    modules: {
        cartList,
    }
})
export default store;