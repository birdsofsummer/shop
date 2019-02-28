<template>
<div>
<el-dialog title="修改套餐" :visible.sync="dialogFormVisible">
  <el-form :model="form" ref="packForm">

    <el-form-item label="描述" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="數量" :label-width="formLabelWidth">
          <el-input-number v-model="form.qty"  :min="1" :max="10000000000" label="件"></el-input-number>
    </el-form-item>

    <el-form-item label="價格" :label-width="formLabelWidth">
          <el-input-number v-model="form.value"  :min="1" :max="10000000000"></el-input-number>
    </el-form-item>

  </el-form>


  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="save()">確定</el-button>
  </div>

</el-dialog>


  <el-button size="mini" @click="handleChange()">新增</el-button>
  <Divider />
  <el-table :data="tableData" style="width: 100%"> 
    <el-table-column label="数量" width="100"> 
       <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.qty}}</span>
      </template>    
    </el-table-column>

    <el-table-column label="价格" width="180">
        <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.value}}</span>
      </template>    
    </el-table-column>

    <el-table-column label="描述" width="800">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name}}</span>
      </template>    
    </el-table-column>


    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleChange(scope.row,scope.$index,)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>  
</template>

<script>
    import Divider from './divider'
    import {cp,updateRow,delRow,addRow,int_formators} from "@/fp"
    import store from "../store"
    import { Loading,Message } from 'element-ui';
    import {maxby,minby}  from "../fp"
    import { createNamespacedHelpers } from 'vuex'

    const { mapState,mapGetters,mapActions,mapMutations } = createNamespacedHelpers('products')

    const form0={
                "name":"xxxxxxxxxxxx套餐",
                "qty":1,
                 value:1000,
    }
export default {
    computed: mapState({ tableData0:s=>s.product_detail.price,}), 
    components: { Divider},
    data() {
      return {
        dialogFormVisible:false,
        formLabelWidth: '120px',
        form: {...form0},
        action:0,
        ci:0,
        tableData:[],
    }
    },
    watch:{
        tableData0:function(n,o){ this.tableData=cp(n) }
    },
    methods: {
      ...mapMutations(['set_product_detail']),
      handleChange(row=null,index=null) {
        this.form = row ? cp(row) :cp (form0)
        this.action = row ? 1 : 0 ;
        this.ci=index;
        this.dialogFormVisible=true;
     },
     handleDelete(i,r){
         this.tableData=delRow({i,table:this.tableData})
         this.save1(this.tableData)
      },
     save(){
           this.dialogFormVisible = false;
           if (this.action == 0){
               this.tableData=addRow({table:this.tableData,row:this.form})
           }else{
               this.tableData=updateRow({i:this.ci,table:this.tableData,row:this.form},)
           }
           this.save1(this.tableData)
     },
     save1(n){
           let d={price:n}
           this.set_product_detail(d)
           Message.success(':)');
     }

    }
  }
</script>
