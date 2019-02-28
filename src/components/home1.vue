<template>
  <div id="home">

  <v-carousel height=800 interval=2000>
    <v-carousel-item v-for="(item,i) in header" :key="'header'+i" :src="item.url" ></v-carousel-item>
  </v-carousel>
 <v-divider />
  <v-card  flat tile  >
    <!--v-toolbar card color="pink" dark dense > <v-toolbar-title class="body-2">商品信息</v-toolbar-title> </v-toolbar-->
    <v-card-text>
        <h4>{{name}}  </h4> 
        <h4> <del> {{currency}} {{price_1}} </del>  {{currency}} {{price_2}} </h4>
    </v-card-text>
    <!-- v-divider />
        <v-chip  v-for="(k,i) in tag" :key="'tag'+i" >{{k}}</v-chip>
        <v-chip color="primary" pill v-for="(k,i) in support" :key="'support'+i" > {{k}} </v-chip -->

     <v-divider />
         <v-container grid-list-sm fluid v-if="cover.length>0" >
          <v-layout row wrap  align-center  justify-center >
            <v-flex v-for="(item,n) in cover" :key="'cover'+n" xs8 d-flex justify-center align-center >
              <v-card flat tile class="d-flex">
                <v-img :src="item.url" :lazy-src="item.url" aspect-ratio="1" class="grey lighten-2" >
                  <v-layout slot="placeholder" fill-height align-center justify-center ma-0 >
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
   
    <div v-html="content"> {{content}} </div>
    <v-divider />

    <v-list dense>
    <!--
           <v-list-tile>
              <v-list-tile-content>秒殺價</v-list-tile-content>
              <v-list-tile-content class="align-start"> {{currency}} {{price_2}}</v-list-tile-content>
           </v-list-tile>
           <v-list-tile>
              <v-list-tile-content>吊牌價</v-list-tile-content>
              <v-list-tile-content class="align-start">{{currency}} {{price_1}}</v-list-tile-content>
           </v-list-tile>

       -->    
           <v-list-tile>
              <v-list-tile-content>已售</v-list-tile-content>
              <v-list-tile-content class="align-start">{{sales_volume}}件</v-list-tile-content>
           </v-list-tile>
           <v-list-tile>
              <v-list-tile-content>還剩</v-list-tile-content>
              <v-list-tile-content class="align-start"> {{volume}}件</v-list-tile-content>
           </v-list-tile>
   </v-list>
   <v-divider />

    <v-list dense>
           <v-list-tile v-if="tag.length>0">
              <v-list-tile-content>風格</v-list-tile-content>
              <v-list-tile-content class="align-start">
                  <v-container grid-list-md>
                    <v-layout row wrap>
                      <v-flex xs12 sm6 md8 align-start layout text-xs-center >
                         <span class="list-text" v-for="(k,i) in tag" :key="'tag1'+i">{{k}}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>              
              </v-list-tile-content>
           </v-list-tile>

           <v-list-tile v-if="support.length>0">
              <v-list-tile-content>支持</v-list-tile-content>
              <v-list-tile-content class="align-start">
                  <v-container grid-list-md>
                    <v-layout row wrap>
                      <v-flex xs12 sm6 md8 align-start layout text-xs-center >
                         <span  class="list-text" v-for="(k,i) in support" :key="'support1'+i">{{k}}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>              
              </v-list-tile-content>
           </v-list-tile>


   </v-list>

    <v-list dense>
           <v-list-tile>
              <v-list-tile-content>顏色</v-list-tile-content>
              <v-list-tile-content class="align-start">

                  <v-container grid-list-md>
                    <v-layout row wrap>
                      <v-flex xs12 sm6 md8 align-start  layout text-xs-center >
                        <div class="grid-img">
                                <v-avatar :tile="true" :size="56" color="grey lighten-4"  v-for="(k,i) in color" :key="'color'+i">
                                      <img :src="k.url" :alt="k.name">
                                </v-avatar>
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-container>              

              </v-list-tile-content>
           </v-list-tile>

           <v-list-tile>
              <v-list-tile-content>尺寸</v-list-tile-content>
              <v-list-tile-content class="align-start"> 

                  <v-container grid-list-md>
                    <v-layout row wrap>
                      <v-flex xs12 sm6 md8 align-start layout text-xs-center >
                         <span class="list-text"  v-for="(k,i) in size" :key="'size'+i">{{k}}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>              
              </v-list-tile-content>
           </v-list-tile>
  </v-list>
 <v-divider />
  <v-list>
           <v-list-tile>
              <v-list-tile-content>套餐</v-list-tile-content>
              <v-list-tile-content class="align-start"> </v-list-tile-content>
           </v-list-tile>
  </v-list>
                  <v-container  fluid>
                        <v-radio-group v-model="current_pack.cart_info.qty1" @change="change_pack_qty1()">
                              <v-radio v-for="(k,i) in price" :key="'pack'+i" :label="`${k.name} - ${k.qty}件 -${currency} ${k.value}`" :value="i" color="red"></v-radio>
                         </v-radio-group>                      
                  </v-container>              

  </v-card>
 <v-divider />


