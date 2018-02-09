import React, { Component } from 'react';
//import CalRendering from '../containers/cal_rendering';

export default class Button extends Component {

    constructor (props) {

        super (props)

    }

    render () {

        return (

            
             
            <div>
            
                <button onClick = {this.props.plusOne} >+1</button>
                <button onClick = {this.props.minusOne} >-1</button>
                <button onClick = {this.props.plusTwo} >25+2</button>
                <button onClick = {this.props.minusTwo}>25-2</button>
            
            </div>

             
            
                

            

        );

    }

}