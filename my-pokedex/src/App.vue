<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Pokedex/>
    <ListingPokemon/>
  </div>
</template> 

<script>
import Pokedex from "./components/Pokedex";
import ListingPokemon from './components/ListingPokemon.vue';

export default {
  components: {
    Pokedex,
    ListingPokemon
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
