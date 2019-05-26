import Vue from 'vue'
import Router from 'vue-router'
import { Message,Loading } from 'element-ui';
import store from "../store"



Vue.use(Router)
const loading=()=>{
   let loadingInstance = Loading.service({ fullscreen: true });
   setTimeout(()=>loadingInstance.close(),300)
}
const totop=()=>window.scrollTo(0,0)
const auth=(to, from, next) => {
       totop();
       if (to.meta.title) { document.title = to.meta.title }
       let  token=store.getters['token'];
       if (to.matched.some(record => record.meta.requiresAuth)) {
          return  token ? next() :  next({ path: '/login', query: { redirect: to.fullPath } })
       }
       next()
}

const is_admin=/www/.test(location.href)
const is_home=((x)=> {return x!= "localhost" && x.match(/\./ig).length==1})(location.hostname)

const init_home=async(to, from, next) => {
              if (!(is_admin || is_home)) store.dispatch('client/get_dress')
              if (is_home) {
                   store.dispatch('products/get_products')
              }
              next();
}

const init_products=(to, from, next) => {
           store.dispatch('products/get_products')
           next();
}
const init_product= (to, from, next) => {
           let id=+to.params.id;
           let d={ id, product_id:id, };
           store.commit('products/set_product_detail',d)
           store.dispatch('products/get_product_detail',d)
           next();
}
const  init_orders=async(to, from, next) => {
          store.dispatch('orders/get_orders')
          next();
}
const init_order=(to, from, next) => {
           let d={ id:to.params.id };
           store.dispatch('client/get_order',d)
           next();
}

const HomePage =()=>import('@/components/home')
const HomePage1 =()=>import('@/components/home1')
const Order =()=>import('@/components/order')
const Order1 =()=>import('@/components/order1')
const SearchOrder =()=>import('@/components/search_order')
const Delivery =()=>import('@/components/delivery')
const Returnpolicy =()=>import('@/components/returnpolicy')
const Process =()=>import('@/components/process')

const  Login =() => import('@/components/login')
const  Admin =() => import('@/components/admin')
const  Orders=() => import('@/components/orders')
const  Products=()=>import('@/components/products')
const  Products1=()=>import('@/components/products1')
const  AddProduct=()=>import('@/components/add_product')
const  UserInstructions=()=>import('@/components/user_instructions')

const router=new Router({
  mode: 'history',
  routes: [
    { path: '/delivery', name: 'delivery', component:Delivery,meta:{title:"配送说明"}},
    { path: '/returnpolicy', name: 'returnpolicy', component:Returnpolicy,meta:{title:"退换货流程"}},
    { path: '/process', name: 'process', component:Process,meta:{title:"购物流程"}},
    { path: '/user_instructions', name: 'user_instructions', component:UserInstructions,meta:{title:"用戶須知"}},
    { path: '/login', name: 'login', component:Login,meta:{title:"登录"}},
    { path: '/admin',name:"admin", component: Admin, meta: { requiresAuth: true ,title:"控制面板"},
      children: [
          { path: 'orders', component:Orders, meta: { requiresAuth: true,title:"" } } ,
          { path: 'products', component:Products, meta: { requiresAuth: true,title:"" } } ,
      ]
    },
    { path: '/order/:id', name: 'order1', component: Order,meta: { requiresAuth: false,title:"下单成功"},},
    { path: '/', name: 'homepage', component:is_admin? Login : is_home ? Products1 : HomePage1, beforeEnter:init_home,},
    { path: '/index', name: 'homepage1', component: HomePage , meta:{title:"主页"}, beforeEnter:init_home},
    { path: '/orders',name: 'orders' ,component:Orders, meta: { requiresAuth: true,title:"订单列表" }, beforeEnter:init_orders},
    { path: '/search_order',name: 'search_order', component:SearchOrder, meta: { requiresAuth: false,title:"搜索订单"}, },
    { path: '/orders/:id', name: 'order',component:Order1, meta: { requiresAuth: false,title:"订单详情"}, beforeEnter: init_order, },
    { path: '/products', name: 'products',component:Products, meta: { requiresAuth: true,title:"商品列表" }, beforeEnter:init_products } ,
    { path: '/products1', name: 'products1', component:Products1, meta: { requiresAuth: true,title:"商品列表"}, beforeEnter:init_products } ,
    { path: '/products/detail/:id',name: 'product', component:AddProduct, meta: { requiresAuth: true ,title:"商品详情"}, beforeEnter:init_product } ,
  ]
})

router.beforeEach(auth)
//router.afterEach((to, from, next) => {})
export default router

