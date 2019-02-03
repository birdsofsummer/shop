<template>
  <div id="">
    <el-container>
      <el-header></el-header>
          <el-main>Main
              <el-row>
              </el-row>
          </el-main>
      <el-footer>Footer</el-footer>
    </el-container>  
  </div>
</template>

<script>


import store from "../store"
import { 
    mapState,
    mapGetters,
    mapMutations, 
    mapActions, 
} from 'vuex'



import { Loading,Message } from 'element-ui';
import Divider from './divider.vue'
import Footer from './footer.vue'
import {copy} from "../fp.js"

export default {
  name: 'Delivery',
  props: { },
  components: {
    Divider,Footer,
  },
  data() {
      return {}
  },
  watch: {},
  computed: {},
  methods: {},
  async created(){ },
  async mounted(){ },
}
</script>




<style>


</style>
