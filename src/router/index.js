import Vue from 'vue'
import Router from 'vue-router'
import { Message,Loading } from 'element-ui';
import store from "../store"

import HomePage from '../components/home'
import Order from '../components/order'
import Delivery from "../components/delivery"
import Returnpolicy from "../components/returnpolicy"
import Process from "../components/process"

import Login from "../components/login"
import Admin from "../components/admin"
import Orders from "../components/orders"
import Products from "../components/products"
import Products1 from "../components/products1"
import AddProduct from "../components/add_product"

Vue.use(Router)

const loading=()=>{
   let loadingInstance = Loading.service({ fullscreen: true });
   setTimeout(()=>loadingInstance.close(),300)
}
const totop=()=>window.scrollTo(0,0)
const set_title=(x)=>{ window.document.title=x; }
const set_title_by_path=(path)=>{
        const titles={
            "order":"我的订单",
            "returnpolicy":"退换货流程",
            "process":"购物流程",
            "delivery":"配送说明",
            "login":"登录",
            "admin":"控制面板",
            "orders":"订单列表",
            "products":"商品列表",
            "products1":"商品预览",
        }
       if (path !="/"){
          let t=titles[path.replace(/^\//,"")];
          t && set_title(t)
       }
}
const auth=(to, from, next) => {
       totop();
       set_title_by_path(to.path);
       let  token=store.getters['token'];
       if (to.matched.some(record => record.meta.requiresAuth)) {
          return  token ? next() :  next({ path: '/login', query: { redirect: to.fullPath } })
       }
       next()
}

const router=new Router({
  routes: [
    { path: '/', name: 'homepage', component: HomePage ,
        beforeEnter: async(to, from, next) => {
              store.dispatch('client/get_dress')
              next();
      }
    },
    { path: '/order', name: 'order', component: Order},
    { path: '/delivery', name: 'delivery', component:Delivery},
    { path: '/returnpolicy', name: 'returnpolicy', component:Returnpolicy},
    { path: '/process', name: 'process', component:Process},
    { path: '/login', name: 'login', component:Login},
    { path: '/admin',name:"admin", component: Admin, meta: { requiresAuth: true },
      children: [
          { path: 'orders', component:Orders, meta: { requiresAuth: true } } ,
          { path: 'products', component:Products, meta: { requiresAuth: true } } ,
//          { path: 'orders/:id', component:Orders, meta: { requiresAuth: true } } ,
//          { path: 'products/detail/:id', component:AddProduct, meta: { requiresAuth: true } } ,
      ]
    },
    { path: '/orders', component:Orders, meta: { requiresAuth: true },
      beforeEnter: async(to, from, next) => {
          store.dispatch('orders/get_orders')
          next();
      }
    },
    { path: '/products', component:Products, meta: { requiresAuth: true },
      beforeEnter:(to, from, next) => {
           store.dispatch('products/get_products')
           next();
      }
    } ,
    { path: '/products1', component:Products1, meta: { requiresAuth: true},
       beforeEnter:(to, from, next) => { store.dispatch('products/get_products'); next(); }
    } ,

    { path: '/products/detail/:id', component:AddProduct, meta: { requiresAuth: true },
       beforeEnter: (to, from, next) => {
           let id=+to.params.id;
           let d={ id, product_id:id, };
           store.commit('products/set_product_detail',d)
           store.dispatch('products/get_product_detail',d)
           next();
      }
    } ,
  ]
})

router.beforeEach(auth)
//router.afterEach((to, from, next) => {})
export default router

