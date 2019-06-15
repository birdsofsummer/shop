const {fromEntries:unpairs,entries:pairs}=Object
const new_header=(h1,h2)=>new Headers({...unpairs(h1.entries()),...h2})
const each=f=>o=>pairs(o).forEach(f)

const cors_headers={
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET,POST,PUT,PATCH,TRACE,DELETE,HEAD,OPTIONS',
    'access-control-allow-headers': 'accept,accept-charset,accept-encoding,accept-language,accept-datetime,authorization,cache-control,content-length,content-type,date,if-match,if-modified-since,if-none-match,if-range,if-unmodified-since,max-forwards,pragma,range,te,upgrade,upgrade-insecure-requests,x-requested-with,chrome-proxy,purpose',
    'access-control-max-age': '1728000',
}

const add_cors=(req)=>each(([k,v])=>req.headers.append(k,v))(cors_headers)

const get=async event=>{
    //event.request
    var request = new Request(event.data.url, {mode: 'no-cors'});
    response=await fetch(request)
    d={ ok:true, response, }
    event.ports[0].postMessage(d);
}

const ask_perm=async()=>{
          perm=await Notification.requestPermission()
          console.log(perm)
          if (perm ==="denied") {
               return
          }
}

const  enableBrowserNotifications=async ()=> {
    o={ userVisibleOnly: true, applicationServerKey:123 }
    try{
         const perm=await self.registration.pushManager.permissionState()
          console.log(perm)
          if (perm === 'prompt') {
                sub=await self.registration.pushManager.subscribe()
                console.log(sub)
          }
    }catch(e){
        console.log(e)
    }
}

self.addEventListener('install', function(event) {
  self.skipWaiting();
});


send=async (msg="dddd")=>{
      c=await self.clients.matchAll()
      say=x=>x.postMessage(msg)
      await Promise.all(c.map(say));
}

self.addEventListener('activate', async event => {
      event.waitUntil(clients.claim());
});

self.addEventListener('message', function(event){
      if ("enable" in message) {
        enableBrowserNotifications();
      }
      d=event.data
      console.log('--->',d)
      send('<-----tttt')
      send(d)
});


self.addEventListener('fetch', async (event) => {
    const u=event.request.url
    console.log(u)
    const first=async (u)=>{
        b=await fetch(event.request)
        if (b.status==200){
           add_cors=(b)
           return b
        }else if(b.status == 404){
            return new Response('404')
        }else{
            return new Response('ddd')
        }
    }
    const change_url=()=>{
        a=new URL(u)
        origin=new URL("")
        local='localhost'
        if (a.host==local && origin.host != local ){
           a.search=""
           a.pathname="@@"+origin.origin + a.pathname
           return fetch(a)
        }
    }


    //fetch('@@http://www.baidu.com?s=facebook').then(x=>x.text()).then(console.log)
    const facebook_proxy=()=>{
        const fb=/facebook/.test(u)
        if (fb === true){
           let proxy=[
               '@@',
               'http://localhost:8080/@@',
               'http://localhost:4567/proxy/',
           ]
           let u1=proxy[2]+u
           const d=fetch(u1)
           //add_cors=(d)
           //const type=d.headers.get('Content-Type')
           //console.log('tttt',type)
           event.respondWith(d);
        }
    }

    const init=()=>{
        if (!/@@/.test(u)){
            first(u)
        }
    }

    if (/\/api\/|\/i\//.test(event.request.url) ) {
      const staleWhileRevalidate = new workbox.strategies.StaleWhileRevalidate();
      event.respondWith(staleWhileRevalidate.handle({event}));
    }
    echo=async ()=> {
        if (!event.clientId) return;
        const client = await clients.get(event.clientId);
        if (!client) return;
        url=event.request.url
        //headers=unpairs(event.request.headers),
        client.postMessage({ url });
    }
    event.waitUntil(echo())

});






