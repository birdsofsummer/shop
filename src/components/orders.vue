<template>

<div>
    <el-container>
      <el-header>
          <AdminMenu  active="5" />
          <div class="line"></div>
      </el-header>
          <el-main>
              <el-row style="text-align:left;">
                  <div class="search-bar">
                     <el-input v-model="search" size="mini" placeholder="搜索收件人" list="cars"/>
                     <datalist id="cars"> <option v-for="item in data.map(x=>x.name)" :value="item"></option> </datalist>
                     <el-button size="mini" type="danger" @click="to_excel">導出</el-button>         
              </div>
              </el-row>
<Divider />
<el-row>
  <el-table
    id="table"
    ref="multipleTable"
    stripe
    @selection-change="handleSelectionChange"
    :data="data"
    row-key="id"
    :default-sort = "{prop: 'id', order: 'ascending'}" 
    class="full"
    >
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item  v-for="item in schema" :label="item[1]">
                  <!-- span >{{ props.row[item[0]] | it(item[0]) }}</span -->
                  <div class="content" :contenteditable="item[2]==1" placeholder="請輸入" @input="handleInput(props.row ,item[0],$event)" >{{props.row[item[0]] |it(item[0])}} </div>
              </el-form-item>
        </el-form>
      </template>
    </el-table-column>

    <!--el-table-column type="selection" width="55"> </el-table-column-->

    <el-table-column sortable type="index" :index="indexMethod"> </el-table-column>    

    <el-table-column sortable label="下單時間" prop="create_time" width="160"> 
      <template slot-scope="scope">
        <i class="el-icon-time"></i> <span style="margin-left: 10px">{{scope.row.create_time|create_time}}</span>
      </template>
    </el-table-column>
    </el-table-column> <el-table-column sortable label="ID" prop="id" width="160"> </el-table-column>
    </el-table-column> <el-table-column sortable label="貨號" prop="product_id" width="150"> </el-table-column> 

    <el-table-column sortable label="收件人" prop="name" width="150" >
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
            <el-form label-position="left" class="demo-table-expand">
                  <el-form-item  v-for="item in schema" :label="item[1]">
                       <div class="content" :contenteditable="item[2]==1" placeholder="請輸入" @input="handleInput(scope.row ,item[0],$event)" >{{scope.row[item[0]] |it(item[0])}} </div>
                  </el-form-item>
            </el-form>
          <div slot="reference" class="name-wrapper"> <span > {{ scope.row.name }}</span> </div>
        </el-popover>
      </template>
    </el-table-column>

    <el-table-column sortable   label="詳情" class-name="hide"  prop="content" > </el-table-column>

    <el-table-column sortable   label="備註" prop="remark"  width="250"  >
      <template slot-scope="scope">
        <span contenteditable="true"  placeholder="請輸入備註"  @input="handleInput(scope.row ,'remark',$event)" > {{ scope.row.remark}}</span>
      </template>
    </el-table-column>

    <el-table-column prop="delivery" label="快遞" width="100" 
      :filters="delivery"
      :filter-method="filterTag"
      filter-placement="bottom-end"
      >
      <template slot-scope="scope">
        <el-tag :type="scope.row.delivery? 'primary' : 'success'" disable-transitions>
           <span  contenteditable="true"  @input="handleInput(scope.row ,'delivery',$event)"  > {{scope.row.delivery}} </span>
        </el-tag> 
      </template>
    </el-table-column>

    <el-table-column align="left"  width="30"   >
      <template slot="header" slot-scope="scope">
        <span>操作</span>
      </template>
    
      <template slot-scope="scope">
        <el-button  icon="el-icon-upload" style="margin-right:1rem;" type="text" @click="handleEdit(scope.$index, scope.row)" title="保存" :disabled="current.id == scope.row.id ? false : true">
        </el-button>
        <el-popover placement="top" width="160"  trigger="click">
          <p>確定刪除嗎？</p>
          <div style="text-align: right; margin: 0">
            <el-button  type="text" >取消</el-button>
            <el-button type="success" icon="el-icon-check" circle size="mini"   @click="handleDelete(scope.$index, scope.row)"></el-button>
          </div>
          <el-button  type="text"  icon="el-icon-delete"  slot="reference" title="刪除"></el-button>
        </el-popover>
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
import  moment from 'moment';
import 'moment/locale/zh-tw'

