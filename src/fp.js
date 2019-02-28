import {List,Map} from "immutable"
const  cart2table1=({cart,cart_info:{amount,unit,qty},dict,price,price_1})=>Object.entries(cart)
    .filter(([k,v])=>v>0)
    .map(([k,v])=>[...dict[k],v])
    .map(([color,size,qty])=>({color,size,qty,price_1,unit,sum:unit*qty}));

const add_key=(b=[])=>(a=[])=>a.reduce((acc,v,i)=>(acc[b[i]]=v,acc),{})
const add_keys=(a=[])=>(b=[])=>a.map(add_key(b));
//add_keys(t)(["color","size","qty"])
const copy=(a={})=>(b={})=>Object.assign(a,b)
const sum=z=>Object.entries(z).reduce((a,b)=>(a=a+b[1],a),0)
const minby=(arr=[])=>(key)=>Math.min(...arr.map(x=>x[key]))
const maxby=(arr=[])=>(key)=>Math.max(...arr.map(x=>x[key]))
const getprice=(arr)=>(key1="qty",key2="value")=>(n)=>{
    if (n==0) return List(arr).maxBy(x=>x[key2])[key2];
    let a= List(arr).sortBy(x=>x[key1]).takeWhile(x=>x[key1]<=n),
        b=a.last(),
        c=b[key2];
    return c;
}
const drop=o=>k=>Map(o).remove(k).toJS()

const cross_join=(arr1=[])=>(arr2=[])=>(d=0)=>{
  let o={};
  let dict={};
  for (let i=0;i<arr1.length;i++){
      for (let j=0;j<arr2.length;j++){
          let k=`${i}_${j}`
          o[k]=d
          dict[k]=[arr1[i],arr2[j]]
      }
  }
    const decode=(obj={})=>(Object.entries(obj)
        .filter(([k,v])=>v>0)
        .map(([k,v])=>[...dict[k],v]))
  return [o,dict,decode];
}
const  add=(a,b)=>isNaN(+b) ? a : (+b)+a ;
const  add1=(arr=[])=>arr.reduce(add,0);
const  add2=(arr=[])=>k=>add1(arr.map(y=>y[k]));
const  cp=x=>JSON.parse(JSON.stringify(x))
const  cp1=(o1,o2)=>k=>o1[k]=o2[k]

const rnd=(n=1)=>parseInt(Math.random()*10**n)
const getIndexById=(a=[])=>(d={id:0})=>a.findIndex(x=>x.id==d.id)
const updateById=(a=[])=>(d={id:0})=>{
    let b=cp(a)
    b[b.findIndex(x=>x.id==d.id)]=cp(d);
    return b;
}
const each=fn=>(a={})=>window.Object.entries(a).map(([k,v],i,o)=>fn(k,v,i,o))

const each0=(a={})=>fn=>window.Object.entries(a).map(([k,v],i,o)=>fn(k,v,i,o))

const each1=fn=>(a={})=>Map(a).map(fn);

const updateById1=(o=[])=>(d={id:0})=>{
    let i=getIndexById(o)(d);
    let z=o[i];
    each0(z)(cp1(z,d))
}
const removeById=(a=[])=>(d={id:0})=>a.filter(x=>x.id!=d.id)
const append=(a=[])=>(d={})=> d.id ? [...a,{...d}] : [...a,{...d,id:rnd(5)}] ;
const has=(b)=>(k="name")=>a=> !b || new RegExp(b).test(a[k])
const uniq=(arr=[])=>[...new Set(arr)];
const pipe=(fs=[])=>(arr=[])=>fs.reduce((a,b)=>b(a),arr)
const map=(fn=x=>x)=>(arr=[])=>arr.map(fn);

const fill=(arr=[])=>(i=true)=>arr.map(x=>i)
const fill1=(i=true)=>(arr=[])=>arr.map(x=>i)

const reducer=(f)=>(arr=[])=>arr.reduce((a,b)=>(a[b]=f(b),a),{});

const reducer1=(f)=>(o={})=>Object.entries(o).reduce((a,[k,v])=>(a[k]=f(k,v),a),{})
const reducer2=(f)=>(o={})=>c=>Object.entries(o).reduce((a,[k,v])=>(a[k]=f(k,v),a),c)
const  cp2=(o1={})=>(o2={})=>reducer2((k,v)=>v)(o1)(o2)


const spread=(f)=>(arr=[])=>arr.map(x=>f(x));
const pspread=(f)=>(arr=[])=>Promise.all(arr.map(x=>f(x)));
const queque=(arr=[])=>Promise.all(arr)
const say=(x)=>(y)=>(console.log(x,y),y)
const say_err=(x)=>(y)=>(console.error(x,y),y)
const json_proxy=(o={})=>new Proxy(o ,{ get :(o,n)=>n in o ? JSON.parse(o[n]) :o[n]});
const int_proxy=(o={})=>new Proxy(o,{get:(o,n)=>+o[n]||0})
const int_proxys=(kk=[])=>(o={})=>new Proxy(o,{get:(o,n)=>kk.includes(n) ? +o[n]||0 : o[n]})
const int_proxys1=(kk=[])=>(o={})=>new Proxy(o,{
    get:(o,n)=>{
    if (kk.length <1) return o[n] ;
    let c=new RegExp(kk.join('|'))
    return c.test(n) ? +o[n]||0 : o[n];
}})
const int_fomator=(k=[])=>(o={})=>cp(int_proxys(k)(o))
const int_fomator1=(k=[])=>(o={})=>cp(int_proxys1(k)(o))


