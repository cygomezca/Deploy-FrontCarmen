<template>
    <!-- Layout  -->
      <b-container fluid class="bv-example">
        <b-row>
          <b-col sm="2">Col 4 </b-col>
          <b-col sm="9">
            <layout>
              <template slot="platos">
                  <platos-list></platos-list>
              </template>
              <template slot="cart">
                  <cart></cart>
              </template>
            </layout>
          </b-col>
        </b-row>
      </b-container>
    <!-- Layout - end -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Layout from '@/layouts/Layout'
import PlatosList from '@/components/PlatosList'
import Cart from '@/components/Cart'

export default {
    name: 'Platos',
    components:{
        Layout, PlatosList, Cart
    }/* ,
    computed:{
        ...mapGetters('platos', ['pending', 'done'])
    },
    mounted(){
        this.fetchPlatos()
    },
    methods:{
        ...mapActions('platos', ['fetchPlatos'])
    } */
}
</script>