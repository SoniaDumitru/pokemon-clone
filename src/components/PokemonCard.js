import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    flipped: true
  }

  toggleFlip =()=> {
    this.setState({
      flipped: !this.state.flipped
    })
  }

  render() {
    
    return (
      <Card>
        <div>
          <div onClick={() => this.toggleFlip()} className="image">
            <img src={this.state.flipped ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              HP {this.props.pokemon.stats.find(stat => stat.name === "hp").value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
