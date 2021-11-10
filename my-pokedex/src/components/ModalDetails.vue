<template>
    <transition name="modal-details" v-if="visible">
        <div class="modal-details-mask">
            <div class="modal-details-wrapper" >
                <div class="modal-details-container">
                    <div class="modal-details-header">
                        <slot class="header">
                            <img class="modal-img" :src="url"/>
                            <span class="modal-name">{{ name }}</span>
                        </slot>
                    </div>
                    <div class="modal-details-body">
                        <div class="details-experience">
                            <span class="info-experience"> Base Experience/ Experiência </span>
                            <span class="info-experience-results"> {{ pokemonBaseExperience }} XP </span>
                            <hr>
                        </div>
                        <div class="details-height">
                            <span class="info-height">Height/ Altura</span>
                            <span class="info-height-results"> {{ pokemonHeight }} m </span>
                            <hr>
                        </div>   
                        <div class="details-weight">
                            <span class="info-weight">Weight/ Peso</span>
                            <span class="info-weight-results"> {{ pokemonWeight }} Kg </span>
                            <hr>
                        </div>
                        <div class="details-pokemon-types">
                            <span class="info-types"> Pokemon Types/ Tipo </span>
                            <hr>
                            <div class="types-details">
                                <span class="info-types-results" v-for="type in pokemonType" :key="type"> {{ returnDifColorOfTypes(type.colorType) }} </span>
                            </div>
                            </div>
                        <div class="details-pokemon-abilities">
                            <span class="info-abilities"> Abilities/ Habilidades </span>
                            <hr>
                            <div class="details-abilities">
                                <span class="info-abilities-results" v-for="ability in pokemonInfoAbility" :key="ability">{{ ability }}</span>  
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
        pokemonBaseExperience: {
            type: Array, 
            required: true,
        },
        pokemonHeight: { 
            type: Array,
            required: true,
        },
        pokemonWeight: { 
            type: Array,
            required: true,
        },
        pokemonType: {
            type: Array, 
            required: true,
        },
        pokemonInfoAbility: {
            type: Array, 
            required: true,
        },
    },

  data () {
    return {
        visible: true,
    }
  },

  methods: {
    close() {
        this.$emit('closeModal'); 
    }, 
    returnDifColorOfTypes(colorType){
        if (colorType === "bug"){
            return "bug"
        }else if (colorType === "dark"){
            return "dark"
        }else if (colorType === "dragon"){
            return "dragon"
        }else if (colorType === "electric"){
            return "electric"
        }else if (colorType === "fairy"){
            return "fairy"
        }else if (colorType === "fighting"){
            return "fighting"
        }else if (colorType === "fire"){
            return "fire"
        }else if (colorType === "ghost"){
            return "ghost"
        }else if (colorType === "Grass"){
            console.log("grass")
            return "grass"
        }else if (colorType === "ground"){
            return "ground"
        }else if (colorType === "ice"){
            return "ice"
        }else if (colorType === "normal"){
            return "normal"
        }else if (colorType === "psychic"){
            return "psychic"
        }else if (colorType === "rock"){
            return "rock"
        }else if (colorType === "grass"){
            console.log("grass")
            return "grass"
        }else if (colorType === "steel"){
            return "steel"
        }else if (colorType === "water"){
            return "water"
        } return;
    }
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
    width: 400px;
    margin: auto;
    padding: 3px 50px;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    color: #2c3e50;
    text-transform: capitalize;
}

.modal-details-header{
    margin-left: auto;
    margin-right: auto;
    width: 6rem;
    margin-bottom: 30px;
}

.modal-img{
    border-radius: 50px;
    background-color: gold;
    width: 100px;
}

.modal-name{
    font-size: 22px;
    font-weight: 600;
    margin: 10px;
    display: flex;
    justify-content: center;
}

.modal-details-body{
    font-size: 15px;
    font-weight: 400;
}

.info-types-results {
    border-radius: 15px;
    padding: 5px;
}

.info-types-results{
    --grass: {
        background-color: rgb(142, 235, 114);
    } 

}
    


.info-abilities, .info-types{
    font-size: 17px;
    font-weight: 530;
}


.info-experience, .info-height, .info-weight, .info-abilities, .info-types{
    display: flex;
    justify-content: flex-start;
}

.info-experience-results, .info-height-results, .info-weight-results{
    display: flex;
    justify-content: flex-end;
}
.info-height-results{
    text-transform: lowercase;
}

.info-abilities-results {
    border: solid;
    border-radius: 15px;
    color: rgb(77, 231, 25);
    padding: 5px;
}

.details-button-close{
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: rgb(172, 109, 197);
    margin: 30px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

</style>
