const axios = require('axios');
export default {
  async pokemonList() {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=100&limit=100');
    return response.data.results;
  },
  async findPokemonByName(name) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    console.log(response.data);
    return response.data;
  },
  async findPokemonById(url) {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  }
}
