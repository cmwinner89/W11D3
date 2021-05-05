import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_MOVES = "RECEIVE_ALL_MOVES";

export const receiveAllMoves = (moves) => {
  return({
    type: RECEIVE_ALL_MOVES,
    moves
  })
}

export const requestAllMoves = (pokemonId) => (dispatch) => {
  return APIUtil.fetchSinglePokemon(pokemonId)
    .then( pokemon => {
      return dispatch(receiveAllMoves(pokemon.moves))
    })
}

window.requestAllMoves = requestAllMoves;