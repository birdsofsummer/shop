<template>
<div>

    <el-container>
      <el-header>
          <AdminMenu  active="4" />
          <div class="line"></div>
      </el-header>
          <el-main>

              <el-row style="text-align:left;">
                  <div class="search-bar">
                     <el-input v-model="search" size="mini" placeholder="搜索名称" list="cars"/>
                     <datalist id="cars"> <option v-for="item in products.map(x=>x.name)" :value="item"></option> </datalist>
                  </div>
              </el-row>

             <Divider />

             <el-row :gutter="10">
    <div class="mygrid-5">
         <el-card shadow="hover"  v-for="(k,i) in data" :title="k.dns">
              <div  class="cover" ><img :src="k.cover && k.cover.length ? k.cover[0].url : '/img/2.jpg'"/></div>
              <div  key="k.id" class="product-title ">
                <a class="product-title" :href="'https://'+k.dns" target="_blank" ><span>{{k.name}}</span></a>
              </div>
              <ul class="price-tag"> 
                <del class="price_1"><span> {{k.currency}} {{k.price_1}}</span></del> 
                <span class="price_2" >{{k.currency}} {{k.price_2}}</span>
              </ul>
             <Divider />
             <ul class="volume-list">
                  <span class="sales_volume" >已售{{k.sales_volume}}件</span>
                  <span class="volume" >还剩{{k.volume}}件</span>
              </ul>
         </el-card> 
     </div>
             </el-row>

             <el-row>
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
                      message: '<strong>请检查输入</strong>'
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
      handleEdit1(index, row) { router.history.push(`/products/detail/${index}`) },
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
         .map((x,i)=> i==7 ? "本页合计": i<8 || i>9 ? null:x);
      },
     },
    mounted(){  },

}
</script>

<style lang="less">

.mygrid-5{
    transition:0.3s;
	display: grid;
	grid-auto-flow: row;
	grid-template-columns: repeat(5,minmax(auto,18%));
	grid-gap: 1em;
    justify-content: center;
    font-size:0.8rem;
     &:hover{
        opacity:0.9;
    }    
   
    .product-title {
        text-decoration: none;
        color: #594e4e;
        font-size:0.8rem;
        text-align:left;
        line-height: 1.4rem;
        a{
            margin:0 1rem;
        }
    }
    ul{
        display:flex;
        justify-content: space-around; 
    }
    .cover{ 
            img{
                object-fit: cover;
                width: 100%;
                &:hover{
                    transform: translateY(-1px);
                    opacity:0.9;
                }    
            }
    }
    .el-card__body{ padding:0; }
    .price_1{ color:#ddd; font-size:0.9rem;}
    .price_2{ color:red; font-size:1rem;}
    .volume-list{
    }
}
@media (max-width: 1000px) {
        .mygrid-5{ grid-template-columns:repeat(2,auto) ; }
}
@media (max-width: 700px) {
        .mygrid-5{ grid-template-columns:repeat(1,auto) ; }
}

</style>
