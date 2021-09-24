import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <ul>
                {this.props.array.map(poke =>
                <li key= {this.props.array.indexOf(poke)}>
                <img className='pokeimage' src={poke.url_image} alt=''/>
                <p className='pokeinfo'>Name: {poke.pokemon}</p>
                <p>Speed: {poke.speed}</p>
                <p>HP: {poke.hp}</p> 
                </li> 
                )}
            </ul>
        )
    }
}
