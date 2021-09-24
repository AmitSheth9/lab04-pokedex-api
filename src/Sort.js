import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        
        return (
            <div>
                <select onChange={this.props.handleSort}>
                    <option value='pokemon'>Pokemon</option>
                    <option value='type'>Type</option>
                    <option value='speed'>Speed</option>
                    <option value='height'>Height</option>

                </select>
            </div>
        )
    }
}
