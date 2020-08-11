<template>
  <div class="row">
    <app-stock v-for="stock in stocks" :stock="stock" :key="stocks.id"></app-stock>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Stock from './Stock';

export default {
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  },
  components: {
    appStock: Stock
  }
}
</script>

<style scoped>

</style>
