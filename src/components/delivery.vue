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
  <li>我们默认的物流配送为圆通快递，由于地域的限制，圆通快递无法送达的区域将会自动转发为EMS，若您查询快递单号的时候提示快递单号信息不存在，有可能是 已经转发EMS，请与我们的客服联系，我们将为您查询，如有不便，敬请谅解。 </li>
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