import {excel} from "./excel"
import Vue from 'vue'

import store from "../store"
import router from "../router"
import { Message } from 'element-ui';
import AdminMenu from './admin_menu.vue'
import Divider from './divider.vue'
import { rnd, updateById1, getIndexById, removeById, append, cp, add2, has, fill, fill1, uniq, pipe, map, slice1,len1,} from "../fp"
import { createNamespacedHelpers } from 'vuex'
const { mapState,mapGetters,mapActions,mapMutations } = createNamespacedHelpers('orders')

const unix2l=t=>moment.unix(t).format('Y-MM-DD hh:mm') 
const _delivery=x=>x.delivery
const _to_filter=x=>({text:x,value:x})
const delivery_filter=pipe([map(_delivery),uniq,map(_to_filter)])

export default {
  components: {AdminMenu,Divider  },
  mounted(){  },
  computed: {
      ...mapState(["orders"]),
      delivery(){ return delivery_filter(this.orders); },
      data(){
            let {search,cur_page,page_size,orders}=this;
            let d1=search ?  orders.filter(has(search)('name')) :orders;
            let d2=slice1(d1)(cur_page-1)(page_size)
            return d2
       },
      total_pages(){ return len1(this.orders)(this.page_size) }
  } , 
  data() {
      return {
        search: '',
        cur_page:1,
        page_size:20,
        current:{
            "id": 0,
            "product_id": 0,
            "content": "",
            "name": "",
            "address": "",
            "mobile": "",
            "note": "",
            "email": "",
            "create_time": 1547449477,
            "delivery": "",
            "remark": ""
        },
        multipleSelection: [],
        schema:[
              [ "create_time", "下單時間" ,0],
              [ "id", "訂單號", 0],
              [ "product_id", "貨號",1 ],
              [ "content", "訂單詳情",1 ],
              [ "name", "收件人" ,1], 
              [ "address", "地址" ,1],
              [ "mobile", "手機" ,1],
              [ "email", "email" ,1],
              [ "note", "留言" ,1],
              [ "delivery", "快遞單號",1 ],
              [ "remark", "備註" ,1],
            ],
        }
    },
    filters:{ 
        create_time:unix2l, 
        it(x,key){
            let _it=a=>a;
            let f={
               "create_time":unix2l,
               "id": _it ,
               "product_id":_it,
               "content": _it,
               "name": _it , 
               "address": _it ,
               "mobile": _it ,
               "email":_it ,
               "note":_it ,
               "delivery":_it,
               "remark":_it ,
            }
            return f[key] ? f[key](x) : x ;
        },
    },
    methods: {
      ...mapActions([ 'edit_order', 'del_order', ]),
      to_excel(){ return excel("#table","orders.xlsx") },
      reset_save(row){ this.current={...row}; },
      handleInput(row,a,e){
          let {current}=this;
          let d={[a]:e.target.innerText};
          let b=current.id == row.id ? {...current,...d} : {...row,...d};
          this.current=b;
      },
      handleEdit(index, row) {
          const {current,data}=this;
          this.edit_order(current);
          this.current={};
      },
      handleDelete(index, row) {
            this.del_order(row)
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
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      formatter(row, column){ return row.price; },
      filterTag(value, row) { return row.delivery=== value; },
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
         .map((x,i)=> i==2 ? "合计": i<30 ? null:x);
      },
     handleCurrentChange(x) { this.cur_page = x; },      
     handleSizeChange(val) { console.log(`每页 ${val} 条`); },

    },
  }
</script>

<style lang="less">
    @import '../style/table';
</style>
