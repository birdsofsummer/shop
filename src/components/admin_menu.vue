<template>
        <el-menu :default-active="active" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1"><router-link to="/admin" tag="li">处理中心</router-link></el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1"><router-link to="/" tag="li">主页</router-link></el-menu-item>
            <el-menu-item index="2-2"><router-link to="/products1" tag="li">商品卡片</router-link></el-menu-item>
            <el-menu-item index="2-3"><router-link to="/products" tag="li">商品管理</router-link></el-menu-item>
            <el-menu-item index="2-4"><router-link to="/orders" tag="li">订单管理</router-link></el-menu-item>
            <el-submenu index="2-5">
              <template slot="title">选项4</template>
              <el-menu-item index="2-5-1">选项1</el-menu-item>
              <el-menu-item index="2-5-2">选项2</el-menu-item>
              <el-menu-item index="2-5-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" ><router-link to="/products1" tag="li">商品卡片</router-link></el-menu-item>
          <el-menu-item index="4">
                <router-link to="/products" tag="li">商品</router-link>
          </el-menu-item>
          <el-menu-item index="5">
                <router-link to="/orders" tag="li">订单</router-link>
          </el-menu-item>

        </el-menu>

</template>


<script>


import Divider from './divider.vue'
import Footer from './footer.vue'

export default {
  name: 'AdminMenu',
  props: {active:String},
  components: {
    Divider,Footer,
  },
  data() {
      return {
        activeIndex: '1',
      };      
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


