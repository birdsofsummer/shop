<template>
  <div id="nav-footer">
  <el-row>

  <nav class="nav-footer">

<el-row :gutter="10">
  <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="1">
  <div class="grid-content bg-purple"></div>
    <el-card shadow="never">

  <div slot="header" class="clearfix">
    <span>SERVICE</span>
  </div>
  <ul> 
      <router-link to="/process" tag="li">购物流程</router-link>
      <router-link to="/returnpolicy" tag="li">退换货流程</router-link>
      <router-link to="/delivery" tag="li">配送说明</router-link>
  </ul>
 </el-card> 
  </el-col>
  <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="1"><div class="grid-content bg-purple"></div>
    <el-card shadow="never">
      <div slot="header" class="clearfix">
        <span>CONTACT US</span>
      </div>
      <ul> 
          <li>微信公众号:{{services.weixin}}</li>
          <li>热线：{{services.phone}}</li>
      </ul>
    </el-card> 
  
  </el-col>
  <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="1"><div class="grid-content bg-purple"></div>
    <el-card shadow="never">
      <div slot="header" class="clearfix">
        <span>INFORMATION</span>
      </div>
      <div>
        关注： <a :href="services.weibo" target="_blank" class="sina">&nbsp;</a>
      </div>
    </el-card> 
  </el-col>




</el-row>  
       <footer>
           Copyright @ 2019 版权所有
      </footer>
  </nav>
  
  </el-row>



  
  </div>
</template>

<script>

import store from "../store"
import { createNamespacedHelpers } from 'vuex'
const { mapState,mapGetters,mapActions,mapMutations } = createNamespacedHelpers('client')

export default {
  name: 'Footer',
  props: { },
  computed:{ ...mapState(['services']) ,},
  data() {
      return {}
  },
  created(){ },
  mounted(){ },
}
</script>

<style>

.sina {
    background: url("/img/sina.png") left center no-repeat;
    background-size: auto;
    background-size: 28px;
    width: 30px;
    height: 30px;
    display: inline-block;
}



</style>
