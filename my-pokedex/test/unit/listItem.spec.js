
import Vue from 'vue';
import { mount } from '@vue/test-utils'
import ListItem from '../../../src/components/ListItem'

describe('ListItem', () => {

    //função que retorna o componente renderizado
    function renderComponent(ListItem, propsData) {
        return mount(ListItem, {
            propsData: props
        })
    }
    it('should be render props name', async () => {
        expect(
            renderComponent(ListItem, {
                name: 'Pokemon',
            }).text(),
        ).toBe('Pokemon')
    });

    it('should be render props url', async () => {
        expect(
            renderComponent(ListItem, {
                url: 'https://pokeapi.co/api/v2/pokemon/201/',
            }).text(),
        ).toBe('https://pokeapi.co/api/v2/pokemon/201/')
    });
})