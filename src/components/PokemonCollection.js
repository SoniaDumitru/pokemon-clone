import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <div>
        <Card.Group itemsPerRow={10}>
          <h1>okemon Collection</h1>
          {this.props.pokemons.map(pokemon=> <PokemonCard key = {pokemon.id} pokemon={pokemon}/>)}
        </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection
