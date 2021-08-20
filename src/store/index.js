import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import platos from '@/modules/platos'
import cart from '@/modules/cart'
import tipodeplatos from '@/modules/tipodeplatos'
import empresas from '@/modules/empresas'

export default new Vuex.Store({
  modules: {
    platos, cart, tipodeplatos, empresas
  }
})
