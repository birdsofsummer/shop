import {api} from "../../fetch"
import router from '../../router'
import { Message } from 'element-ui';
import { rnd, updateById1, getIndexById, removeById, append, cp, add2, has, fill, fill1, uniq, pipe, map, int_fomator1, } from "../../fp"

import {state} from './client_state'
const getters={};
const actions={
    async get_dress(context,payload){
      let c=await api.get_detail();
       context.commit("set_dress",c)
    },
    place_order(context,payload){ return api.place_order(payload); },
    async get_order(context,payload){
        let a =await api.get_order(payload);
        if  (a.ok && a.data.name ){
            context.commit("set_order",a.data);
        }
        return a;
    },
};

const mutations={
       set_address(state, payload={}){ state.address1=payload; },
       set_dress(state, payload={}){ state.dress=payload; },
       set_cart(state,{content,cart_info}){
           state.content=content;
           state.cart_info=cart_info;
       },
        set_order(state,payload={}){
           state.order = payload
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