const int_formator=(kk=['value','qty'])=>x=>Object.entries(x).map(([k,v])=>(kk.includes(k) ? [k,+v]:[k,v]))
const int_formators=(kk=['value','qty'])=>(arr=[])=>arr.map(int_formator(kk)).map(Object.fromEntries)

const localStorage1=json_proxy(window.localStorage)
const mapState1=(o={})=>(key="")=>{
    let a=o[key];
    let f=(k,v)=>s=>s[key][k];
    return {
        ...reducer1(f)(a),
        [key]:s=>s[key],
    }
}


const slice1=(arr=[])=>(current=1)=>(size=10)=>{
      let p1=current*size,p2=p1+size;
      return arr.slice(p1,p2)
}
const len1=(arr=[])=>(size=1)=>{
    let l1=arr.length
    let l2=l1/size
    return [l1,l2]
}


const islocal=/localhost/.test(window.location.href)


/*
const cs=(n=1)=>(a=[])=>(b=[])=>Array(n).fill(0).map((v)=>a.map((k,i)=>b.map((bb,j)=>[i,j,0])).flat())
const cs1=(n=1)=>(a=[])=>(b=[])=>Array(n).fill(0).map((v,nn)=>a.map((k,i)=>b.map((bb,j)=>[nn,i,j,0])).flat()).flat()

const cross_join2=(n=1)=>(a=[])=>(b=[])=>Array(n).fill(0).map((nn)=>a.map((k,i)=>b.map((bb,j)=>[[nn,i,j].join('_'),k,bb,false])).flat().reduce((acc,[index,color,size,checked])=>({...acc,[index]:{color,size,checked,index}}),{}))

const cross_join2_d=(pack=[])=>pack.map(x=>Object.entries(x).filter(([k,v])=>v.checked==true)).flat().map(x=>x[1])
const reset_pack_row=(x,i)=>Object.entries(x).forEach(([k,v])=>x[k].checked=k=="0_0_0"?true:false)
const reset_pack=(pack=[])=>pack.forEach(reset_pack_row)
const init_pack_row=x=>Object.entries(x).forEach(([k,v])=>x[k].checked=false)
const init_pack=(pack=[])=>(row=0)=>init_pack_row(pack[row])

const set_pack=(pack=[])=>(n,...i)=>{
    init_pack(pack)(n)
    pack[n][i.join("_")].checked = true
}

*/

const init_current_pack=(n=1)=>Array(n).fill(0).map(()=>({color:0,size:0}))

const current_pack_gen=(i=0,n=1,unit=999)=>{
       const current_pack=init_current_pack(n);
       return {
            content:current_pack,
            cart_info:{
                qty:1,
                qty1:i,
                unit,
                amount:unit,
                discount:0,
            }
        }
}

const current_pack_decode=({color,size,packs,current_pack:{content,cart_info}})=>{
    const parse_color_size=(x)=>({color:color[x.color],size:size[x.size],i:[x.color,x.size].join("_")})
    const c1=content.map(parse_color_size)
    return {"content":c1,cart_info}
}
const place_order1=({content,cart_info,address1,dress,place_order})=>{
   let dns=window.location.href;
   let dress1=drop(dress)("content");
   let o={product_id:dress.id,dns,cart_info,content,...address1,product:dress1};
    place_order(o)

}


const updateRow=({i,table,row})=>{
   const t=cp(table)
   t[i]=cp(row)
   return t;
}
const addRow=({table,row})=>([...table,{...row}])
const delRow=({i,table}={i:0,table:[]})=>table.filter((x,n)=>n!==i)

const log=x=>console.log(JSON.parse(JSON.stringify(x)))
export {
    cross_join,
    sum,
    minby, maxby,
    getprice,
    copy,
    cp,
    cp1,
    cp2,
    drop,
    add_keys,
    add1,
    add2,
    add3,
    rnd,
    updateById,updateById1,updateRow,delRow,addRow,
    removeById,
    getIndexById,
    append,
    has,
    fill,
    fill1,
    uniq,
    pipe,
    map,
    reducer,spread,pspread,say,say_error,
    each,
    queque,
    json_proxy,
    localStorage1,
    int_proxy,
    int_proxys,
    int_fomator,
    int_fomator1,
    reducer1,
    mapState1,
    islocal,
    slice1,len1,
    init_current_pack,current_pack_gen,current_pack_decode,
    place_order1
}
