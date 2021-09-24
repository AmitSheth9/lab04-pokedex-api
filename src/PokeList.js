import React, { Component } from 'react'
import request from 'superagent'
import PokeItem from './PokeItem.js'
import Loader from 'react-loader-spinner';

export default class PokeList extends Component {
   
    state = {
        query: '',
        pokeArray: [],
        sortOrder: 'asc',
        isLoad: false,
    };


   
    handleFormChange=async(e)=> {
        e.preventDefault();
        await this.fetchSearch();
    }
    handleInputChange=async(e) => {
        e.preventDefault();
        this.setState({query: e.target.value})
        
    }
    handleDropChange=(e)=> {
    this.setState({sortOrder: e.target.value})
    
    }
    componentDidMount = async () => {
        this.fetchSearch();
    }
    fetchSearch = async() => {
        this.setState ({isLoad: true});
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=100&pokemon=${this.state.query}&sort=pokemon&direction=${this.state.sortOrder}`)
        this.setState({pokeArray: response.body.results, isLoad: false
       })
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
               { this.state.isLoad 
               ?<h1>Loading</h1> 
               : <PokeItem array={pokemonArray}/>}
            </>
        )
    }
}
