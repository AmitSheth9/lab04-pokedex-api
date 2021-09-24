import React, { Component } from 'react'
import request from 'superagent'
import PokeItem from './PokeItem.js'

export default class PokeList extends Component {
   
    state = {
        query: '',
        pokeArray: []
    };
    handleFormChange=(e)=> {
        e.preventDefault();
    }
    handleInputChange=(e) => {
        e.preventDefault();
        this.setState({query: '?pokemon='+(e.target.value)})
        this.fetchSearch();
    }
    componentDidMount = async () => {
        const response = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex')
        console.log(response.body)
        this.setState({allArray: response.body.results})
    }
    fetchSearch = async() => {
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex${this.state.query}`)
        this.setState({pokeArray: response.body.results})
    }

    
    
    render() {
        const pokemonArray = this.state.pokeArray
        console.log(pokemonArray);   
        console.log(this.state);
        return (
            <>
               <form onSubmit = {this.handleFormChange}>
                   <input onChange={this.handleInputChange}/>
                   <button>Submit</button>
               </form>
                <PokeItem array={pokemonArray}/>
            </>
        )
    }
}
