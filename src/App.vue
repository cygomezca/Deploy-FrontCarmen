<template>
  <div id="app">
    <header-item></header-item>
    <b-container fluid >
    <!-- <carousel-item></carousel-item> -->
    </b-container>
    <!-- Listar los tipodeplato -->
    <router-view/>
    <header-footer></header-footer>
  </div>
</template>

<script>
import Layout from '@/layouts/Layout'
import PlatosList from '@/components/PlatosList'
import Cart from '@/components/Cart'
import CarouselItem from '@/components/CarouselItem'
import HeaderItem from '@/components/HeaderItem'
import HeaderFooter from '@/components/HeaderFooter'

export default {
  name: 'App',
  components: {
    Layout, PlatosList, Cart, CarouselItem, HeaderFooter, HeaderItem
  }
}
</script>

