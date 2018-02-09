
export const increaseOne = () => {

    console.log("increaseOne")
    return ({

        type : "INCREASE_ONE"
        
    });

}

export const decreaseOne = () => {
console.log("decreaseOne")
    return ({

        type : "DECREASE_ONE"
        

    });

}

export const increaseTwo = () => {
console.log("increaseTWO")
    return ({

        type : "INCREASE_TWO"
      

    });

}

export const decreaseTwo = () => {
console.log("DEcreaseTWO")
    return ({

        type : "DECREASE_TWO"
        
    });

}
