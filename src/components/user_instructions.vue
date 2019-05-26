<template>
  <section>


<el-row style="margin:1rem auto;">
    <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
    </el-breadcrumb>
</el-row>


<el-row>
    <h4>購物流程 SHOPPING PROCESS</h4>
    <el-steps :active="4" finish-status="success" simple style="margin-top: 20px">
          <el-step title="加入購物袋" ></el-step>
          <el-step title="填寫地址" ></el-step>
          <el-step title="等待發貨" ></el-step>
          <el-step title="收貨付款" ></el-step>
    </el-steps>

</el-row>
<el-row>
    <div class="User_notes">
            <h2 class="notes">用戶須知</h2>
            <div class="note_text">本產品的實際使用效果根據個人情況決定，不保證每位用戶都能享受到所宣傳的效果。若有疑問請諮詢在線客服或通過電子郵箱聯絡我們，本公司享有最終解釋權。</div>
            <div class="note_title">關於發貨方式</div>
            <div class="note_text">配送範圍全台灣。</div>
            <div class="note_title">關於配送時間</div>
            <div class="note_text">下單成功之後，我們會按照下單先後順序進行配貨，配貨週期為3個工作日左右，一般到達時間為7個工作日左右。</div>
            <div class="note_title">如何申請退換貨</div>
            <div class="note_text">1.由於質量原因產生的退換貨：至收到商品之日起7天內，向售後服務中心發送郵件至
            <a :href="'mailto:'+ services.email" style="text-decoration:none;outline:0;color: #b4282d">{{services.email}}</a>
            ，客服會在收到郵件後的1-3個工作日內受理您的請求。</div>
            <div class="note_title">2.退換貨流程:</div>
            <div class="note_text">確認收貨—申請退換貨—客服審核通過—用戶寄回商品—倉庫簽收驗貨—退換貨審核—退款/換貨；</div>
            <div class="note_title">退換貨請註明：包裹面單號、訂單號、姓名、電話。</div>
            <div class="note_title">如何取消訂單</div>
            <div class="note_text">取消訂單需要向售後服務中心發送郵件并註明相關原因，郵件內容應註明您的訂單號、姓名、電話。</div>
      </div>
</el-row>


  <Footer />



  </section>
</template>

<script>
    import store from "../store"
    import Footer from './footer.vue'
    import Divider from './divider.vue'
    import { createNamespacedHelpers } from 'vuex'
    const { mapState,mapGetters,mapActions,mapMutations } = createNamespacedHelpers('client')

    export default {
      name: 'UserInstructions',
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
<style>
.User_notes{
    margin:3rem auto;
	text-align: left;
    width:90%;
}
.User_notes h2{
	text-align: center;
}
.note_title {
	margin: 0.5rem 0;
    font-size:1rem;
}
.note_text {
    font-size: 0.9rem;
    color: #333;
    text-align: left;
    line-height: 2rem;
    text-indent: 1.3rem;
}

</style>
