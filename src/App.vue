<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    appHeader: Header
  },

  created() {
    this.$store.dispatch('initStocks');
  }
}
</script>

<style>
body {
  padding: 30px;
}

/*#app {*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
