import { mount } from '@vue/test-utils'
import ListItem from '@/components/ListItem'
import { axiosInstance } from '../../../src/service/config';
import pokeApiService from "../../../src/service/pokeApi.service";

jest.mock('../../../src/service/config', () => ({
    axiosInstance: {
        get: jest.fn()
    }
}));

const urlMock = "https://pokeapi.co/api/v2/pokemon/1/";

describe('ListItem', () => {

    //função que retorna o componente renderizado
    function renderComponent(ListItem, propsData) {
        return mount(ListItem, {
            propsData
        })
    }


    it('should be render props name', () => {
        expect(
            renderComponent(ListItem, {
                name: 'bulbasaur',
            }).text(),
        ).toBe('bulbasaur')
    });

    xit('should be render props url', async () => {
        jest.spyOn(pokeApiService, 'findPokemonById').mockResolvedValueOnce({
                sprites: {
                    front_default: "teste"
                }
        });
        expect(
            renderComponent(ListItem, {
                url: urlMock,
            }).text(),
        ).toEqual('https://pokeapi.co/api/v2/pokemon/1/')
    });
})