import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
// import { RECEIVE_ALL_MOVES } from './../actions/move_actions';

const movesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return Object.assign({}, action.pokemon.moves)
    // case RECEIVE_ALL_MOVES: 
    //   return Object.assign({}, action.moves);
    default:
      return state
  }
}

export default movesReducer;