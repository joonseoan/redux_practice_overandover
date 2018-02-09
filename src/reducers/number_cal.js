import defaultNumber from './default_number';

//console.log(defaultNumber, "ddddd")

//console.log(defaultNumber + "    ppppppppppp")

const initialNumber = defaultNumber();

//console.log(initialNumber + "   gggggggggggggg");

export default (state = initialNumber, action) => {
    
     //console.log(action.type, "number_cal reducer")

    // console.log(state.defaultNumber, "      ddddddddddddddddddddddddddddd")
     
        

    switch (action.type) { 
      // console.log(action.type, "number_cal reducer")
        case 'INCREASE_ONE':
       // console.log(action.payload, "      uuuuuuuuuuuuuuuuuuuuu")
       // console.log(  "      wwwwwwwwwwwww")
        return ( { ...state, number : state.number + 1 })
       
        
       // console.log(state);
        case 'DECREASE_ONE':
        return ( { ...state, number : state.number - 1 })
           // {...state, number : state.number - 1}
        

        case 'INCREASE_TWO':
        return ( { ...state, number : state.number + 2 })
           // {...state, number : state.number + 2}

        

        case 'DECREASE_TWO':
        return ( { ...state, number : state.number - 2 })
//            {...state, number : state.number - 2}

    }

   //console.log(defaultNumber, "please" + state)

    return state; 

} 