<template>
    <div>

        <el-row>
          <el-col :span="24">
             <h4>我的訂單</h4>
             <p style="text-align:left">訂單編號:{{ $router.history.current.params.id }}</p>

              <el-table :data="content" style="width: 100%" stripe>
                  <el-table-column prop="color.name" label="顏色" width="180">
                  
                      <template slot-scope="scope">
                            <router-link to="/" > {{ scope.row.color.name }}</router-link>
                      </template>                  
                  
                  </el-table-column>
                  <el-table-column prop="color.url" label="圖" width="180">
                      <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top">
                          <p>{{ scope.row.color.name}}</p>
                          <img :src="scope.row.color.url" style="width:200px"/>
                          <div slot="reference" class="name-wrapper">
                           <img :src="scope.row.color.url" style="width:20px"/>
                          </div>
                        </el-popover>
                      </template>                  
                  </el-table-column>
                  <el-table-column prop="size" label="尺寸" width="180"> </el-table-column>
                  <el-table-column prop="qty" label="數量"> </el-table-column> 
                <!--
                  <el-table-column prop="unit" label="單價"> </el-table-column> 
                  <el-table-column prop="sum" label="小計"> </el-table-column> 

                (节省 {{dress.currency}}{{ cart_info.discount}})
                 {{cart_info.unit}} * {{cart_info.qty}}   = {{dress.currency}} {{cart_info.amount}}
                  -->
              </el-table>          


             <Divider />

             <span> 訂單金額: {{dress.currency}} {{cart_info.amount}} </span>
          </el-col>
        </el-row>    

        <el-row>
          <el-col :span="24">
          </el-col>
        </el-row>    
        <Divider />

        <el-row>
          <el-col :span="12">
    <el-card class="box-card" style="margin:auto;">
      <div slot="header" class="clearfix"> 
          <span>地址</span> 
          <el-button style="float: right; padding: 3px 0" type="text" @click="gohome">返回</el-button>
      </div>
      <div class="text item">
           <ul class="address">
                <li><span>收件人</span>{{address1.name}} </li>
                <li><span>地址</span>{{address1.address}} </li>
                <li><span>手機</span>{{address1.mobile}} </li>
                <li><span>Email</span>{{address1.email}} </li>
                <li><span>留言</span>{{address1.note}} </li>
           </ul> 
      </div>
    </el-card>
          </el-col>
        </el-row>    
    </div>
</template>
<script>

import store from "../store"
import {api} from "../fetch.js"
import {Map} from "immutable"
import Divider from "./divider.vue"
import { createNamespacedHelpers } from 'vuex'
const { mapState,mapGetters,mapActions,mapMutations } = createNamespacedHelpers('client')


/*


{
  "address": "c",
  "content": " (绣花无袖连衣裙 --黑色--XL--0)  (绣花无袖连衣裙 --米白--XXL--0) {总件数：2, 总价：￥1776.000000}",
  "create_time": 1551355197,
  "mobile": "b",
  "name": "a",
  "note": ""
}

*/


export default {
  name: 'Order',
  components:{
      Divider
  },
  methods:{
   gohome(){ this.$router.push("/") }
  },
  computed: {
    ...mapState(['content','cart_info','dress','address1']),
  },  
  data(){ 
      return{ }
  },
  async created(){ }
}

</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
  .address{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-content: start;
        align-items: start;      
   }

.address li {
	margin-top: 5px;
}
.address span::after {
	width: 1.2em;
	content: ": ";
	display: inline-block;
}   
</style>
