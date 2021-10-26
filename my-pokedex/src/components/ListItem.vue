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

  methods: {
    updateCard() {
      this.$sort(detailsCard);
    }
  },

  async mounted() {
    const urlArray = this.url.split('/');
    // this.list = await pokeApiService.pokemonList('rhydon');
    // await pokeApiService.findPokemonByName('rhydon');
    this.detailsCard = await pokeApiService.findPokemonById(urlArray[6]);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.cards-pokemons{
  display: inline-flex;
}

div.list-pokemon{
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 50px;
  display: flex;
  flex-direction: column;
}
img.img-pokemon{
  order: 0;
}
span.name-pokemon{
  margin: 10px;
  font-size: 22px;
  text-transform: capitalize;
  font-weight: 600;
  padding: 10px 5px;
  padding-right: 30px;
  padding-left: 12px;
}
</style>
