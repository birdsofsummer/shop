<template>
<article>
  <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" ></v-parallax>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="cyan" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>訂單查詢</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon @click="go_home"> <v-icon>home</v-icon> </v-btn>
        </v-toolbar>

        <v-list three-line>
          <template>

           <v-divider></v-divider>

            <v-list-tile avatar  >
              <v-list-tile-content>
                <v-list-tile-sub-title >
                   <v-form>
                    <v-container>
                      <v-layout row wrap>
                        <v-flex xs10 sm6 md11>
                            <v-text-field v-model="order_id" label="訂單號" :counter="36" :error-messages="OrderIdErrors"  required @input="$v.order_id.$touch()" @blur="$v.order_id.$touch()" ></v-text-field> 
                        </v-flex>

                        <v-flex xs2 sm6 md1>
                            <v-btn icon :disabled=" (!$v.$anyDirty) || $v.$anyError" @click="go_search" > <v-icon>search</v-icon> </v-btn>
                        </v-flex>

                      </v-layout>
                    </v-container>
                  </v-form>
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>

</article>
</template>

<script>

import { validationMixin } from 'vuelidate'
import { required, maxLength,minLength,email } from 'vuelidate/lib/validators'
import store from "../store"
import {api} from "../fetch.js"
import {Map} from "immutable"
import Divider from "./divider.vue"
import "./error.css"
import { createNamespacedHelpers } from 'vuex'
import {is_uuid} from "../fp"

const { mapState,mapGetters,mapActions,mapMutations } = createNamespacedHelpers('client')

export default {
  name: 'SearchOrder',
  components:{
      Divider
  },
  mixins: [validationMixin],
  validations: {
      order_id: { required, maxLength: maxLength(36),minLength: minLength(36)  },
  },
  data(){ return{ order_id:"" } },
  methods:{
      ...mapActions([ 'get_order' ]),
      go_home(){ this.$router.push(`/`) },
      async go_search(){ 
          let id=this.order_id;
          let {ok}=await this.get_order({id});
          if (ok) { this.$router.push(`/orders/${id}`) }
      }
  },
  computed: {
    // ...mapState(['order','content','cart_info','dress','address1']),
    OrderIdErrors () {
        const errors = [];
        let is_uu=is_uuid(this.order_id);
        if (!this.$v.order_id.$dirty) return errors
            !this.$v.order_id.maxLength && errors.push('訂單號太長啦!')
            !this.$v.order_id.minLength && errors.push('訂單號不正確!')
            !this.$v.order_id.required && errors.push('必須填寫訂單號')
            !is_uu && errors.push('訂單號不正確,格式爲xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx')
            return errors
      },

  },  
  async created(){ }
}

</script>

