<template>
  <div class="col-md-6 text-center pb-3 pt-2">
    <div class="card bg-light">
      <div class="card-header bg-info">
        <b>{{ stock.name }}</b>
      </div>
      <div class="card-body">
        <p class="text-danger "><b>Price: {{ stock.price }} $</b></p>
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
            class="btn btn-success"
            @click="buyStock"
            :disabled="quantity <= 0 || !Number.isInteger(+quantity)"
          >Buy Item
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
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      console.log(order);
      this.quantity = 0;
    }
  }
}
</script>

<style scoped>

</style>
