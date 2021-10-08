<template>
  <div class="poke">
    <ul>
      <li v-for="pokemon in list" :key="pokemon.name"> {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import pokeApiService from '../service/pokeApi.service';

export default {
  list: 'Pokedex',
  data () {
    return {
      list: []
    }
  },

  async mounted() {
    this.list = await pokeApiService.pokemonList();
     await pokeApiService.findPokemonByName('rhydon');
     await pokeApiService.findPokemonById(this.list[0].url);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  color: #45948d;
}
</style>
