import React, { Component } from 'react'
import request from 'superagent'
import PokeItem from './PokeItem.js'

export default class PokeList extends Component {
   
    state = {
        query: '',
        pokeArray: [],
        sortOrder: 'ascending'
    };
    handleFormChange=(e)=> {
        e.preventDefault();
    }
    handleInputChange=(e) => {
        e.preventDefault();
        this.setState({query: '?pokemon='+(e.target.value)})
        this.fetchSearch();
    }
    handleDropChange=(e)=> {
    this.setState({sortOrder: e.target.value})
    
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

        pokemonArray.filter(poke =>)
        return (
            <>
               <form onSubmit = {this.handleFormChange}>
                   <input onChange={this.handleInputChange}/>
                   <button>Submit</button>
               </form>
               <select onChange={this.handleDropChange}>
                   <option value='ascending'>Ascending</option>
                   <option value='descending'>Descending</option>
               </select>
                <PokeItem array={pokemonArray}/>
            </>
        )
    }
}
