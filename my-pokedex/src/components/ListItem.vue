<template>
    <div class="cards">
    <div class="list-pokemon">
      <img :src="pokemonData.sprites.front_default" @click="showModal"/> 
      <span class="name-pokemon"> {{ name }} </span>
      <ModalDetails v-on:closeModal="closeModal" v-if="isVisibleModal" :url="pokemonData.sprites.front_default" :name="pokemonData.name" 
      :pokemonBaseExperiences="pokemonData.base_experience" :pokemonHeights="pokemonData.height/10" :pokemonWeights="pokemonData.weight/10"
      :pokemonTypes="this.indiceTypes()"
      :pokemonInfoAbilities="this.indiceAbilities()"/>
    </div>
  </div>
</template>

<script>
import pokeApiService from '../service/pokeApi.service';
import ModalDetails from './ModalDetails';

export default {

  components: { ModalDetails },

  props: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String, 
      required: true,
    },
  },

  data () {
    return {
      pokemonData: {
        sprites: {
          front_default: ""
        },
        base_experience: [],
        height: null,
        weight: null,
        types: {
          type: {
            name: ""
          }
        },
        abilities: {
          ability: {
            name: ""
          }
        },
      },
        
      isVisibleModal: false,

    }
  },

  created() { 
    this.returnApiService(); 
  },

  methods: {
    async returnApiService (){
      const urlArray = this.url.split('/');
      this.pokemonData = await pokeApiService.findPokemonById(urlArray[6]);
    },
    showModal() { 
      this.isVisibleModal = true;
    },
    closeModal() {
      this.isVisibleModal = false; 
    }, 
    indiceTypes() {
      return this.pokemonData.types.map(itemType => itemType.type.name)
    },
    indiceAbilities() {
      return this.pokemonData.abilities.map(itemAbility => itemAbility.ability.name)
    }
  },

  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

.cards{
  margin: 0.625rem;
  display: inline-flex;  
}

.list-pokemon{
  border: 0.063rem solid rgb(204, 204, 204);
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  background-color: rgb(245, 245, 245);
  padding: 0.625rem 0.938rem 1.25rem;
}

.name-pokemon{
  font-size: 1.063rem;
  color: rgb(44, 62, 80);
  text-transform: capitalize;
  font-weight: 600;
}

</style>
