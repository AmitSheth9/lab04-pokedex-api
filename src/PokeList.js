import React, { Component } from 'react'
import request from 'superagent'
import PokeItem from './PokeItem.js'

export default class PokeList extends Component {
   
    state = {
        query: '',
        pokeArray: [],
        sortOrder: 'asc'
    };
    handleFormChange=(e)=> {
        e.preventDefault();
        this.fetchSearch();
    }
    handleInputChange=(e) => {
        e.preventDefault();
        this.setState({query: e.target.value})
        
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
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}`)
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
               <select onChange={this.handleDropChange}>
                   <option value='asc'>Ascending</option>
                   <option value='desc'>Descending</option>
               </select>
                <PokeItem array={pokemonArray}/>
            </>
        )
    }
}
