<template>

  <div id="delivery">

    <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><router-link to="/delivery" tag="a">配送说明</router-link> </el-breadcrumb-item>
    </el-breadcrumb>

  <el-row>
  <h4>配送说明 DELIVERY NOTE</h4>
  <div class="dilivery">
  <h4>邮资标准</h4>
  <p>配送範圍全台灣。全场包邮</p>
  <h4>货物配送</h4>
  <ul >
  <li>
台灣新竹物流HCT/黑貓宅急便以下地區不派送，請知悉喔! 
</li>
<li>
烏丘，太武山，馬公市虎井裏，馬公市桶盤裏，望安鄉，七美鄉，白沙鄉鳥嶼村，白沙鄉吉貝村，白沙鄉大倉村，白沙鄉員貝村，蘭嶼鄉
  </li>
  <li>为了保证您能更准确快捷的收到货品，请在填写订单时，务必填写真实电话号码。</li>
 <li>我们会使用精美的包装盒，以确保您的货品不受损坏。</li>
  </ul>
  </div>
  </el-row>
  <Footer />
  </div>
</template>

<script>


import store from "../store"
import Footer from './footer.vue'
import Divider from './divider.vue'

export default {
  name: 'Delivery',
  components: {
    Divider,
    Footer 
  },
  props: { },
  data() {
      return {}
  },
  created(){ },
  mounted(){ },
}
</script>
<style>
.dilivery{
    text-align:left;
    font-size:0.8rem;
}


</style>
