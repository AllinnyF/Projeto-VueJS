import ModalDetails from '@/components/ModalDetails'; 

describe('ModalDetails', () => {

    const context = {
        $emit: jest.fn(),
    }

    it('should have props', () => {
        expect(ModalDetails.props.url).toEqual({ type: String, required: true });
        expect(ModalDetails.props.name).toEqual({ type: String, required: true });
        expect(ModalDetails.props.pokemonBaseExperiences).toEqual({ type: Array, required: true });
        expect(ModalDetails.props.pokemonHeights).toEqual({ type: Array, required: true });
        expect(ModalDetails.props.pokemonWeights).toEqual({ type: Array, required: true });
        expect(ModalDetails.props.pokemonTypes).toEqual({ type: Array, required: true });
        expect(ModalDetails.props.pokemonInfoAbilities).toEqual({ type: Array, required: true });
    });

    it('should validate initial data', () => {
        expect(ModalDetails.data()).toEqual({
            visible: true,
            typeColors: {
                "bug": "red",
                "dark": "black",
                "dragon": "orange",
                "electric": "yellow",
                "fairy": "pink",
                "fighting": "gold",
                "fire": "fireBrick",
                "flying": "lightBlue",
                "ghost": "violet",
                "grass": "lightGreen",
                "ground": "chocolate",
                "ice": "lightCyan",
                "normal": "brown",
                "poison": "purple",
                "psychic": "darkGreen",
                "rock": "gray",
                "steel": "silver",
                "water": "navy"
            }, 
        })
    })
    it('should emit event closeModal', () => {
        ModalDetails.methods.close.call(context);

        expect(context.$emit).toHaveBeenCalledWith('closeModal');
    });

    it('should return pokemon color when method is called', () => {
        const contextType = {
            typeColors: {
                'bug': 'red'
            }
        }
        ModalDetails.methods.getColors.call(contextType);

        expect(contextType.typeColors).toEqual({ 'bug': 'red'});
    });

})