import {api,when} from "../../fetch"
import router from '../../router'
import { Message } from 'element-ui';
import { rnd, updateById1, getIndexById, removeById, append, cp, add2, has, fill, fill1, uniq, pipe, map, int_fomator1, } from "../../fp"
const getters={};
const state={
    orders:[],
    order:{
        "id": 12,
        "product_id": 59,
        "content": " (夏装新款--紫色--M--1)  (夏装新款--绿色--XXL--1) {总件数：2, 总价：3376.000000}",
        "name": "littleyeoh",
        "address": "東門路……東龍>77門市",
        "mobile": "1111111",
        "note": "",
        "email": "e7dyyte68f@mail.ru",
        "create_time": 1547449477,
        "delivery": "未发货",
        "remark": ""
    },

};
const actions={
    async get_orders({commit}){
        let {ok,data}=await api.orders.list();
        ok && commit('set_orders',data)
    },
    del_order({commit},payload){
         when('删除订单',api.orders.del(payload),()=>commit('del_order',payload))
    },
    edit_order({commit},payload){
         when('修改订单',api.orders.update(payload),()=>commit('edit_order',payload))
    },

};
const mutations={
      set_orders(state,payload=[]){ state.orders=payload; },
      del_order(state,payload=null){
            let p=state.orders;
            state.orders=removeById(p)(payload)
      },
      edit_order(state,payload={}){
           updateById1(state.orders)(payload)
      },
};
const m={
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
//    plugins:[],
}

export default m
