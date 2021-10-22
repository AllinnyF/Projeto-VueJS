<template>
  <div id="app">
    <!--    <img src="./assets/logo.png">-->
    <Pokedex/>
    <ItemDeLista/>
  </div>
</template>

<script>
import Pokedex from "./components/Pokedex";
import ItemDeLista from "./components/ItemDeLista";
export default {
  name: 'App',
  components: {
    Pokedex,
    ItemDeLista
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
