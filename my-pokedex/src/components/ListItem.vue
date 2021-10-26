<template>
  <div class="cards-pokemons">
    <div class="list-pokemon">
      <img :src="detailsCard.sprites.front_default" alt=""/>
      <span class="name-pokemon"> {{ name }} </span>
    </div>
  </div>
</template>

<script>
import pokeApiService from '../service/pokeApi.service';

export default {
  name: 'ListItem',

  props: ['name', 'url'],

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
<style scoped>

div.cards-pokemons{
  flex: 1;
  display: inline-flex;
}

div.list-pokemon{
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  max-width: 90px;
}

img.img-pokemon{
  order: initial;
}

span.name-pokemon{
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 600;
  padding: 10px 5px;
  display: inline-flex;
  justify-content: center;
}
</style>
