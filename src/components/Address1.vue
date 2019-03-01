<template>
<div>
   <v-snackbar v-model="snackbar" :timeout="3000" :top="true">
      请检查地址信息
    </v-snackbar>

  <form>
    <v-text-field v-model="name" :error-messages="nameErrors" :counter="10" label="收件人" required @input="$v.name.$touch()" @blur="$v.name.$touch()" ></v-text-field>

    <v-text-field v-model="mobile" :error-messages="mobileErrors" :counter="20" label="手機" required @input="$v.mobile.$touch()" @blur="$v.mobile.$touch()" ></v-text-field>

    <v-text-field v-model="address" :error-messages="addressErrors" :counter="100" label="地址" required @input="$v.address.$touch()" @blur="$v.address.$touch()" ></v-text-field>


    <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" @input="$v.email.$touch()" @blur="$v.email.$touch()" ></v-text-field>

    <v-text-field v-model="note"   :counter="100" :error-messages="noteErrors" label="留言" @input="$v.note.$touch()" @blur="$v.note.$touch()" ></v-text-field>

    <v-btn :disabled=" (!$v.$anyDirty) || $v.$anyError" @click="submit">提交訂單</v-btn>
    <v-btn @click="clear">重置</v-btn>
  </form>
</div>
</template>

<script>

  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  import store from "../store"
  import { createNamespacedHelpers } from 'vuex'
  import {drop,place_order1} from "../fp.js"
  import "./error.css"
  const { mapState,mapGetters,mapActions,mapMutations } = createNamespacedHelpers('client')

export default {
    mixins: [validationMixin],
    validations: {
      name: { required, maxLength: maxLength(10) },
      address: { required, maxLength: maxLength(100) },
      mobile: { required, maxLength: maxLength(20) },
      email: { email },
      note:{ maxLength: maxLength(100) },
    },
    data: () => ({
      name: '',
      mobile:"",
      email: '',
      address:"",
      note:"",
      snackbar: false,
     }),
    computed: {
        ...mapState(['content','cart_info','address1','dress']),
      noteErrors () { 
        const errors = []
        if (!this.$v.note.$dirty) return errors
        !this.$v.note.maxLength && errors.push('備註太長啦!')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('名字太長啦!')
        !this.$v.name.required && errors.push('必須填寫收件人')
        return errors
      },
      mobileErrors () {
        const errors = []
        if (!this.$v.mobile.$dirty) return errors
        !this.$v.mobile.maxLength && errors.push('請填寫正確的手機號')
        !this.$v.mobile.required && errors.push('必須填寫手機號')
        return errors
      },
      addressErrors () {
        const errors = []
        if (!this.$v.address.$dirty) return errors
        !this.$v.address.maxLength && errors.push('地址太長啦!')
        !this.$v.address.required && errors.push('必須填寫地址')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('請填寫正確的e-mail')
 //       !this.$v.email.required && errors.push('必須填寫Email')
        return errors
      }
    },
    methods: {
      ...mapActions(['place_order']),
      ...mapMutations(['set_address']),
      submit () {
        this.$v.$touch()
        let {name, email , mobile, address, note,}=this;
        let d={name, email , mobile, address, note,};

        if (this.$v.$anyError){
            this.snackbar = true
        }else{
            this.set_address(d)
            place_order1(this)
        }
      },
      clear () {
        this.set_address();
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.mobile= ''
        this.address= ''
        this.note= ''
      }
    }
  }
</script>


