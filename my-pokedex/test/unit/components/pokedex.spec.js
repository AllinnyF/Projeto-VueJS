import Pokedex from '@/components/Pokedex'

xdescribe('Pokedex', () => {
    describe('Setup', () => {
        it('should have components ', () => {
            expect(Pokedex.components).toHaveProperty('ListingPokemon')
        });

    })
})