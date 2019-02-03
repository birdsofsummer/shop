import createPersistedState from 'vuex-persistedstate'
import createLogger from 'vuex/dist/logger'
import {islocal} from '../fp'

const myPlugin = store => {
  store.subscribe((mutation, state) => {
    console.log(mutation)
  })
}
//process.env.NODE_ENV == 'production'
const  plugins=islocal
    ? [createPersistedState(),myPlugin,createLogger()]
    : [createPersistedState(),]

export {plugins}

