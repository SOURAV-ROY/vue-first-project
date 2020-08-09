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
      <ul class="nav justify-content-end">
        <li class="nav-item active">
          <router-link to="/endDay" activeClass="active">
            <a class="nav-link">End Day</a>
          </router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
            Save & Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Save Data</a>
            <a class="dropdown-item" href="#">Load Data</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
