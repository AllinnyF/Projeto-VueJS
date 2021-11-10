import ListItem from '@/components/ListItem'
import { shallowMount } from '@vue/test-utils';
import pokeApiService from "../../../src/service/pokeApi.service";

jest.mock('../../../src/service/pokeApi.service', () => ({
    findPokemonById: jest.fn()
}));

xdescribe('ListItem', () => {
    describe('PropsData', () => {
        it('should have props name and url', () => {
            expect(ListItem.props.name).toEqual({ type: String, required: true });
            expect(ListItem.props.url).toEqual({ type: String, required: true });
        });

        xit('should validate data', () => {
            expect(ListItem.data()).toEqual({ 
                resultsApiService: {
                    sprites: {
                        front_default: ""
                    }
                }
            })
        });

    })
    
    describe('Methods', () => {
        it('should call pokeApiService when page is load ', async () => {
            pokeApiService.findPokemonById.mockResolvedValueOnce({
                sprites: {
                    front_default: "teste"
                }
            })
            await shallowMount(ListItem, {
                propsData: {
                    name: "unown",
                    url: "https://pokeapi.co/api/v2/pokemon/201/"
                }
            });
            expect(pokeApiService.findPokemonById).toHaveBeenCalledWith('201')
        });
    })
})