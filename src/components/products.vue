<template>
<div>


<el-dialog :title="action" :visible.sync="dialogFormVisible" center>
  <el-form :model="default_product"  :rules="rules" ref="ruleForm"  >
    <el-form-item label="DNS" prop="dns" label-width="100px">
      <el-input v-model="default_product.dns" autocomplete="off" placeholder="請輸入DNS" clearable>
      <template slot="prepend">https://</template>
      </el-input>
    </el-form-item>
    <el-form-item prop="name" label="名称" label-width="100px">
      <el-input v-model="default_product.name" autocomplete="off" placeholder="請輸入名稱" clearable></el-input>
    </el-form-item>
    <el-form-item label="货币单位" prop="currency" label-width="100px">
      <el-input v-model="default_product.currency" autocomplete="off" placeholder="請輸入貨幣單位" clearable></el-input>
    </el-form-item>
    <el-form-item label="吊牌价" prop="price_1" label-width="100px">
      <el-input v-model="default_product.price_1" autocomplete="off" placeholder="請輸入吊牌價" clearable>
          <template slot="prepend">{{default_product.currency}}</template>
      </el-input>
    </el-form-item>
    <el-form-item label="秒杀价" prop="price_2" label-width="100px">
      <el-input v-model="default_product.price_2" autocomplete="off" placeholder="請輸入秒殺價" clearable>
          <template slot="prepend">{{default_product.currency}}</template>
      </el-input>
    </el-form-item>
    <el-form-item label="销量" prop="sales_volume" label-width="100px">
      <el-input v-model="default_product.sales_volume" autocomplete="off" placeholder="請輸入銷量" clearable>
         <template slot="append">件</template> 
      </el-input>
    </el-form-item>
    <el-form-item label="库存" prop="volume"label-width="100px">
      <el-input v-model="default_product.volume" autocomplete="off" placeholder="請輸入庫存" clearable>
         <template slot="append">件</template> 
      </el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm('ruleForm') ">取消</el-button>
        <el-button type="primary" @click.prevent="add_or_edit('ruleForm')">確定</el-button>
  </div>
</el-dialog>


    <el-container>
          <el-main>
              <el-row style="text-align:left;">
                  <div class="search-bar">
                     <el-input v-model="search" size="mini" placeholder="搜索名稱" list="cars"/>
                     <datalist id="cars"> <option v-for="item in products.map(x=>x.name)" :value="item"></option> </datalist>
                     <el-button size="mini" type="danger" @click="init_add()">新增</el-button>         
                     <el-button size="mini" type="danger" @click="to_excel">導出</el-button>         
                  </div>
              </el-row>
             <Divider />
<el-row>
<el-table
    :data="data"
    row-key="id"
    show-summary
    :summary-method="getSummaries"
    :default-sort = "{prop: 'id', order: 'ascending'}" 
    class="full"
    id="table"
    >
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="ID">
                    <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="DNS">
                    <span>{{ props.row.dns}}</span>
              </el-form-item>
              <el-form-item label="名稱">
                    <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="吊牌價">
                    <del><span>{{ props.row.currency}}  {{ props.row.price_1}}</span></del>
              </el-form-item>
               <el-form-item label="秒殺價">
                    <span> {{ props.row.currency}} {{ props.row.price_2}}</span>
              </el-form-item>
               <el-form-item label="銷量">
                    <span>{{ props.row.sales_volume}}件</span>
              </el-form-item>
               <el-form-item label="庫存">
                    <span>{{ props.row.volume}}件</span> 
              </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column sortable type="index" :index="indexMethod"> </el-table-column>    
    <el-table-column sortable label="ID"  prop="id" width="50" > </el-table-column>

    <el-table-column sortable label="DNS" prop="dns" width="150"  >
       <template  slot-scope="scope">
            <a :href="pad(scope.row.dns)" target="_blank">{{scope.row.dns}}</a>
       </template>
    </el-table-column>
    <el-table-column sortable label="名稱" prop="name" > </el-table-column>
    <el-table-column sortable label="單位" prop="currency"  width="50" > </el-table-column>
    <el-table-column sortable label="吊牌價" prop="price_1" width="80" > </el-table-column>
    <el-table-column sortable label="秒殺價" prop="price_2" width="80" > </el-table-column>
    <el-table-column sortable label="銷量" prop="sales_volume" width="100"   > </el-table-column>
    <el-table-column sortable label="庫存" prop="volume" width="100"   > </el-table-column>

    <el-table-column align="left" width="100" > 
      <template slot="header" slot-scope="scope">
        <span>操作</span>
      </template>
      <template slot-scope="scope">
        <section class="action-list">
                <el-button  type="text" icon="el-icon-edit-outline"  @click="handleEdit(scope.$index, scope.row)" title="修改"></el-button>
                <el-button type="text" icon="el-icon-search" @click="handleEdit1(scope.$index, scope.row)" title="查看詳情"></el-button>

                <el-popover placement="top" width="160"  trigger="click">
                  <p>確定刪除嗎？</p>
                  <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text">取消</el-button>
                    <el-button type="success" icon="el-icon-check" circle size="mini" @click="handleDelete(scope.$index, scope.row)"></el-button>
                  </div>
                  <el-button sytle="color:#F56C6C" type="text"  icon="el-icon-delete" slot="reference"  title="刪除"></el-button>
                </el-popover>
            </section>
      </template>
    </el-table-column>
    </el-table>

