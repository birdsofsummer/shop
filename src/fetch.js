import { islocal, reducer, spread, pspread, say, copy, say_error, each, map, queque, localStorage1, url_formator,maybe_json,tojson,} from "./fp"
import axios from 'axios'
import { Message,Loading } from 'element-ui';

import router from './router'
import store from "./store"
import {addr} from "./path"
import {merge} from 'rxjs'

const msg=(action="")=>(ok=true)=> ok
    ? Message({ type: 'success', message: action + '成功' })
    : Message({ type: 'error', message: "糟糕!!服务器开小差了.. "+action + '失败,请稍后重试'});

const when=(action="",f,cb=null)=> merge(f).subscribe({
    next: ({ok,data,method,query,statusText,url,status})=>{
        msg(action)(ok) ;
        ok ? cb && cb(ok,data) :null
    },
    error:say('error'),
    complete:say('done'),
})

const fomat_body=(method,params)=>{
        if  (/get/.test(method)) {
            return {params}
        }else if (/delete/.test(method)){
            return {data:params}
        }else{
           // return new URLSearchParams(params);
            return params
        }
}

const response_handler=res=>{ res.ok=true; return res; }
const error_handler=error=>{
       const  {config:{method},response:{status,statusText,request:{responseURL}}}=error;
       console.error([method,responseURL,status,statusText].join('|'))
       const {response}=error
        if (status == 401){
           Message.error({ message: "plz relogin !", type: 'error',showClose: true, });
           store.commit('save_token');
           store.dispatch('go',"/login");
        }
       let data= islocal ? {token:Date.now()} :{};
       return { ...response, ok:false, data, error, }
}

const creat_axios=(h={token:123})=>{
    let instance = axios.create({ baseURL: "/"})
    Object.assign(instance.defaults.headers.common,h);
//   instance.defaults.timeout = 2500;
//    instance.interceptors.request.use(say('req'),say('req error'))
    instance.interceptors.response.use(response_handler,error_handler)
    return instance;
}

const tk=()=>{
    const v=localStorage1.vuex;
    const f=v=>({
        "token": v.token,
        "dns" : window.location.href,
    })
    return  v ? f(v) : null
}

const  ajax=(method="get")=>(url)=>async(params={})=>{
    let a;
    let d=d=fomat_body(method,params)
    let loadingInstance = Loading.service({ fullscreen: true });
    const instance=creat_axios(tk());
    try{
       a=await instance[method](url,d)
       a.query=params;
       a.method=method;
       a.url=url;
    }catch(e){
       return Promise.reject(e)
    }finally{
       loadingInstance.close();
       //say('aaaaaaaaaaaaaa')(a)
       return a
    }
}

const http_method=["get","put","post","delete"];
const http=reducer(ajax)(http_method);

const gets=pspread(http.get)
const get1=async u=>{
    const d=await window.fetch(u)
    return await d.json();
}

const post=u=>d=>window.fetch(u,{method:"post",body:JSON.stringify(d)})

const cf={
    "dash":`https://cf.qing.workers.dev`,
    "dns":`https://cf.qing.workers.dev/dns`,
}

const get_dash=()=>get1(cf.dash)
const add_dns=(name)=>post(cf.dns)({name})


const creat_api=(name)=>{
      let m={
            'get':['list','read'],
            'put':['update'],
            'delete':['del'],
            'post':['creat','create'],
      };
      let a={};
      let f1=(k,v,i,o)=>map(x=>a[x]=http[k](addr[name]))(v)
      let f2=(k,v,i,o)=>a[k]=http[k]
      each(f1)(m)
      each(f2)(m)
      return a;
}

const creat_api1=(urls={})=>{
      let aa={};
      const f1=(name)=>aa[name]=creat_api(name)
      each(f1)(urls)
      return aa;
}


const api0=creat_api1(addr);
const api1={
    place_order:async(d)=>{
        let loadingInstance = Loading.service({ fullscreen: true });
        let r=await post(addr.place_order)(d)
        loadingInstance.close();
        r.data={};
       if (r.ok){
           Message.success({ message: "success!", type: 'success',showClose: true, });
           r.data=await r.json();
           let {order_id}=r.data;
           //store.dispatch('go',"/order");
           router.push(`/order/${order_id}`)
       }else{
           Message.error({ message: "fail!", type: 'error',showClose: true, });
       }
       return r;
    },
    get_order:async(d={id:0})=>{

        let u0='/i/orders/:{id}'
        let u1=url_formator(u0)(d)
        let r=await fetch(u1);
        let t=await r.text();
        let j=tojson(t);
        r.data=j;

        if ( !r.ok){
           Message.error({ message: "fail!", type: 'error',showClose: true, });
        }
        return r
    },
    get_detail:async()=>{
        let loadingInstance = Loading.service({ fullscreen: true });
        let b=await window.fetch(addr.get_detail)
        loadingInstance.close();
        if (b.ok){
            let c=await b.json()
            return c;
        }else{
           Message.error({ message: "fail!", type: 'error',showClose: true, });
       }
    },
    login:http.post("/i/login"),
    dash:get_dash,
    add_dns:add_dns,

}
const api=copy(api0)(api1)
export default http
export {gets,say,api,when}
