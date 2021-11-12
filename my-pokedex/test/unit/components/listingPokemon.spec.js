import ListingPokemon from '@/components/ListingPokemon'
import { shallowMount } from '@vue/test-utils';
import pokeApiService from "../../../src/service/pokeApi.service";

jest.mock('../../../src/service/pokeApi.service', () => ({
    pokemonList: jest.fn()
}));

describe('ListingPokemon', () => {
    describe('Validate components and data', () => {
        it('should have component ListItem', () => {
            expect(ListingPokemon.components).toHaveProperty('ListItem')
        });

        it('should validate data pokemonName', () => {
            expect(ListingPokemon.data()).toEqual({ 
                pokemonName: []
            })
        })
    })
    
    describe('Methods', () => {

        it('should return an array of names when the service is called', async () => {
            pokeApiService.pokemonList.mockResolvedValueOnce({
                pokemonName: []
            })
            await shallowMount(ListingPokemon, {
                propsData: {
                    name: ['mock', 'mock1', 'mock2', 'mock3']
                }
            });
            expect(pokeApiService.pokemonList).toHaveBeenCalledWith([]);
        });
    })
})