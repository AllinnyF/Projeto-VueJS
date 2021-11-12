import ListItem from '@/components/ListItem'
import { shallowMount } from '@vue/test-utils';
import pokeApiService from "../../../src/service/pokeApi.service";

jest.mock('../../../src/service/pokeApi.service', () => ({
    findPokemonById: jest.fn()
}));

describe('ListItem', () => {
    describe('PropsData', () => {

        it('should have component ModalDetails ', () => {
            expect(ListItem.components).toHaveProperty('ModalDetails')
        });

        it('should have props name and url', () => {
            expect(ListItem.props.name).toEqual({ type: String, required: true });
            expect(ListItem.props.url).toEqual({ type: String, required: true });
        });

        it('should validate data', () => {
            expect(ListItem.data()).toEqual({ 
                pokemonData: {
                    sprites: {
                        front_default: ""
                    },
                    base_experience: [],
                    height: null,
                    weight: null,
                    types: {
                        type: {
                            name: ""
                        }
                    },
                    abilities: {
                        ability: {
                            name: ""
                        }
                    },
                },

                isVisibleModal: false,
            })
        });

    })
    
    describe('Methods', () => {

        const context = {
            showModal: true,
            closeModal: false
        };
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

        it('should open modal when showModal is true', () => {
            ListItem.methods.showModal.call(context)

            expect(context.showModal).toBeTruthy();
        });

        it('should close modal when closeModal is false', () => {
            ListItem.methods.closeModal.call(context)

            expect(context.closeModal).toBeFalsy();
        });

        it('should be return a list of types pokemon', () => {
            
        });

        it('should be return a list of abilities pokemon', () => {

        })
    })
})