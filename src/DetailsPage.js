import React, { Component } from 'react'
import request from 'superagent'

export default class DetailsPage extends Component {
    state = {
        pokeObject: {},
    }
    componentDidMount = async() => {
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params.id}`)
        this.setState({pokeObject: response.body })
    }
    render() {
        console.log(this.state)

        return (
            <div>
                Welcome to {this.state.pokeObject.pokemon}'s page!
                <img src={this.state.pokeObject.url_image} alt=''/>
                <p>Height: {this.state.pokeObject.height}</p>
                <p>weight: {this.state.pokeObject.weight}</p>
                <p>Attack: {this.state.pokeObject.attack}</p>
                <p>Defense: {this.state.pokeObject.defense}</p>
                <p>HP: {this.state.pokeObject.hp}</p>
                <p>Speed: {this.state.pokeObject.speed}</p>
                <p>ability 1: {this.state.pokeObject.ability_1}</p>
                <p>Pokebase: {this.state.pokeObject.pokebase}</p>
            </div>
        )
    }
}
