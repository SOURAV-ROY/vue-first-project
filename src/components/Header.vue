<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/">
      <a class="navbar-brand">Stock Trader</a>
    </router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/portfolio" activeClass="active">
            <a class="nav-link">Portfolio</a>
          </router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/stocks" activeClass="active">
            <a class="nav-link">Stocks</a>
          </router-link>
        </li>
      </ul>
      <strong class="badge badge-success">Funds : {{ funds | currency }}</strong>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <router-link to="/stocks">
            <a class="nav-link" @click="endDay">End Day</a>
          </router-link>
        </li>
        <div
          class="dropdown"
          :class="{open: isDropDownOpen}"
          @click="isDropDownOpen != isDropDownOpen"
        >
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
            Save & Load Data
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
            <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
          </div>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  data() {
    return {
      isDropDownOpen: false
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put('data.json', data);
    },
    loadData() {
      this.fetchData();
    }
  }
}
</script>

<style scoped>

</style>
