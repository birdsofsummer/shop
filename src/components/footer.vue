<template>
  <div id="nav-footer">
  <el-row>
  <nav class="nav-footer">
    <el-row :gutter="10">
      <div class="grid-content bg-purple"></div>
        <el-card shadow="never">
      <div slot="header" class="clearfix">
        <span>SERVICE</span>
      </div>
      <ul class="footer-list"> 
          <router-link to="/search_order" tag="li">訂單查詢</router-link>
          <router-link to="/user_instructions" tag="li">用戶須知</router-link>
          <!--
          <router-link to="/process" tag="li">購物流程</router-link>
          <router-link to="/returnpolicy" tag="li">退換貨流程</router-link>
          <router-link to="/delivery" tag="li">配送說明</router-link>
          -->
      </ul>
     </el-card> 

    </el-row>  
           <footer> Copyright @ 2019 {{dns}} 版權所有 </footer>
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
      return {
          dns:window.location.hostname
      }
  },
  created(){ },
  mounted(){ },
}
</script>

<style>

.footer-list {
	display: inline-grid;
	grid-auto-flow: column;
	grid-gap: 3rem;
}
#nav-footer{
    
}

</style>
