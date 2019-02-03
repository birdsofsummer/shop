<template>
<el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">


<el-row
    v-for="(domain, index) in dynamicValidateForm.data"
    :key="domain.key"
    class="price-row"
> 
 <el-form-item
    :label="'数量' + index"
    :prop="'data.' + index + '.qty'"
    :rules="[ { required: true, message: '数量不能为空', trigger: 'blur' }, ]"
  >
    <!--el-input v-model="domain.qty"></el-input -->
    <el-input-number v-model="domain.qty"  :min="1" :max="1e10" label="数量"></el-input-number>
  </el-form-item>

  <el-form-item
    :label="'价格' + index"
    :prop="'data.' + index + '.value'"
    :rules="{ required: true, message: '价格不能为空', trigger: 'blur' }"
  >
    <!--el-input v-model="domain.value"  ></el-input -->
    <el-input-number v-model="domain.value"  :min="1" :max="1e10" label="价格"></el-input-number>
       ( {{domain.value}}*{{domain.qty}}={{domain.qty*domain.value}} )
  </el-form-item>
  <el-form-item>
      <el-button type="danger" icon="el-icon-delete" circle @click.prevent="remove(domain)" ></el-button>
  </el-form-item>
  </el-row>
  <el-row>
  <el-form-item style="text-align:center">
    <el-button @click="add">新增</el-button>
    <el-button type="danger" @click="submitForm('dynamicValidateForm')">确定</el-button>
    <!-- el-button @click="resetForm('dynamicValidateForm')">重置</el-button -->
  </el-form-item>
  </el-row>
</el-form>

</template>

<script>
    import store from "../store"
    import { Loading,Message } from 'element-ui';
    import {maxby,minby}  from "../fp"
    import { createNamespacedHelpers } from 'vuex'
    const { mapState,mapGetters,mapActions,mapMutations } = createNamespacedHelpers('products')

  export default {
  data() { return { }; },
  computed: mapState({ dynamicValidateForm:s=>({data:s.product_detail.price}), }), 
  methods: {
      ...mapMutations(['set_product_detail']),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              let {data}=this.dynamicValidateForm;
              let d={price:data}
              this.set_product_detail(d)
              Message.success(':)');
          } else {
                Message.error('输入不正确');
            return false;
          }
        });
      },
      resetForm(formName) {
           this.$refs[formName].resetFields();
      },
      remove(item) {
        let l=this.dynamicValidateForm.data.length
        var index = this.dynamicValidateForm.data.indexOf(item)
        if (l > 1 &&  index !== -1) {
          this.dynamicValidateForm.data.splice(index, 1)
        }
      },
      add() {
          let step=2;
          let p1=x=>Math.floor(x*0.8);
          let d=this.dynamicValidateForm.data

          let q1=maxby(d)('qty')
          let q2=q1+step;

          let v1=minby(d)('value')
          let v2=p1(v1)

        this.dynamicValidateForm.data.push({
              qty: q2,
              value:v2,
              key: Date.now()
        });
      }
    }
  }
</script>

<style>
.price-row{
    display: grid;
    grid-auto-flow: column;
}

</style>
