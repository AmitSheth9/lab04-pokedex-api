import React, { Component } from 'react'
import PokeItem from './PokeItem'
export default class PokeList extends Component {
    render() {
        return (
            <ul>
                {this.props.array.map(item =>
                  { return <PokeItem key={item.id} {...item}/>}
                )}
            </ul>
        )
    }
}
