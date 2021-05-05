import { RECEIVE_ALL_ITEMS } from "./../actions/item_actions";

const itemsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {

        case RECEIVE_ALL_ITEMS:
            return Object.assign({}, action.items)
        default:
            return state;
    }
}
window.itemsReducer = itemsReducer;
export default itemsReducer;