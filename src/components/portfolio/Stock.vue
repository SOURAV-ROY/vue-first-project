<template>
  <div class="col-md-4 text-center pb-3">
    <div class="card bg-light">
      <div class="card-header bg-success">
        <b>{{ stock.name }}</b>
      </div>
      <div class="card-body">
        <p class="text-danger "><b>Price: {{ stock.price }}$ | Quantity: {{ stock.quantity }}</b></p>
        <label>
          <input
            type="number"
            class="form-control border border-danger"
            placeholder="Quantity"
            v-model="quantity"
          >
        </label>
        <div>
          <button
            class="btn btn-primary"
            @click="sellStock"
            :disabled="quantity <= 0 || !Number.isInteger(+quantity)"
          >Sell
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {

    ...mapActions({
      placeSellOrder: 'sellStock'
    }),

    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
      console.log(order)
    }
  }
}
</script>

<style scoped>

</style>
