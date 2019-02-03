import Vue from 'vue'
import Vuex from 'vuex'
import {plugins} from "./plugins"
import modules from "./modules"
Vue.use(Vuex)

const store = new Vuex.Store({
    modules,
    state:{ token:null,},
    actions:{
        go(context,payload){ payload && router.push(payload) },
    },
    mutations: {
        save_token(state,payload=null){ state.token=payload; },
    },
    getters:{
        token:(state)=>state.token
    },
    plugins,
})
export default store
