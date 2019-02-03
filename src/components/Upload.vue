<template>
<div>
    <el-upload
          :list-type="listType"
          :action="api"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :headers="headers"
          :on-success="onSuccess"
          :on-error="onError"
          :on-progress="onProgress"
          :file-list="fileList"
          >
          <i class="el-icon-plus"></i>
    </el-upload>

    <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
</div>
</template>

<script>

import store from "../store"
import { Loading,Message } from 'element-ui';
import { mapState,createNamespacedHelpers } from 'vuex'
import {addr,img_path} from "../path"
import {islocal} from '../fp'
const { mapGetters,mapActions,mapMutations } = createNamespacedHelpers('products')

export default {
    props:{ name:{Type:String,default:()=>"img",} },
    data() {
      return {
        api:addr.upload,
        prefix:img_path,
        listType:"picture-card",
        dialogImageUrl: '',
        dialogVisible: false,
      };
    },
  computed: {
      ...mapState({
        headers:s=>({token:s.token}),
        product_detail:s=>s.products.product_detail,
  }),
  fileList(){
      let {name,product_detail}=this;
      return product_detail[name]
  },
  }, 
  methods: {
          ...mapMutations(['set_product_detail']),
          handleRemove(file, fileList) {
              let d={[this.name]:fileList};
              this.set_product_detail(d)
          },
          handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
          },
		  onSuccess(res, file){
               this.$message.success(':)');
               this.loadingInstance.close();
               let {name}=file;
               let url=this.prefix + res.file_name;
               let d={[this.name]:[...fileList,{name,url}]}
               this.set_product_detail(d)
		  },
          onError(err, file, fileList){
                let {columnNumber, fileName, lineNumber, message, method, stack, status, url}=err           
                Message.error( status + ' 上传图片失败！');
                this.loadingInstance.close();

                if (islocal){
                   let d={[this.name]:[...fileList,{name:"2",url:"/img/2.jpg"}]}
                   this.set_product_detail(d)
                }
            },
            onProgress(event, file, fileList){
                this.loadingInstance = Loading.service({ fullscreen: true });
            },
    }
  }
</script>
