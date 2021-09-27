import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class PokeItem extends Component {
    render() {
        return (
            
                <li className = 'pokecontainer' >
                    <Link to={`/pokemon/${this.props._id}`}>
                <img className='pokeimage' src={this.props.url_image} alt=''/>
                <p className='pokeinfo'>Name: {this.props.pokemon}</p>
                <p className='pokeinfo'>Speed: {this.props.speed}</p>
                <p className='pokeinfo'>HP: {this.props.hp}</p> 
                <p className='pokeinfo'>Shape: {this.props.shape}</p>
                <p className='pokeinfo'>Height: {this.props.height}</p>
                </Link>
                </li> 
              
        
        )
    }
}
