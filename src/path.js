import {islocal} from './fp'
const p1={
    "login":"/i/login",
    "logout":"/i/logout",
    "place_order":'/i/orders',
    "get_detail":"/api/a.json",
    "product_detail":"/api/product_detail",
    "orders":"/api/orders",
    "products":"/api/products",
    "upload":"/i/upload",
}

const p2={
    "login":"/i/login",
    "logout":"/i/logout",
    "place_order":'/i/orders',
    "get_detail":'/products/detail' ,
    "product_detail":"/i/products/detail",
    "orders":"/i/orders",
    "products":"/i/products",
    "upload":"/i/upload",
}


const addr=islocal ? p1 : p2
const img_path=`/img/`
export {addr,img_path}
