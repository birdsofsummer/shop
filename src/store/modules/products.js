import {api,when} from "../../fetch"
import router from '../../router'
import { Message } from 'element-ui';
import { rnd, updateById1, getIndexById, removeById, append, cp, add2, has, fill, fill1, uniq, pipe, map, int_fomator1, say} from "../../fp"


const product_formator=int_fomator1(["price","vol"])
const getters={};
const state={
    products:[],
    product:{
        "id": 0,
        "dns": "jiakai.zhuixun77.top",
        "name": "绣花无袖连衣裙",
        "currency": "￥",
        "price_1": 998,
        "price_2": 888,
        "volume": 100,
        "sales_volume": 80
    },
    product_detail:{
          "id":0,
          "product_id":0,
          "dns":window.location.href,
          "cover": [{name:"灰色",url:"/img/1.jpg"}],
          "header":[{name:"灰色",url:"/img/1.jpg"}],
          "color": [{name:"灰色",url:"/img/1.jpg"}],
          "size": ["均码"],
          "price": [ { "qty": 1, "value": 1e4,"name":"test1"}, { "qty": 2, "value": 1e3,"name":"test2"} ],
          "tag": ["修身型","直筒","A字型" ],
          "support": ["包邮","七天包换"],
          "content": "<h4>商品描述</h4><br/><br/><br/><br/><h4>细节展示</h4>"
    },

};

const actions={
    async get_products({commit}){
        let {ok,data}=await api.products.list();
         ok && commit('set_products',data)
    },
    async get_product_detail({commit},payload){
       let {ok,data}=await api.product_detail.read(payload);
         ok && commit("set_product_detail",data);
    },
    async add_product({commit},payload){
         let d=product_formator(payload)
         when("新增商品",api.products.creat(d),(ok,data)=>commit('add_product',data));
    },
    async edit_product({commit},payload){
         let d=product_formator(payload)
         when("修改商品信息",api.products.update(d),()=>commit('edit_product',payload));
    },
    async del_product({commit},payload){
       when("删除",api.products.del(payload),()=>commit('del_product',payload));
    },
    async save_product_detail(context,payload){
         let d=context.state.product_detail
         when("修改详情",api.product_detail.update(d));

    },

};

const mutations={
       set_products(state,payload=[]){ state.products=payload; },
       add_product(state,payload=null){
          state.products.push({...payload})
          //state.products=append(state.products)(d)
      },
      del_product(state,payload=null){
            let p=state.products;
            state.products=removeById(p)(payload)
      },
      edit_product(state,payload={}){
           updateById1(state.products)(payload)
      },
      set_product_detail(state,payload={}){
           const {product_detail}=state;
           state.product_detail ={...product_detail, ...payload};
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
