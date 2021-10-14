import axios from 'axios';
import pokeapi from "../../../src/service/pokeApi.service";

jest.mock('axios');

describe('Pokedex', () => {
  it('should return results when call API', async () => {
      const data = { results: [{name: 'rhydon'}] };
      const response = { data };
      axios.get.mockResolvedValueOnce(response);
      const results = await pokeapi.pokemonList(); 
      expect(results).toEqual(data.results);
  });
  it('should return pokemon name when search by name', () => {

  });
})
