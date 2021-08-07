import React, { Component } from 'react'
    const style = {
        color:"orange",
        fontSize:"30px",
        textAlign:"left",
    }
export default class PropsLearn extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render() {
        return (
            <div>
                <p>this component get props and this props is : <span style={{color:"lightgreen"}}>{this.props.name}</span></p>
                <span style={style}>{this.props.children}</span>
            </div>
        )
    }
}
