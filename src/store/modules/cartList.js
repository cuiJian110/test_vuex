import {getData} from '@/api'
const cartList = {
    state: {
        cart_list: [
            // {"id": 1, "name": "zs1", "price": 10, "num": 1, "isChecked": false}
        ]
    },
    getters: {
        getTotal(state) {
            return state.cart_list.length;
        },
        getLastId(state,getters) {
            return state.cart_list[getters.getTotal - 1].id
        },
        getIsAllSelected(state,getters) {
            if(getters.getTotal === getters.getSelected) {
                return true;
            } else {
                return false;
            }
        },
        getSelected(state) {
            let sum = 0;
            for (let item of state.cart_list) {
                if(item.isChecked) {
                    sum = sum + 1
                }
            }
            return sum
        },
        getSelectedMoney(state) {
            let sum = 0;
            for(let item of state.cart_list) {
                if(item.isChecked) {
                    sum = item.num * item.price + sum
                }
            }
            return sum
        }
    },
    mutations: {
        changeStatus(state,id) {
            for ( let item of state.cart_list) {
                if(item.id === id) {
                    item.isChecked = !item.isChecked
                }
            }
        },
        jiayi(state,id) {
            for (let item of state.cart_list) {
                if(item.id === id) {
                    item.num = item.num + 1;
                }
            }
        },
        jianyi(state,id) {
            for (let item of state.cart_list) {
                if(item.id === id) {
                    item.num = item.num - 1;
                }
            }
        },
        delById(state,id) {
            let i = 0;
            state.cart_list.forEach((item,index) => {
                if(item.id === id) {
                    i = index
                }
            });
            state.cart_list.splice(i,1)
        },
        addItem(state,value) {
            state.cart_list = [...state.cart_list,value]
        },
        changeAllStatus(state,flag) {
            for(let item of state.cart_list) {
                item.isChecked = flag
            }
        },
        initCartList(state,arr) {
            state.cart_list = arr;
        }
    },
    actions: {
        handleAddItem({commit},obj) {
            commit('addItem',obj)
        },
        handleChangeAllStatus({commit},value) {
            commit('changeAllStatus',value)
        }
    }
}
export default cartList;