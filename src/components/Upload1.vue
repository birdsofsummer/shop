<template>
    <div>
        <el-upload
                class="avatar-uploader"
                :action='api'
                name="img"
                :headers="headers"
                :show-file-list="false"
                :on-success="uploadSuccess"
                :on-error="uploadError"
                :before-upload="beforeUpload">
        </el-upload>
    </div>
</template>

<script>

import { Loading,Message } from 'element-ui';
import { mapState} from 'vuex'
import store from "../store"
import {addr,img_path} from "../path"
import {islocal} from '../fp'

export default {
    computed: mapState({ headers:s=>({token:s.token}), }), 
    data(){
        return {
            api:addr.upload,
            prefix:img_path,
        }
    },
    methods: {
            beforeUpload(res, file) {
                this.loadingInstance = Loading.service({ fullscreen: true });
           },
           uploadSuccess(res, file) {
                this.loadingInstance.close();
                Message.success(':)');
                let {file_name}=res;
                let u=this.prefix+file_name
                this.$emit('img',u)
           },
           uploadError(err, file, fileList) {
                this.loadingInstance.close();
                Message.error( '上传图片失败！');
                //模拟
                islocal ? this.$emit('img',"/img/2.jpg") :null;
           }
        }
}
</script>
