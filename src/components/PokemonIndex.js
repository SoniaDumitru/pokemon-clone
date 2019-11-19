import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import SearchBar from './SearchBar'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonIndex extends React.Component {
  constructor() {
  super()
    this.state = {
      pokemons: [],
      filter: '',
      sortby: ''
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/pokemon`)
      .then(resp => resp.json())
      .then(pokemons => {
        this.setState({
          pokemons: pokemons
        })
      })
  }

  handleRadio =(event)=> {
    this.setState({
      sortby: event.target.value
    })
  }

  handleSearchChange = event => {
    this.setState({
      filter: event.target.value
    })
  }

  selectSort =()=> {
    let selectedPokemons = [...this.state.pokemons]
    if (this.state.sortby === "Alphabetically") {
      return selectedPokemons.sort((firstPoke, secondPoke) => {
        if (firstPoke.name < secondPoke.name) {return -1}
        if (firstPoke.name > secondPoke.name) {return 1}
        return 0
      })
    } else if (this.state.sortby === 'HP') {
      return selectedPokemons.sort((firstPoke, secondPoke) => firstPoke.hp - secondPoke.hp)
    } else {
      return selectedPokemons
    }
  }

  addPokemon =(pokemon)=> {
    this.setState({
      pokemons: [...this.state.pokemons, pokemon]
    })
  }

  render() {

    const filteredPokemon=this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.filter))

    return (
        <div>
          <h1>Pokemon Searcher</h1><br/>
          <SearchBar
          selectSort={this.selectSort}
          sortby={this.state.sortby}
          handleRadio={this.handleRadio}/>

          <Search
          onSearchChange={this.handleSearchChange}
          filter={this.state.filter}
          sortPokemons={this.selectSort()}
          /><br />

          <PokemonForm addPokemon={this.addPokemon}/>

          <PokemonCollection
          pokemons={filteredPokemon}/><br/>

        </div>
    )
  }
}

export default PokemonIndex
