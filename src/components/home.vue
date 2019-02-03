<template>
  <div id="home">
    <Header  :header="header"/>
    <el-row >
        <h4>{{name}}  </h4> 
        <h4> <del> {{currency}} {{price_1}} </del>  {{currency}} {{price_2}} </h4>
        <el-row>
            <el-tag v-for="(k,i) in support" :key="i" type="info" size="mini">{{k}}</el-tag>
        </el-row>
        <Divider />
        <div v-show="cover.length">
            <img  v-for="(o, index) in cover" :key="index" :src="o.url" class="image" />
            <Divider />
        </div>
        <div v-html="content"> {{content}} </div>
        <Divider />
        <h4>{{name}}</h4>  
    </el-row >
    <el-row >
        <ul class="text">
             <li><span> 秒杀价 {{currency}} {{price_2}} </span></li>
             <li><span> 吊牌价 <del>{{currency}} {{price_1}} </del></span></li>
             <li><span> 已售{{sales_volume}}件</span></li>
             <li><span> 还剩{{volume}}件</span></li>
        </ul>
    </el-row >


    <el-row >
        <el-card shadow="hover">
                <el-table :data="price" class="price-table">
                      <el-table-column prop="qty" label="数量" width="180">
                          <template slot-scope="scope">
                                 {{scope.row.qty}} 件
                          </template>      
                       </el-table-column>
                      <el-table-column prop="value" label="价格" width="180">
                          <template slot-scope="scope">
                                 {{currency}} {{scope.row.value}} 
                          </template>      
                      </el-table-column>
                </el-table>
        </el-card>    
    </el-row >


    <el-row >
        <ul class="color-group">
          <li  v-for="(k,i) in color"   :class="i == current.color ? 'mycolor-active':null" @click="li(i)" >
      <el-popover placement="top-start" :title="k.name" width="200" offset="0" trigger="hover" >
                 <img :src="k.url"  style=" max-width:100%;"/>
                 <img :src="k.url" slot="reference" class="mycolor" /> 
                 <input type="radio" v-model="current.color" :value="i" class="mycolor-radio" />
      </el-popover>
         </li> 
        </ul>  
    </el-row >


    <el-row >
       <ul class="size-group">
          <li  v-for="(k,i) in size" class="mysize-li"   @click="change_size(i)" > 
              <div :class="i == current.size? 'mysize mysize-active':'mysize'" >{{k}} </div>
              <el-input-number size="small" v-model="cart[`${current.color}_${i}`]" @change="handleChange" :min="0" :max="100000" label="" ></el-input-number>
          </li> 
        </ul>  
    </el-row >

    <el-collapse-transition>
        <el-row v-show="cart_table.length > 0" >
            <el-table :data="cart_table"  class="price-table">
                <el-table-column prop="color.name" label="颜色" width="180">
                    <template slot-scope="scope">
                       <el-popover placement="top-start" :title="scope.row.color.name" width="200" offset="0" trigger="hover" >
                            <img :src="scope.row.color.url"  style=" max-width:100%;"/>
                            <img  slot="reference" :src="scope.row.color.url" style="width:30px"/> 
                      </el-popover>
                    </template>      
                </el-table-column>
                <el-table-column prop="size" label="尺寸" width="180"> </el-table-column>
                <el-table-column prop="qty" label="数量" width="180"> </el-table-column>
                <el-table-column prop="price_1" label="吊牌价" width="180">
                     <template slot-scope="scope">
                     {{currency}} <del> {{scope.row.price_1}} </del>
                    </template>      
                </el-table-column>
                <el-table-column prop="unit" label="秒杀价" width="180">
                      <template slot-scope="scope">
                         {{currency}} {{scope.row.unit}} 
                      </template>      
                </el-table-column>
                <el-table-column prop="sum" label="小计" width="180">
                       <template slot-scope="scope">
                         {{currency}} {{scope.row.sum}} 
                      </template>                
                </el-table-column>
            </el-table>
            <span>已选{{cart_info.qty}}件*   {{currency}}    {{cart_info.unit}}  = {{currency}}  {{cart_info.amount}}</span> 
            <el-table :data="cart_table" class="price-table" />
            <Divider />
            <el-button type="danger" @click="init_cart()">清空购物袋</el-button>
            <el-button type="danger" @click="add_to_cart()">去结算</el-button>
        </el-row>
  </el-collapse-transition>

  <Address v-show="show_address" ref="address"/>
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
    } from "../fp.js"
import "./home.css"

const { mapState,mapGetters,mapActions,mapMutations } = createNamespacedHelpers('client')
const props=mapState1(state)("dress")
const  cart2table=({cart,cart_info:{amount,unit,qty},dict,decode_cart,price,price_1})=>(decode_cart(cart).map(([color,size,qty])=>({color,size,qty,price_1,unit,sum:unit*qty})))

export default {
  name: 'app',
  components: {
    Address,
    Header,
    Divider,
    Footer 
  },
  computed:{
    ...mapState(props),
  },
  watch:{
    dress:function(n,o){ 
        this.init_cart(); 
        window.document.title=n.name
    },
    cart:{
        deep:true,
        handler(cart){
           this.cart_table = this.decode_cart ? cart2table(this) : [] ;
           this.show_address=this.cart_table.length > 0;
        },
     }
  },
  props:{},
  methods:{
      li(i,x){ this.current.color=i },
      change_size(i,x){ this.current.size=i },
      add_to_cart(){ this.$message({ message: "plz input your address :)", type: 'success',showClose: true, });},
      handleChange(a,b){
           let {cart,price,price_1}=this;
          const getprice1=getprice(price)("qty","value");
           let qty=sum(cart)
           let unit=getprice1(qty);
           let cart_info={ qty, unit, amount:unit*qty, discount:(price_1-unit)*qty,price,}
          copy(this)({cart_info})
          let content=this.cart_table
          this.set_cart({cart_info,content})
      },
      init_cart(){
          let {color,size,price}=this;
          [this.cart,this.dict,this.decode_cart]=cross_join(color)(size)(0);
          this.cart_info={
            qty:0,
            price,
            unit:maxby(price)('value'),
            amount:0,
            discount:0
         }
      },
      ...mapMutations(['set_cart']),
  },
  data(){
   return  {
        current:{ color:0, size:0, },
        cart:{},
        cart_table:[],
        cart_info:{},
        show_address:false,
        dict:{},
    }
  },
  created(){},
  mounted (){},
  updated(){ },
}
</script>

