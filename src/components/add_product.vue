<template>
  <div id="product_detail">

    <el-container>

          <el-main style="text-align:left">
              <el-row> 
                  <h4>facebook像素ID</h4>
                  <el-input type="textarea" autosize :rows="5" placeholder="333061584048957" v-model="product_detail.pix"> </el-input>
              </el-row>
              <el-row> 封面<Upload name="cover" /> </el-row>
              <el-row> 輪播<Upload name="header" /> </el-row>
              <el-row> 顏色 <Upload name="color" /> </el-row>
              <Divider />
              <el-row> 
                 <span class="tag-title">尺寸</span> <Tag name="size" :dynamicTags='product_detail.size' />
              </el-row>
              <Divider />
              <el-row> 
                 <span class="tag-title">风格</span><Tag name="tag" :dynamicTags='product_detail.tag' />
              </el-row>
              <Divider />
              <el-row> 
                 <span class="tag-title">支持</span><Tag name="support" :dynamicTags='product_detail.support' />
              </el-row>
              <Divider />
              <!--el-row> 價格 <Price /> </el-row-->
              <el-row> 套餐 <Pack /> </el-row>
              <Divider />
              <el-row> 詳情編輯器 <Editor /></el-row>
              <Divider />
              <el-row> <el-button round @click="save">保存修改</el-button></el-row>
          </el-main>
      <el-footer> </el-footer>
    </el-container>  

  </div>
</template>

<script>


import store from "../store"

import { createNamespacedHelpers } from 'vuex'
import { Loading,Message } from 'element-ui';

import router from "../router"
import {copy} from "../fp.js"

import Divider from './divider'
import AdminMenu from './admin_menu'
import Upload from "./Upload.vue"
import Price from "./price"
import Pack from "./pack"
import Tag from "./tag"
import Editor from "./editor"
import Footer from './footer.vue'

const { mapState,mapGetters,mapActions,mapMutations } = createNamespacedHelpers('products')

export default {
  name: 'AddProduct',
  props: { },
  components: { Divider,Footer,Upload,Price,Tag,Editor,AdminMenu,Pack},
  data() { return {} },
  watch: {},
  computed: mapState({ product_detail:'product_detail' }), 
  methods: {
     ...mapActions(['save_product_detail']),
     save(){ this.save_product_detail(); }
  },
  async created(){ },
  async mounted(){ },
}
</script>
<style>
    .tag-title{
        display: inline-block;
        margin: 1rem 0;
    }
</style>
