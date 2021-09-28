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
        sort: 'pokemon',
        currentPage: 1
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
        //await this.fetchSearch();
    }
    handleSort = (e) => {
        e.preventDefault();
        this.setState({sort: e.target.value});
    }
    handleReset = async(e) =>{
        e.preventDefault();
        this.setState({sort: 'pokemon',
                query: '',
                sortOrder: 'asc'
    });
        await this.fetchSearch();
    }
    handlePrev = async(e) =>{
        await this.setState({currentPage: this.state.currentPage-1})
        await this.fetchSearch()
    }
    handleNext = async(e) => {
        await this.setState({currentPage: this.state.currentPage+1})
        await this.fetchSearch()
    }
    componentDidMount = async () => {
        await this.fetchSearch();
    }
    fetchSearch = async() => {
        this.setState ({isLoad: true});
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=${this.state.sort}&direction=${this.state.sortOrder}&perPage=50&page=${this.state.currentPage}`)
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
               <button onClick={this.handlePrev}>Prev</button>
               <span>Current page: {this.state.currentPage}</span>
               <button onClick={this.handleNext}>Next</button>
               { this.state.isLoad 
               ?<h1>Loading</h1> 
               : <PokeList array={this.state.pokeArray}/>}
            
            </>
        )
    }
}