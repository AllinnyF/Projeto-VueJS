import ModalDetails from '@/components/ModalDetails'; 

describe('ModalDetails', () => {

    const context = {
        $emit: jest.fn(),
    }

    it('should have props', () => {
        expect(ModalDetails.props.url).toEqual({ type: String, required: true });
        expect(ModalDetails.props.name).toEqual({ type: String, required: true });
        expect(ModalDetails.props.pokemonBaseExperience).toEqual({ type: Array, required: true });
        expect(ModalDetails.props.pokemonHeight).toEqual({ type: Array, required: true });
        expect(ModalDetails.props.pokemonWeight).toEqual({ type: Array, required: true });
        expect(ModalDetails.props.pokemonType).toEqual({ type: Array, required: true });
        expect(ModalDetails.props.pokemonInfoAbility).toEqual({ type: Array, required: true });
    });

    it('should validate initial data', () => {
        expect(ModalDetails.data()).toEqual({
            visible: true,
        })
    })
    it('should emit event closeModal', () => {
        ModalDetails.methods.close.call(context);

        expect(context.$emit).toHaveBeenCalledWith('closeModal');
    });

})