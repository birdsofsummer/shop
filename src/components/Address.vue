<template>
<el-row :gutter="10">
    <div class="divider-3" />
    <el-form label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm"  label-width="3.5rem" class="demo-ruleForm" >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入收件人"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="ruleForm.address" placeholder="请输入详细地址 不写清楚地址不发货..."></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="mobile">
        <el-input v-model="ruleForm.mobile" placeholder="请输入手机号" ></el-input>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input  type="email" v-model="ruleForm.email" placeholder="请输入Email"></el-input>
      </el-form-item>
      <el-form-item label="留言" prop="note">
        <el-input type="textarea" v-model="ruleForm.note" placeholder="请输入留言"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.prevent="submitForm('ruleForm')" >提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
</el-row>
</template>

<script>

import store from "../store"
import {drop} from "../fp.js"
import {address_rules} from "./rules"
import { createNamespacedHelpers } from 'vuex'
const { mapState,mapGetters,mapActions,mapMutations } = createNamespacedHelpers('client')

export default {
    name: 'HelloWorld',
    props: { msg: String },
    data() { return { ruleForm: {}, rules:address_rules }; },
    computed: {
        ...mapState(['content','cart_info','address1','dress']),
    },
    methods: {
      ...mapActions(['place_order']),
      ...mapMutations(['set_address']),
      submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
               let d=this.ruleForm;
               this.set_address(d)
               let {content,cart_info,address1,dress}=this;
               let dns=window.location.href;
               let dress1=drop(dress)("content");
               let o={product_id:dress.id,dns,cart_info,content,...address1,product:dress1};
              this.place_order(o)
          }else{
               this.$message({ message: "plz input right address :)", type: 'error',showClose: true, });          
                return false;
          }
          });
      },
      resetForm(formName) {
        this.set_address();
        this.$refs[formName].resetFields();
      }
    },
    created(){ this.ruleForm={...this.address1};          
   }
}

</script>
<style scoped>
    .divider-3{ margin:3em 0; }
    .demo-ruleForm{ margin:auto; width:50%; }
    @media (max-width: 1000px) {
        .demo-ruleForm{ margin:auto; width:100%; }
    }
</style>