<v-layout v-for="n in pack_qty">

 <v-flex xs12 sm6 >
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap class="pack-container">
      <v-flex xs12>
        <v-card   flat tile color="secondary">
                    <v-container grid-list-md>
                    <div class="pack-qty"  > 第 {{n}} 件</div>
                    <v-layout row wrap>
                      <v-flex xs12 sm6 md8 align-start  layout text-xs-center >
                      <div  class="color-container">
                        <div v-for="(k,i) in color" :key="'color1'+i"  @click="change_pack(n,'color',i)" :class="current_pack['content'][n-1]['color'] == i ? 'active-color color0': 'color0'"  >
                             <v-avatar :tile="true" :size="100" color="grey lighten-4">
                                  <img :src="k.url" :alt="k.name">
                            </v-avatar>
                            <span>{{k.name}}</span>
                        </div>
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-container>              
        </v-card>
      </v-flex>    

      <v-flex xs12 >
        <v-card   flat tile color="secondary">
                  <v-container grid-list-md>
                    <v-layout row wrap>
                      <v-flex xs12 sm6 md8 align-start layout text-xs-center>
                        <div  class="size-container">
                         <span v-for="(k,i) in size" :key="'size1'+i" @click="change_pack(n,'size',i)" :class="current_pack['content'][n-1]['size']==i ? 'active-size size0 ': 'size0'" >{{k}} </span>
                         </div>
                      </v-flex>
                    </v-layout>
                  </v-container>              
        </v-card>
      </v-flex>    

    </v-layout>
  </v-container>


 
    </v-flex>
  </v-layout>

 <v-divider />

<v-layout row>
  <v-flex xs12>
         <p>已選</p>
         <table style="width:100%;">
             <thead>
               <th > # </th>
               <th > 預覽</th>
               <th > 顏色 </th>
               <th > 尺寸 </th>
             </thead>
             <tbody>
                  <tr v-for="(c,i) in order.content" :key="'oo'+i">
                       <td> {{i+1}}</td>
                       <td> <v-avatar :tile="true" :size="40" color="grey lighten-4"> <img :src="c.color.url" :alt="c.color.name"> </v-avatar> </td>
                       <td> {{c.color.name}}</td>
                       <td> {{c.size}}</td>
                   </tr>
             </tbody>
         </table>
         <p> </p>
    </v-flex>
