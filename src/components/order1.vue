<template>
<article>
  <v-parallax
    height="300"
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
  ></v-parallax>

  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="cyan" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>訂單</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon @click="go_search"> <v-icon>search</v-icon> </v-btn>
              <v-btn icon @click="go_home"> <v-icon>home</v-icon> </v-btn>
        </v-toolbar>



        <v-list three-line>

          <template>
                <v-subheader > 訂單編號: {{$router.history.current.params.id}} </v-subheader>
                <v-subheader > 下單時間: {{order.create_time |unix}} </v-subheader>
                <v-divider></v-divider>
                <v-subheader > 收件人: {{order.name}} </v-subheader>
                <v-subheader > 手機: {{order.mobile}} </v-subheader>
                <v-subheader > 地址: {{order.address}} </v-subheader>
                <v-subheader > E-mail: {{order.email}} </v-subheader>
                <v-subheader> 留言: {{order.note}} </v-subheader>
                <v-divider></v-divider>
                <v-subheader> 訂單詳情 </v-subheader>
                 <p>{{order.content}} </p>
                <v-subheader>免郵費/貨到付款/<a target="_blank" href="https://www.hct.com.tw/Default.aspx">HCT新竹物流</a></v-subheader>
                <v-divider></v-divider>
                <v-subheader>当前状态:</v-subheader>
                <v-subheader>货运单号:</v-subheader>

          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>

</article>
</template>

<script>

import Vue from 'vue'
import store from "../store"
import {api} from "../fetch.js"
import {Map} from "immutable"
import Divider from "./divider.vue"
import { createNamespacedHelpers } from 'vuex'
import {unix2l} from "../fp"
const { mapState,mapGetters,mapActions,mapMutations } = createNamespacedHelpers('client')

Vue.filter('unix',unix2l)

export default {
  name: 'Order',
  components:{
      Divider
  },
  methods:{
   go_home(){ this.$router.push("/") },
   go_search(){ this.$router.push("/search_order") },
  },
  computed: {
   ...mapState(['order','content','cart_info','dress','address1']),
  },  
  data(){ return{ } },
  async created(){ }
}

</script>

