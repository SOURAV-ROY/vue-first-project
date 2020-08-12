<template>
  <div class="col-md-4 text-center pb-3">
    <div class="card bg-light">
      <div class="card-header bg-info">
        <b>{{ stock.name }}</b>
      </div>
      <div class="card-body">
        <p class="text-danger "><b>Price: {{ stock.price }}$</b></p>
        <label>
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{danger: insufficientFunds}"
          >
        </label>
        <div>
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(+quantity)"
          >{{ insufficientFunds ? 'InsufficientFunds' : 'BUY' }}
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.$store.dispatch('buyStock', order);
      this.quantity = 0;
      console.log(order);
    }
  }
}
</script>

<style scoped>
.danger {
  border: 2px solid red!important;
}
</style>
