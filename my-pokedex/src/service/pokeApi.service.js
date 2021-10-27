import { axiosInstance } from './config';

export default {
  async pokemonList() {
    const response = await axiosInstance.get('?offset=0&limit=150');
    return response.data.results;
  },
  async findPokemonByName(name) {
    const response = await axiosInstance.get(`/${name}`);
    return response.data;
  },
  async findPokemonById(id) {
    const response = await axiosInstance.get(`/${id}`);
    return response.data;
  }
}
