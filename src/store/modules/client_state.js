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
              "price": [
                  { "qty": 1, "value": 1e10,"name":"test1"},
                  { "qty": 2, "value": 1e9,"name":"test2"},
              ],
              "volume": 1e10,
              "sales_volume": 1e10,
              "cover": [
                    {
                      "uid": "rc-upload-1547192415189-4",
                      "name": "3",
                      "status": "done",
                      "url": "/img/1.jpg"
                    }
               ],
              "header": [
                      {
                      "uid": "rc-upload-1547192415189-6",
                      "name": "6",
                      "status": "done",
                      "url": "/img/1.jpg"
                      },
              ],
              "color": [{name:"灰色",url:"/img/1.jpg"}],
              "size": ["均码"],
              "tag": [ ],
              "support": [ ],
              "content":"" ,
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
        order:{
          "content": " (绣花无袖连衣裙 --黑色--XL--0)  (绣花无袖连衣裙 --米白--XXL--0) {总件数：2, 总价：￥1776.000000}",
          "create_time": 1551355197,
          "name": "a",
          "mobile": "b",
          "address": "c",
          "email":"",
          "note": "",
        }
};

