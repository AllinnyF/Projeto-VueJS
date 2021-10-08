<template>
  <div id="app">
    <!--    <img src="./assets/logo.png">-->
    <Pokedex/>
  </div>
</template>

<script>
import Pokedex from "./components/Pokedex";

export default {
  name: 'App',
  components: {
    Pokedex
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
