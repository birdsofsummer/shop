(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e9e79e02"],{"1eac":function(e,t,r){},b766e:function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r.d(t,"b",function(){return i});var a={name:[{required:!0,message:"必须填写收件人",trigger:"blur"},{min:1,max:15,message:"长度在 1 到 15 个字符",trigger:"blur"}],mobile:[{required:!0,message:"必须填写手机号",trigger:"blur"},{min:7,max:155,message:"长度大于7个字",trigger:"blur"}],address:[{required:!0,message:"必须填写收件地址",trigger:"blur"},{min:7,max:155,message:"大于7个字",trigger:"blur"}]},i={name:[{required:!0,message:"请输入名称",trigger:"blur"}],dns:[{required:!0,message:"请输入dns",trigger:"blur"}],price_1:[{required:!0,message:"请输入吊牌价",trigger:"blur"}],price_2:[{required:!0,message:"请输入秒杀价",trigger:"blur"}],currency:[{required:!0,message:"请输入单位",trigger:"blur"}],volume:[{required:!0,message:"请输入库存",trigger:"blur"}],sales_volume:[{required:!0,message:"请输入销量",trigger:"blur"}]}},be7e:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-container",[r("el-main",[r("el-row",{staticStyle:{"text-align":"left"}},[r("div",{staticClass:"search-bar"},[r("el-input",{attrs:{size:"mini",placeholder:"搜索名称",list:"cars"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),r("datalist",{attrs:{id:"cars"}},e._l(e.products.map(function(e){return e.name}),function(e){return r("option",{domProps:{value:e}})}),0)],1)]),r("Divider"),r("el-row",{attrs:{gutter:10}},[r("div",{staticClass:"mygrid-5"},e._l(e.data,function(t,a){return r("el-card",{attrs:{shadow:"hover",title:t.dns}},[r("div",{staticClass:"cover"},[r("img",{attrs:{src:t.cover&&t.cover.length?t.cover[0].url:"/img/2.jpg"}})]),r("div",{key:"k.id",staticClass:"product-title "},[r("a",{staticClass:"product-title",attrs:{href:"https://"+t.dns,target:"_blank"}},[r("span",[e._v(e._s(t.name))])])]),r("ul",{staticClass:"price-tag"},[r("del",{staticClass:"price_1"},[r("span",[e._v(" "+e._s(t.currency)+" "+e._s(t.price_1))])]),r("span",{staticClass:"price_2"},[e._v(e._s(t.currency)+" "+e._s(t.price_2))])]),r("Divider"),r("ul",{staticClass:"volume-list"},[r("span",{staticClass:"sales_volume"},[e._v("已售"+e._s(t.sales_volume)+"件")]),r("span",{staticClass:"volume"},[e._v("还剩"+e._s(t.volume)+"件")])])],1)}),1)]),r("el-row",[r("div",{staticClass:"pagination",staticStyle:{"margin-top":"1rem"}},[r("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","page-size":e.page_size,"current-page":e.cur_page,total:e.total_pages[0]},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1)])],1),r("el-footer")],1)],1)},i=[],s=(r("612f"),r("aaa4"),r("3f47")),n=r("bea0"),c=r("52c1"),u=(r("4360"),r("a18c")),l=r("f398"),o=r("a8fc"),d=r("75ef"),g=r("4859"),p=r("b766e"),m=Object(c["a"])("products"),h=m.mapState,f=(m.mapGetters,m.mapActions),_=(m.mapMutations,Object(g["k"])(!1),{components:{AdminMenu:o["a"],Divider:d["a"]},computed:Object(s["a"])({},h(["products","product"]),{data:function(){var e=this.search,t=this.products,r=this.cur_page,a=this.page_size,i=e?t.filter(Object(g["n"])(e)("name")):t,s=Object(g["D"])(i)(r-1)(a);return s},total_pages:function(){return Object(g["r"])(this.products)(this.page_size)}}),data:function(){return{cur_page:1,page_size:20,multipleSelection:[],search:"",action:"添加",dialogFormVisible:!1,default_product:Object(s["a"])({},this.product),rules:p["b"]}},methods:Object(s["a"])({},f(["add_product","edit_product","del_product"]),{to_excel:function(){return Object(l["a"])("#table","products.xlsx")},resetForm:function(e){this.dialogFormVisible=!1,this.$refs[e].resetFields()},init_add:function(){this.default_product=Object(s["a"])({},this.product),this.dialogFormVisible=!0,this.action="添加"},add_or_edit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return n["Message"].error({dangerouslyUseHTMLString:!0,message:"<strong>请检查输入</strong>"}),!1;t.dialogFormVisible=!1,t.save(t.action)(t.default_product)})},save:function(e){var t=this;return function(r){return"添加"==e?t.add_product(r):t.edit_product(r)}},pad:function(e){return"https://".concat(e)},handleEdit:function(e,t){this.action="修改",this.default_product=Object(s["a"])({},t),this.dialogFormVisible=!0},handleEdit1:function(e,t){u["a"].history.push("/products/detail/".concat(e))},handleDelete:function(e,t){this.del_product(t)},toggleSelection:function(e){var t=this;e?e.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.multipleSelection=e},handleCurrentChange:function(e){this.cur_page=e},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},filterTag:function(e,t){return t.tag===e},filterHandler:function(e,t,r){var a=r["property"];return t[a]===e},clearFilter:function(){this.$refs.multipleTable.clearFilter()},indexMethod:function(e){return e+(this.cur_page-1)*this.page_size+1},getSummaries:function(e){var t=e.columns,r=e.data;return t.map(function(e){return e.property}).map(Object(g["a"])(r)).map(function(e,t){return 7==t?"本页合计":t<8||t>9?null:e})}}),mounted:function(){}}),b=_,v=(r("cd74"),r("17cc")),C=Object(v["a"])(b,a,i,!1,null,null,null);t["default"]=C.exports},cd74:function(e,t,r){"use strict";var a=r("1eac"),i=r.n(a);i.a}}]);
//# sourceMappingURL=chunk-e9e79e02.88043b68.js.map