import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as index from '../actions/index'; 

//import { bindActionCreators } from 'redux';

import Button from '../components/button';



class CalRendering extends Component {

    constructor (props) {

        super(props);


    }

    render () {

        
        return (

            <div>

                <h1>{this.props.number2}</h1>
                {console.log(this.props.number1)}
                <Button                    

                    plusOne = {this.props.incOne}
                    minusOne = {this.props.decOne}
                    plusTwo = {this.props.incTwo}
                    minusTwo = {this.props.decTwo}
                   
                 />
            </div>


        );

    }

}

function mapStateToProps (state) {
    console.log("reducer:mapState", state)
    console.log("checkingup" + state.defaultNumber)
    console.log("checking up again     " + state.defaultNumber.number)
    return({

        number1: state.defaultNumber.number,
        number2: state.calculation.number
       
    });
    
}

function mapDispatchToProps(dispatch) {

    console.log("dispatch")

    return ({
        
     incOne: () => { dispatch(index.increaseOne()) },
     decOne: () => { dispatch(index.decreaseOne()) },
     incTwo: () => { dispatch(index.increaseTwo()) },
     decTwo: () => { dispatch(index.decreaseTwo()) }
    
    });
    
     
        
                  
}

export default connect(mapStateToProps, mapDispatchToProps)(CalRendering);