</v-layout>


 <v-divider />


    <v-layout row>
      <v-flex xs4>
        <v-subheader>套餐名:</v-subheader>
      </v-flex>

      <v-flex xs4>
        <v-subheader>
          套餐  {{current_pack.cart_info.qty1+1}} {{price[current_pack.cart_info.qty1].name}}
        </v-subheader>
      </v-flex>
    </v-layout>


    <v-layout row>

      <v-flex xs4>
        <v-subheader>數量:</v-subheader>
      </v-flex>

      <v-flex xs4>

        <v-subheader>
        <v-text-field label="購買數量" v-model = "current_pack.cart_info.qty" @keyup="change_pack_qty($event)" suffix="套" ></v-text-field>

        </v-subheader>
      </v-flex>
    </v-layout>

    <v-layout row>

      <v-flex xs4>
        <v-subheader>價格:</v-subheader>
      </v-flex>

      <v-flex xs4>
        <v-subheader>
        {{currency}}  {{current_pack.cart_info.amount}}
        </v-subheader>
      </v-flex>
    </v-layout>

    <v-container grid-list-sm fluid >
          <v-layout row wrap align-center  justify-center>
            <v-flex  xs6 d-flex justify-center align-center >
              <v-card flat tile class="d-flex">
                  <Address1 ref="address1"/>
              </v-card>
            </v-flex>
          </v-layout>
    </v-container>

  <el-row>
    <Divider />
   </el-row>
    <Divider />
    <Footer />
  <el-row></el-row>

</div>
</template>


<script>


import Vue from 'vue'
import store from "../store"
import { createNamespacedHelpers } from 'vuex'
import Address from './Address.vue'
import Address1 from './Address1.vue'
import Footer from './footer.vue'
import Divider from './divider.vue'
import Header from './header.vue'
import {state} from "../store/modules/client_state.js"
import { 
    cross_join, 
    sum, 
    minby, 
    maxby, 
    getprice,
    copy,
    add_keys,
    each,
    mapState1,
    init_current_pack,current_pack_gen,current_pack_decode
    } from "../fp.js"

import "./home.css"

const { mapState,mapGetters,mapActions,mapMutations } = createNamespacedHelpers('client')
const props=mapState1(state)("dress")


/*
export interface CartInfo {
    qty:      number; //几套 
    qty1:     number; //第几个套餐
    unit:     number; //套餐价
    amount:   number; //套餐价*数量
    discount: number; //折扣
}
export interface Content {
    color: number;
    size:  number;
    i:string; // color[i] size[j] --> "i_j"
}
//订单
export interface Current_pack {
    content:   Content[];
    cart_info: CartInfo;
}

*/

export default {
  name: 'app',
  components: {
    Address1,
    Header,
    Divider,
    Footer 
  },
  computed:{
    ...mapState(props),
  },
  watch:{
    dress:function(n,o){ 
        let pn = this.price[0] ? this.price[0].qty : 1 ;
        let ps=this.price[0] ? this.price[0].value: 1e10;
        this.current_pack=current_pack_gen(0,pn,ps)
        this.order=current_pack_decode(this)
        window.document.title=n.name
    },
    order:function(n,o){
        this.set_cart(n)
    },

  },
  props:{},
  methods:{
      //改颜色/尺寸
      change_pack(n=1,type="color",i=0){ 
         this.current_pack['content'][n-1][type]=i
         this.order=current_pack_decode(this)
      },
      //改数量
      change_pack_qty(e){
          let v0=+e.target.value;
          let v= ( v0<1 || isNaN(v0)) ? 1  : v0
          e.target.value = v;
          this.current_pack.cart_info.qty=v;
          const {unit,qty}=this.current_pack.cart_info
          this.current_pack.cart_info.amount=unit*qty;
          this.order=current_pack_decode(this)
      },
      //换套餐
      change_pack_qty1(){
          let 
              q1=this.current_pack.cart_info.qty1
              ,{name,qty,value}=this.price[q1];
          this.current_pack=current_pack_gen(q1,qty,value)
          this.pack_qty=qty;
          this.order=current_pack_decode(this)
      },
      ...mapMutations(['set_cart']),
  },
  data(){
   return {
            pack_qty:1,
            current_pack:{
                  "content": [ { "color": 0, "size": 0 }, ],
                  "cart_info": {
                    "qty": 1,
                    "qty1": 1,
                    "unit": 1e10,
                    "amount": 1e10,
                    "discount": 0,
                }
            },
            order:{},
        }
  },
  created(){},
  mounted (){},
  updated(){ },
}


</script>


<style>

</style>
