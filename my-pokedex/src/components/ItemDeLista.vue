<template>
  <div class="lista-de-pokemons">
    <ul>
      <li v-for="pokemon in list" :key="pokemon.name"> {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import pokeApiService from '../service/pokeApi.service';

export default {
  data () {
    return {
      list: []
    }
  },

  async mounted() {
    this.list = await pokeApiService.pokemonList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  color: #804594;
}
</style>