<div class="pagination" style="margin-top: 1rem" >
    <el-pagination 
         background 
         layout="total, prev, pager, next"
         @current-change="handleCurrentChange" 
         @size-change="handleSizeChange"
         :page-size="page_size"
         :current-page="cur_page"
         :total="total_pages[0]" 
    />  
</div>    
              </el-row>
          </el-main>
      <el-footer></el-footer>
    </el-container>  

  

</div>
</template>

<script>


import { Message } from 'element-ui';
import { createNamespacedHelpers } from 'vuex'
import store from "../store"
import router from "../router"

import {excel} from "./excel"
import AdminMenu from './admin_menu.vue'
import Divider from './divider.vue'
import { rnd, updateById1, getIndexById, removeById, append, cp, add2, has, fill, fill1, uniq, pipe, map, slice1,len1,} from "../fp"

import {product_rules} from "./rules"

const { mapState,mapGetters,mapActions,mapMutations } = createNamespacedHelpers('products')
const fill_false=fill1(false);

export default {
  components: {AdminMenu,Divider},
  computed:{
        ...mapState(["products","product"]),
        data(){ 
            let {search,products,cur_page,page_size,}=this;
            let d1=search ?  products.filter(has(search)('name')) :products;
            let d2=slice1(d1)(cur_page-1)(page_size)
            return d2
        },
      total_pages(){ return len1(this.products)(this.page_size) }
  }, 
  data() {
      return { 
          cur_page:1,
          page_size:20,
          multipleSelection: [],
          search: '',
          action:"添加",
          dialogFormVisible:false,
          default_product:{...this.product},
          rules:product_rules
    }
  },
  methods: {
      ...mapActions([ 'add_product', 'edit_product', 'del_product', ]),
      to_excel(){ return excel("#table","products.xlsx") },
      resetForm(formName) {
        this.dialogFormVisible= false
        this.$refs[formName].resetFields();
      },      
      init_add(){
            this.default_product = {...this.product};
            this.dialogFormVisible= true
            this.action="添加"
      },
      add_or_edit(formName){
          this.$refs[formName].validate((valid) => {
          if (valid) {
                this.dialogFormVisible = false;
                this.save(this.action)(this.default_product)
          } else {
                Message.error({
                      dangerouslyUseHTMLString: true,
                      message: '<strong>請檢查輸入</strong>'
                })        
                return false;
          }
        });
      },
      save(action){ return d => action == "添加" ? this.add_product(d) : this.edit_product(d) ;    },
      pad(u){return `https://${u}`},
      handleEdit(index, row) {
          this.action="修改"
          this.default_product={...row} 
          this.dialogFormVisible= true
      },
      handleEdit1(index, row) { router.history.push(`products/${row.id}`) },
      handleDelete(index, row) {
            this.del_product(row)
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) { this.multipleSelection = val; },
      handleCurrentChange(x) { this.cur_page = x; },      
      handleSizeChange(val) { console.log(`每页 ${val} 条`); },
      filterTag(value, row) { return row.tag === value; },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      clearFilter() { this.$refs.multipleTable.clearFilter(); },
      indexMethod(index) { return index+(this.cur_page-1)*this.page_size+1; },      
      getSummaries({ columns, data }){
         return  columns
         .map(x=>x.property)
         .map(add2(data))
         .map((x,i)=> i==7 ? "本頁合計": i<8 || i>9 ? null:x);
      },
     },
    mounted(){  },

}
</script>

<style lang="less">
    @import '../style/table';
</style>
