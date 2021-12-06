import Vue from 'vue'
import Vuex from 'vuex'
import {bitcoinModule} from './modules/bitcoin.module'
import {userModule} from './modules/user.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    bitcoinModule,
    userModule
  }
})

