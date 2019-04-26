<template>
<div id="login-wrapper">
  <div id="login">
    <el-container>
      <el-header></el-header>
          <el-main>
          <el-row class="login">
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="4rem" class="demo-ruleForm"  >

              <el-form-item label="用户名" prop="username" class="login-input-container" >
                <el-input type="text" v-model="ruleForm2.username" autocomplete="on"></el-input>
              </el-form-item>

              <el-form-item label="密码" prop="password" class="login-input-container" >
                <el-input type="password" v-model="ruleForm2.password" autocomplete="off"></el-input>
              </el-form-item>

             <el-form-item class="login-btn-container">
                <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
              </el-form-item>

            </el-form>              
          </el-row>
          </el-main>
      <el-footer>
      </el-footer>
    </el-container>  
  </div>
  </div>
</template>

<script lang="ts">

import store from "../store"
import { createNamespacedHelpers } from 'vuex'
import Divider from './divider.vue'
import Footer from './footer.vue'
import {copy} from "../fp.js"

const { mapState, mapActions } = createNamespacedHelpers('account')

export default {
  name: 'Delivery',
  props: { },
  components: {
    Divider,Footer,
  },
 data() {
     const validatePass = (rule, value, callback) => value === '' ?   callback(new Error('请输入密码')) :callback();
     const validateUser= (rule, value, callback) => value === '' ?   callback(new Error('请输入用户名')) :callback();
     return {
        ruleForm2: { password: '', username: '', },
        rules2: {
          password: [ { validator: validatePass, trigger: 'blur' } ],
          username:[ { validator: validateUser, trigger: 'blur' } ],
      }
    }},
    methods: {
      ...mapActions([ 'login', ]),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
             let d=this.ruleForm2
             this.login(d)
          } else {
this.$message({ message: "plz input you username & password :)", type: 'error',showClose: true, });          
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
  async created(){ },
  async mounted(){ },
}
</script>
<style>

body{
    margin:0;
}
#login-wrapper{
    background: url('/img/2.jpg');
    height:100vh;
}
.login{
    width:50%;
    margin:auto;
}
#login{
   position: relative;
}
#login::before{
	background: #ddd;
	opacity: 0.5;
	content: " ";
	width: 50%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	transform: translateX(55%);
	border-radius: 10px; 
}


@media (max-width: 1000px) {
.login{
    width:auto;
}



}
</style>
