<template>
    <div class="listing-polemon">
        <ListItem name="bulbasaur" url="https://pokeapi.co/api/v2/pokemon/1/" />
        <ListItem name="Pokemon" url="https://pokeapi.co/api/v2/pokemon/2/"/>
        <ListItem name="Pokemon" url="https://pokeapi.co/api/v2/pokemon/3/"/>
        <ListItem name="Pokemon" url="https://pokeapi.co/api/v2/pokemon/4/"/>
        <ListItem name="Pokemon" url="https://pokeapi.co/api/v2/pokemon/5/"/>
        <ListItem name="Pokemon" url="https://pokeapi.co/api/v2/pokemon/6/"/>
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
   
    }
  },

  // async mounted() {
  //   this.list = await pokeApiService.pokemonList('rhydon');
  //   await pokeApiService.findPokemonByName('rhydon');
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>