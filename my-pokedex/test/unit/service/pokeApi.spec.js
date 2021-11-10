import { axiosInstance } from '../../../src/service/config';
import pokeApi from "../../../src/service/pokeApi.service";

jest.mock('../../../src/service/config', () => ({
  axiosInstance: {
    get: jest.fn()
  }
})); //() O JS entende que deve retornar um objeto elimando o uso do return

describe('Pokedex', () => {

  afterEach( () => {
    jest.clearAllMocks();
  });

  it('should return results when call API', async () => {
      const data = { results: [{name: 'starmie'}] };
      const response = { data };
      axiosInstance.get.mockResolvedValueOnce(response);
      const results = await pokeApi.pokemonList();
      expect(results).toEqual(data.results);
      expect(axiosInstance.get).toHaveBeenLastCalledWith('?offset=0&limit=150')
  });
  it('should return pokemon details when search by name', async () => {
    const data = { results: [{name: 'starmie'}] };
    const response = { data };
    axiosInstance.get.mockResolvedValueOnce(response);
    const results = await pokeApi.findPokemonByName('abra');
    expect(results).toEqual({"results": [{"name": "starmie"}]});
    expect(axiosInstance.get).toHaveBeenLastCalledWith('/abra')
  });
  it('should return pokemon details when search by id', async () => {
    const data = { results: [{name: 'starmie', abilities: ['mock', 'mock2']}] };
    const response = { data };
    axiosInstance.get.mockResolvedValueOnce(response);
    const results = await pokeApi.findPokemonById('205');
    expect(results).toEqual({"results": [{"name": "starmie", abilities: ['mock', 'mock2']}]});
    expect(axiosInstance.get).toHaveBeenLastCalledWith('/205')
  });
})
