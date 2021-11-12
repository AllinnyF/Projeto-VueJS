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
    ListItem,
  },

  data () {
    return {
      pokemonName: [],
    }    
  },

  created() { 
    this.returnPokemonList(); 
  },

  methods: {
    async returnPokemonList (){
      const pokemonNameList = this.pokemonName.map(name => name);
      this.pokemonName = await pokeApiService.pokemonList(pokemonNameList);
    },
  },

  mounted() {

  }
}
</script>

<style lang="css" scoped>

.listing-pokemon{
  padding: 0rem 37.5rem 0rem;
}

</style>