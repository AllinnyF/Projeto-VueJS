<template>
    <div class="cards-pokemons">
    <div class="list-pokemon">
      <img :src="detailsCard.sprites.front_default"/> 
      <span class="name-pokemon"> {{ name }} </span>
    </div>
  </div>
</template>

<script>
import pokeApiService from '../service/pokeApi.service';

export default {

  props: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: [ String, Array ], 
      required: true,
    }
  },

  data () {
    return {
      detailsCard: {
        sprites: {
          front_default: ""
        }
      }
    }
  },

  async mounted() {
    const urlArray = this.url.split('/');
    this.detailsCard = await pokeApiService.findPokemonById(urlArray[6]);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

.cards-pokemons{
  margin: 10px;
  display: inline-flex;  
  flex-direction: column;
}

.list-pokemon{
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  padding: 10px 15px 20px;
}

.name-pokemon{
  font-size: 18px;
  color: #2c3e50;
  text-transform: capitalize;
  font-weight: 600;
}

</style>
