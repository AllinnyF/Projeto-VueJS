<template>
    <div class="listing-pokemon">
        <ListItem v-for="pokemon in pokemonName" v-bind:key="pokemon.name.url" :name="pokemon.name" :url="pokemon.url"/>
    </div>
</template>

<script>

import pokeApiService from '../service/pokeApi.service';
import ListItem from "./ListItem";

export default {
  
  components: {
    ListItem
  },

  data () {
    return {
      pokemonName: [],
    }
  },

  async mounted() {
    const pokemonNameList = this.pokemonName.map(name => name);
    this.pokemonName = await pokeApiService.pokemonList(pokemonNameList);
  }
}
</script>

<style lang="css" scoped>

.listing-pokemon{
  padding: 0px 600px 0px;
}

</style>