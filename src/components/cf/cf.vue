<template>

    <el-main>
        <el-row>
            <h3>Web Traffic</h3>
            <div id="container" style="height: 600px; min-width: 90vw"></div>
        </el-row>
        <el-row>
          <el-table :data="timeseries" style="width: 100%">
              <el-table-column prop="since" label="since" width="180"> </el-table-column>
              <el-table-column prop="until" label="until" width="180"> </el-table-column>
              <el-table-column prop="pageviews.all" label="pageviews" width="180"> </el-table-column>
              <el-table-column prop="uniques.all" label="uniques" width="180"> </el-table-column>
              <el-table-column prop="requests" label="requests" width="180"> 
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                      <p>Name: {{ scope.row.requests.country }}</p>
                      <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.requests.all}} </el-tag>
                      </div>
                    </el-popover>
                  </template>
              </el-table-column>

              <el-table-column prop="requests" label="tw" width="180"> 
                  <template slot-scope="scope">
                       <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.requests.country.TW || 0}} </el-tag>
                      </div>
                  </template>
              </el-table-column>


              <el-table-column prop="requests" label="country" width="580"> 
                  <template slot-scope="scope">
                       <div slot="reference" class="name-wrapper">
                       <p>{{ scope.row.requests.country}}</p>
                      </div>
                  </template>
              </el-table-column>

          </el-table>
        </el-row>
        <h3>Web Traffic Requests by Country</h3>
          <el-table :data="country" style="width: 100%">
              <el-table-column prop="name" label="地区" width="180"> </el-table-column>
              <el-table-column prop="hit" label="请求数" width="180"> </el-table-column>
          </el-table>
         </el-row>
    </el-main>
</template>
<script lang="ts">

import { Vue, Component, Prop,Watch } from "vue-property-decorator";
import { CfModule } from '@/store/modules/cf'
import {draw,add_unix} from '@/components/draw'

@Component
export default class Cf extends Vue {
       // @Prop() name!: string;
       // @Prop() initialEnthusiasm!: number;
        timeseries=[]
        get dash(){
            return CfModule.result
        }
        get country(){
            let c=CfModule.result.totals.requests.country 
            let c1= Object.entries(c).sort((a,b)=>b[1]-a[1]).map(([name,hit])=>({name,hit}))
            return c1
        }
        @Watch('dash', { immediate: true })
        private OnRouteChange(d) {
               this.timeseries=add_unix(d.timeseries)
               this.$nextTick(function(){ draw(d) })        
        }
        private async created() { }
    }

</script>



<style>
</style>
