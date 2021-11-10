<template>
    <div class="cards">
    <div class="list-pokemon">
      <img :src="pokemonData.sprites.front_default" @click="showModal"/> 
      <span class="name-pokemon"> {{ name }} </span>
      <ModalDetails v-on:closeModal="closeModal" v-if="isVisibleModal" :url="pokemonData.sprites.front_default" :name="pokemonData.name" 
      :pokemonBaseExperience="pokemonData.base_experience" :pokemonHeight="pokemonData.height/10" :pokemonWeight="pokemonData.weight/10"
      :pokemonType="this.indiceTypes()"
      :pokemonInfoAbility="this.indiceAbilities()"/>
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
  margin: 10px;
  display: inline-flex;  
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
  font-size: 17px;
  color: #2c3e50;
  text-transform: capitalize;
  font-weight: 600;
}

</style>
