<template>
  <div class="row">
    <app-stock v-for="stock in stocks" :stock="stock" :key="stocks.id"></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock";

export default {
  // data() {
  //   return {
  //     stocks: [
  //       {id: 1, name: "BMW", price: 110},
  //       {id: 2, name: "GOOGLE", price: 200},
  //       {id: 3, name: "APPLE", price: 330},
  //       {id: 4, name: "TWITTER", price: 450},
  //     ]
  //   }
  // },

  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  },

  components: {
    appStock: Stock
  }
}
</script>

<style scoped>

</style>
