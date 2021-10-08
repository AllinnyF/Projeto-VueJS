import axios from 'axios';
import Pokedex from "@/components/Pokedex";

jest.mock('axios');

describe('Pokedex', () => {
  it('should return results when call API', () => {
      const results = [{name: 'rhydon'}];
      const response = {data: results};
      axios.get.mockRejectedValueOnce(response);

      return results.all().then(data => expect(data).toEqual(results));
  });
  it('should return pokemon name when search by name', () => {

  });
})
