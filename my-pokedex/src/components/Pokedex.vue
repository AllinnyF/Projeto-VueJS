<template>
  <div class="main">
    <FindPokemon />
    <ListingPokemon />
  </div>
</template>

<script>
import ListingPokemon from './ListingPokemon';
import FindPokemon from './FindPokemon';
export default {

components: {
  ListingPokemon,
  FindPokemon
},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

</style>
