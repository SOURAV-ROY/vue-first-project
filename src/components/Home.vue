<template>
  <div class="text-center">
    <h1>Trade or View your Portfolio</h1>
    <h6>You may Save & Load your Data</h6>
    <h6>Click on 'End Day' to begin a New Day!</h6>
    <p>Your Funds: <b>{{ funds }}</b></p>
    <hr>
  </div>
</template>

<script>
export default {
  computed: {
    funds(){
      return this.$store.getters.funds;
    }
  }
}
</script>

<style scoped>

</style>
