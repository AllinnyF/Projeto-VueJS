<template>
    <transition name="modal-details" v-if="visible">
        <div class="modal-details-mask">
            <div class="modal-details-wrapper" >
                <div class="modal-details-container">
                    <div class="modal-details-header">
                        <img class="modal-img" :src="url"/>
                        <span class="modal-name">{{ name }}</span>
                    </div>
                    <div class="modal-details-body">
                        <div class="details-experience">
                            <span class="info-experience"> Base Experience/ Experiência </span>
                            <span class="info-experience-results"> {{ pokemonBaseExperiences }} XP </span>
                            <hr class="hr-infos">
                        </div>
                        <div class="details-height">
                            <span class="info-height"> Height/ Altura </span>
                            <span class="info-height-results"> {{ pokemonHeights }} m </span>
                            <hr class="hr-infos">
                        </div>   
                        <div class="details-weight">
                            <span class="info-weight"> Weight/ Peso </span>
                            <span class="info-weight-results"> {{ pokemonWeights }} Kg </span>
                            <hr class="hr-infos">
                        </div>
                        <div class="details-pokemon-types">
                            <span class="info-types"> Pokemon Types/ Tipo </span>
                            <hr>
                            <div class="types-details">
                                <span class="info-types-results" v-for="type in pokemonTypes" :key="type" :style="{'background-color': getColors(type)}"> {{ type }} </span>
                            </div>
                            </div>
                        <div class="details-pokemon-abilities">
                            <span class="info-abilities"> Abilities/ Habilidades </span>
                            <hr>
                            <div class="abilities-details">
                                <span class="info-abilities-results" v-for="ability in pokemonInfoAbilities" :key="ability">{{ ability }}</span>  
                            </div>
                        </div> 
                    </div>
                    <button class="details-button-close" @click="close">
                        Fechar / Close
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>

import ListItem from "./ListItem";

export default{

    components: ListItem,

    props: {
        url: {
            type: String, 
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        pokemonBaseExperiences: {
            type: Array, 
            required: true,
        },
        pokemonHeights: { 
            type: Array,
            required: true,
        },
        pokemonWeights: { 
            type: Array,
            required: true,
        },
        pokemonTypes: {
            type: Array, 
            required: true,
        },
        pokemonInfoAbilities: {
            type: Array, 
            required: true,
        },
    },

  data () {
    return {
        visible: true,
        typeColors: {         
            "bug": "red",
            "dark": "black",
            "dragon": "orange",
            "electric": "yellow",
            "fairy": "pink",
            "fighting": "gold",
            "fire": "fireBrick",
            "flying": "lightBlue",
            "ghost": "violet",
            "grass": "lightGreen",
            "ground": "chocolate",
            "ice": "lightCyan",
            "normal": "brown",
            "poison": "purple",
            "psychic": "darkGreen",
            "rock": "gray",
            "steel": "silver",
            "water": "navy"    
        }, 
    }
  },

  methods: {
    close() {
        this.$emit('closeModal'); 
    }, 
    getColors(type){ 
        return this.typeColors[type] || "";
    },
  },

  mounted() {
    
  }

}
</script>

<style lang="css" scoped>

.modal-details-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
}

.modal-details-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-details-container {
    width: 380px;
    margin: auto;
    padding: 2.5rem 3.12rem 1rem 3.12rem;
    background-color: rgb(255, 255, 255);
    border-radius: 1rem;
    color: rgb(44, 62, 80);
    text-transform: capitalize;
}

.modal-details-header{
    margin-left: auto;
    margin-right: auto;
    width: 6rem;
    margin-bottom: 1.87rem;
}

.modal-img{
    border-radius: 3.12rem;
    background-color: rgb(255, 215, 0);
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
}

.modal-name{
    font-size: 1.4rem;
    font-weight: 550;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
}

.info-experience, .info-height, .info-weight{
    font-size: 1.2rem;
    float: left;
}

.info-experience{
    margin-right: 5.5rem;
}

.info-height{
    margin-right: 13.4rem;
}

.info-weight{
    margin-right: 13.2rem;
}

.info-experience-results, .info-height-results, .info-weight-results{
    font-size: 1.2rem;
}

.info-height-results{
    text-transform: lowercase;
}

.info-abilities, .info-types{   
    font-size: 1.3rem;
    font-weight: 530;
    display: flex;
    justify-content: flex-start;
}

hr{
    margin: 0
}

.hr-infos{
    margin-bottom: 1rem;
}

.types-details{
    margin-top: 0.40rem;
    display: flex;
    justify-content: flex-start;
}

.info-types-results {
    border-radius: 0.94rem;
    padding: 0.31rem;
    margin: 0 0.50rem 0.50rem 0;
    color: rgb(255, 255, 255);
    font-size: 1.3rem;
}

.abilities-details {
    display: flex;
    justify-content: flex-start;
    margin-top: 0.40rem;
}

.info-abilities-results{
    border: solid;
    border-radius: 0.94rem;
    padding: 0.31rem;
    margin-left: 0.35rem;
    font-size: 1.2rem;
}

.details-button-close{
    font-size: 1.1rem;
    font-weight: 600;
    color: rgb(255, 255, 255);
    background-color: rgb(219,112,147);
    margin: 1.87rem;
    padding: 0.62rem;
    border-radius: 0.4rem;
    border: none;
    cursor: pointer;
}

</style>
