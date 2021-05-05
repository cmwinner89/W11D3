import { RECEIVE_SINGLE_POKEMON } from "../actions/pokemon_actions";
// import { RECEIVE_ALL_ITEMS } from "./../actions/item_actions";

const itemsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {

        // case RECEIVE_ALL_ITEMS:
        //     return Object.assign({}, action.items)
        case RECEIVE_SINGLE_POKEMON:
            return Object.assign({}, action.pokemon.items)
        default:
            return state;
    }
}

export default itemsReducer;