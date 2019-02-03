<template>
    <div>
    <el-tag
      type="success"
      :key="tag"
      :disable-transitions="false"
      v-for="tag in dynamicTags"
      closable
      @close="handleClose(tag)">

      {{tag}}
    </el-tag>

    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
    <el-button v-else class="button-new-tag" size="small" @click="showInput">+</el-button>
    </div>
</template>

<script>

import store from "../store"
//import { mapState, mapGetters, mapMutations, mapActions, } from 'vuex'
import { createNamespacedHelpers } from 'vuex'
const { mapState,mapGetters,mapActions,mapMutations } = createNamespacedHelpers('products')

  export default {
    props:{
        dynamicTags:{Type:Array,default:()=>[],},
        name:{Type:String,default:()=>"tag",}
      },
    data() {
      return {
        inputVisible: false,
        inputValue: ''
      };
    },
    watch:{dynamicTags:{
      handler(n,o){
          let d={[this.name]:n}
          this.set_product_detail(d)
      },
      deep: true,
      }},
    methods: {
      ...mapMutations(['set_product_detail']),  
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
    showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
    },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        this.inputVisible = false;
        this.inputValue = '';
        let {dynamicTags}=this;
        if (!dynamicTags.includes(inputValue )){
            this.dynamicTags.push(inputValue)
        }
        }
    }
  }
</script>

<style>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>

