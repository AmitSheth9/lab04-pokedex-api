import React, { Component } from 'react'
import request from 'superagent'
import PokeList from './PokeList'
//import Loader from 'react-loader-spinner';
import Sort from './Sort.js';
export default class SearchPage extends Component {
    state = {
        query: '',
        pokeArray: [],
        sortOrder: 'asc',
        isLoad: false,
        sort: 'pokemon'
    };


   
    handleFormChange=async(e)=> {
        e.preventDefault();
        await this.fetchSearch();
    }
    handleInputChange=async(e) => {
        e.preventDefault();
        this.setState({query: e.target.value})
        
    }
    handleDropChange=async(e)=> {
        e.preventDefault();
        this.setState({sortOrder: e.target.value})
        await this.fetchSearch();
    
    }

    handleSort = async(e) => {
        e.preventDefault();
        this.setState({sort: e.target.value});
        await this.fetchSearch();
    }
    handleReset = async(e) =>{
        e.preventDefault();
        this.setState({sort: 'pokemon',
                query: '',
                sortOrder: 'asc'
    });
        await this.fetchSearch();
    }
    componentDidMount = async () => {
        await this.fetchSearch();
    }
    fetchSearch = async() => {
        this.setState ({isLoad: true});
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=100&pokemon=${this.state.query}&sort=${this.state.sort}&direction=${this.state.sortOrder}`)
        this.setState({pokeArray: response.body.results, isLoad: false
       })
    }
    
    
    
    render() {
        
        console.log(this.state);

        
        return (
            <>
            <div className ='pokeform'>
               <form onSubmit = {this.handleFormChange}>
                   <input onChange={this.handleInputChange}/>
                   <select onChange={this.handleDropChange}>
                        <option value='asc'>Ascending</option>
                        <option value='desc'>Descending</option>
                    </select>
                    <Sort handleSort={this.handleSort}/> 
                
               
                    <button>Submit</button>
               </form>
             
               <button onClick={this.handleReset}>Reset</button>
               </div>
               { this.state.isLoad 
               ?<h1>Loading</h1> 
               : <PokeList array={this.state.pokeArray}/>}
            
            </>
        )
    }
}