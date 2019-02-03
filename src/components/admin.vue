<template>
  <div id="admin">
    <el-container>
      <el-header>
          <AdminMenu  />
          <div class="line"></div>
      </el-header>
          <el-main>
                <router-view></router-view>
          </el-main>
      <el-footer></el-footer>
    </el-container>  
  </div>
</template>

<script>

import store from "../store"
import Divider from './divider.vue'
import Footer from './footer.vue'
import AdminMenu from './admin_menu.vue'
import {copy} from "../fp.js"

export default {
  name: 'Admin',
  props: { },
  components: {
    Divider,Footer,AdminMenu 
  },
  data() {
      return { };      
  },
  watch: {},
  computed: {},
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }      
  },
  async created(){ },
  async mounted(){ },
}
</script>




<style>


</style>
