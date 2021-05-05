import {connect} from 'react-redux';
import {requestSinglePokemon} from './../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => {
  return ({
    pokemon: state.entities.pokemon,
    moves: Object.values(state.entities.moves),
    items: Object.values(state.entities.items)
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    requestSinglePokemon: (pokemonId) => dispatch(requestSinglePokemon(pokemonId))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);