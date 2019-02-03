<template>
    <div>
      <el-carousel :interval="1000" type="card">
        <el-carousel-item v-bind:header="header"  v-for="(img,index) in header" :key="index">
          <img :src="img.url" class="image" />
        </el-carousel-item>
      </el-carousel>
    </div>
</template>


<script>
import store from "../store"
export default {
  name: 'Header',
  props: { header:{ Type:Array, default:()=>[],} },
  data() {
      return {}
  },
  created(){ },
  mounted(){ },
}
</script>
<style>

.el-carousel__container{
    padding-top: 50%;
    height:auto!important;
}
.el-carousel__container img{ max-width:100%; }
.el-carousel__item--card{
    height:100%;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
/*    background-color: #99a9bf;*/
  }

  .el-carousel__item:nth-child(2n+1) {
   /* background-color: #d3dce6;*/
  }


</style>
