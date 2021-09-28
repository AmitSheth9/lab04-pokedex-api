import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                Welcome to the pokedex

                <li>
                    <Link to='/'>Home Page</Link>
                </li>
                <li>
                    <Link to='/pokemon'>Search Page</Link>
                </li>
                <li>
                    <Link to='/pokemon/'>Details Page</Link>
                </li>
            </div>
        )
    }
}
