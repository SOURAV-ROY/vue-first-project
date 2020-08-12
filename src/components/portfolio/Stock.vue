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
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{danger: insufficientQuantity}"
          >
        </label>
        <div>
          <button
            class="btn btn-primary"
            @click="sellStock"
            :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(+quantity)"
          >{{ insufficientQuantity ? 'Not Enough' : 'SELL' }}
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
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
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
.danger {
  border: 3px solid red;
}
</style>
