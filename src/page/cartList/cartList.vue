<template>
    <div>
        <div>
            <button @click='handle_AddItem(getLastId + 1)'>addItem</button>
            <input id='all' type="checkbox" @change='handleAllStatus' :checked='getIsAllSelected'>
            <label for="all">
                <span>全选</span>
            </label>
        </div>
        <div
            v-for='item in  cartList'
            :key='item.id'
        >
            <input type="checkbox" 
            :checked='item.isChecked'
            @change="changeStatus(item.id)"
            >
            name: {{item.name}}
            price: {{item.price}}
            num: {{item.num}}
            <button @click='jiayi(item.id)'>+1</button>
            <button @click='jianyi(item.id)'>+1</button>
            <button @click='delById(item.id)'>del</button>
        </div>
        <br>
        <div>
            total: {{getTotal}}
            lastId: {{getLastId}}
            selected: {{getSelected}}
            selectedMoney: {{getSelectedMoney}}
        </div>
        <hr>
        <button @click='handletestPost'>testPost</button>
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
import {getData,testPost} from '@/apiiii'
export default {
    computed: {
        ...mapState({
            cartList: state => state.cartList.cart_list
        }),
        ...mapGetters(['getTotal','getLastId','getIsAllSelected','getSelected','getSelectedMoney'])
    },
    created() {
        this.handleInitCartList()
    },
    methods: {
        ...mapMutations(['changeStatus','initCartList','jiayi','jianyi','delById']),
        ...mapActions(['handleInitCartList','handleAddItem','handleChangeAllStatus']),
        handle_AddItem(id) {
            const obj = {
                id: id, 
                name: `zs${id}`, 
                price: 10, 
                num: 1, 
                isChecked: false
            }
            this.handleAddItem(obj)
        },
        handleAllStatus(e) {
            console.log(e.target.checked)
            this.handleChangeAllStatus(e.target.checked)
        },
        initData() {
            getData({page: 1,pageSize: 10}).then(res =>{
                console.log(res)
                if(res.data.code === 200) {
                    this.initCartList(res.data.msg)
                }
            })
        },
        handletestPost() {
            const obj = {name: 'zs',age: 1}
            testPost(obj).then(res => {
                console.log(res)
            }).catch(res => {
                console.dir(res)
            })
        }
    },
    created() {
        this.initData()
    }
}
</script>
<style>

</style>

