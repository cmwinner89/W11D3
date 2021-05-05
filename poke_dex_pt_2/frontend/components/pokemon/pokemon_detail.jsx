import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  render() {
    return (
      <div>
        <img src={this.props.pokemon.imageUrl} alt="pokemon image"/>
        <h2>
          {this.props.pokemon.name}
        </h2>
        <br></br>
        <p>Type: {this.props.pokemon.type}</p>
        <br></br>
        <p>Attack: {this.props.pokemon.attack}</p>
        <br></br>
        <p>Defense: {this.props.pokemon.defense}</p>
        <br></br>

        <h3>Moves:</h3>
        <ol>
          {this.props.moves.map(move => {
            <li key={move.id}>
              {move.name}
            </li>
          })}
        </ol>
        <h3>Items:</h3>
        <ul>
          {this.props.items.map(item => {
            <li key={item.id}>
              {item.name}
            </li>
          })}
        </ul>
      </div>
    )
  }

}

export default PokemonDetail;