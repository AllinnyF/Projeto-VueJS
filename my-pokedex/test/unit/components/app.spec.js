import App from '@/App'

describe('App', () => {
    describe('Setup', () => {
        fit('should have components Pokedex', () => {
            expect(App.components).toHaveProperty('Pokedex')
        });

    })
})