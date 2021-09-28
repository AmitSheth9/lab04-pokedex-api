import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                Welcome to the pokedex

                <li>
                    <NavLink activeStyle={{color: 'red'}}to='/'>Home Page</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{color: 'red'}}to='/pokemon'>Search Page</NavLink>
                </li>
                <li>
                    <NavLink to='/pokemon/'>Details Page</NavLink>
                </li>
            </div>
        )
    }
}
