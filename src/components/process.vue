<template>
  <div id="process">

    <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><router-link to="/process" tag="a">购物流程</router-link> </el-breadcrumb-item>
    </el-breadcrumb>


  <el-row>
<h4>购物流程 SHOPPING PROCESS</h4>
<el-steps :active="4" finish-status="success" simple style="margin-top: 20px">
      <el-step title="加入购物袋" ></el-step>
      <el-step title="填写地址" ></el-step>
      <el-step title="等待发货" ></el-step>
      <el-step title="收货付款" ></el-step>
</el-steps>


 <div class="User_notes" >
        <h3 class="notes">用戶須知</h3>
        <Divider></Divider>
        <h4>關於發貨方式</h4>
        <p>配送範圍全台灣。</p>
        <p>
        默認使用台灣新竹物流HCT/黑貓宅急便到付
        </p>
        <p>
        台灣新竹物流HCT/黑貓宅急便以下地區不派送，請知悉喔! 
烏丘，太武山，馬公市虎井裏，馬公市桶盤裏，望安鄉，七美鄉，白沙鄉鳥嶼村，白沙鄉吉貝村，白沙鄉大倉村，白沙鄉員貝村，蘭嶼鄉
        </p>
        <h4>關於配送時間</h4>
        <p> 下單成功之後，我們會按照下單先後順序進行配貨，配貨週期為3個工作日左右，一般到達時間為7個工作日左右。 
        </p>
        <h4>如何申請退換貨</h4>
        <p>1.由於質量原因產生的退換貨：至收到商品之日起7天內，向售後服務中心發送郵件至<a :href="'mailto:'+services.email" style="text-decoration:none;outline:0;color: #b4282d">{{services.email}}</a>，客服會在收到郵件後的1-3個工作日內受理您的請求。</p>
        <h4>2.退換貨流程:</h4>
        <p>
        確認收貨—申請退換貨—客服審核通過—用戶寄回商品—倉庫簽收驗貨—退換貨審核—退款/換貨；
        </p>
        <p>
        退換貨請註明：包裹面單號、訂單號、姓名、電話。
        </p>
        <h4>如何取消訂單</h4>
        <p>取消訂單需要向售後服務中心發送郵件并註明相關原因，郵件內容應註明您的訂單號、姓名、電話。</p>
  </div> 


  </el-row>
  <Footer />
  </div>
</template>

<script>
import store from "../store"
import Footer from './footer.vue'
import Divider from './divider.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState,mapGetters,mapActions,mapMutations } = createNamespacedHelpers('client')

export default {
  name: 'Process',
  props: { },
  components: {
    Divider,
    Footer 
  },
  computed:{ ...mapState(['services']) ,},
  data() {
      return {}
  },
  created(){ },
  mounted(){ },
}
</script>

