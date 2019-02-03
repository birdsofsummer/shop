<template>
    <div>

        <el-row>
          <el-col :span="24">
             <h4>我的订单</h4>
              <el-table :data="content" style="width: 100%" stripe>
                  <el-table-column prop="color.name" label="颜色" width="180">
                  
                      <template slot-scope="scope">
                            <router-link to="/" > {{ scope.row.color.name }}</router-link>
                      </template>                  
                  
                  </el-table-column>
                  <el-table-column prop="color.url" label="缩略图" width="180">
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
                  <el-table-column prop="qty" label="数量"> </el-table-column> 
                  <el-table-column prop="unit" label="单价"> </el-table-column> 
                  <el-table-column prop="sum" label="小计"> </el-table-column> 
              </el-table>          


             <Divider />

             <span> 合计 {{cart_info.unit}} * {{cart_info.qty}}   = {{dress.currency}} {{cart_info.amount}} (节省 {{dress.currency}}{{ cart_info.discount}})</span>
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
          <span>地址信息</span> 
          <el-button style="float: right; padding: 3px 0" type="text" @click="gohome">返回</el-button>
      </div>
      <div class="text item">
           <ul class="address">
                <li><span>收件人</span>{{address1.name}} </li>
                <li><span>地址</span>{{address1.address}} </li>
                <li><span>手机</span>{{address1.mobile}} </li>
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
  data(){ return{ } },
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
