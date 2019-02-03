import services from '../services.json'
export const state={
   services,
   dress:{
              "id":0,
              "dns": "",
              "name": "",
              "currency": "￥",
              "price_1": 1e10,
              "price_2": 1e10,
              "volume": 1e10,
              "sales_volume": 1e10,
              "cover": [ ],
              "header": [ ],
              "color": [{name:"灰色",url:"/img/1.jpg"}],
              "size": ["均码"],
              "price": [ { "qty": 1, "value": 1e10}, { "qty": 2, "value": 1e9} ],
              "tag": [ ],
              "support": [ ],
              "content": ""
        },
        address1:{
            name:"",
            address:"",
            mobile:"",
            email:"",
            note:"",
        },
        content:[],
        cart_info:{ },
};

