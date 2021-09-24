import React, { Component } from 'react'
import PokeItem from './PokeItem'
export default class PokeList extends Component {
    render() {
        return (
            <div>
                {this.props.array.map(item =>
                  { return <PokeItem key={item.id} {...item}/>}
                )}
            </div>
        )
    }
}
