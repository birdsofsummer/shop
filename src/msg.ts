const work=(name="/worker/echo.js", {onmessage,onerror}={onmessage:console.log,onerror:console.log},)=>{
        const myWorker = new Worker(name);
        myWorker.onmessage = onmessage
        myWorker.onerror = onerror 
        myWorker.send=msg=>myWorker.postMessage(msg);
        return myWorker
}
const bwork=(s=`onmessage = function(e) { console.log("->",e.data);postMessage(e.data); }`)=>{
    var blob = new Blob([s]); 
    var blobURL = window.URL.createObjectURL(blob);
    var worker = new Worker(blobURL);
    worker.onmessage =console.log 
    worker.send=(x)=>worker.postMessage(x)
    return worker
}
const swork=(name="/worker/echo1.js", cb=console.log,)=>{
    var myWorker = new SharedWorker(name);
    myWorker.port.start();
    myWorker.port.onmessage = cb
    myWorker.send=x=>myWorker.port.postMessage(x)
    return myWorker
}

const test_work=(msg)=>{
    workers=[work,swork,bwork]
    workers.forEach(x=>{
        w=x() 
        w.send(msg);
    })
}

function sendMessage(message) {
  return new Promise(function(resolve, reject) {
        var messageChannel = new MessageChannel();
        messageChannel.port1.onmessage = function(event) {
          if (event.data.error) {
            reject(event.data.error);
          } else {
            resolve(event.data);
          }
        };
        navigator.serviceWorker.controller.postMessage(message,
          [messageChannel.port2]);
      })
}

const receiveMessage=(event)=> {
    const src=event.origin
    const d=event.data
    event.source.postMessage("->",src);
    event.source.postMessage(d,src);
    console.log(event)
}

const reg_sw=async (file,scope={ scope: '/' })=>{
    //window.addEventListener("message", receiveMessage, false);
    navigator.serviceWorker.addEventListener('message', event => {
              console.log(event.data);
    });
    const s=await navigator.serviceWorker.register(file,scope)
    try{
          const pub= await s.pushManager.subscribe()
          console.log(pub)
          // console.log(pub.subscriptionId);
          // console.log(pub.endpoint);
    }catch(e){
        console.log(e)
    }
    return await navigator.serviceWorker.ready
}


export {
    reg_sw,
}
