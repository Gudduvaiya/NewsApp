import React, { Component } from 'react'
import XOsX from "./XOsX.gif"
export class Loading extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={XOsX} alt="Loading..." srcset="" style={{height: "350px"}}/>
            </div>
        )
    }
}

export default Loading
