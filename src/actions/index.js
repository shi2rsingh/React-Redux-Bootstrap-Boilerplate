export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const incrementCounter = () => {
    console.log("You clicked on incrementCounter");
    return {
        type: INCREMENT,
        payload: 1 
    }
};

export const decrementCounter = () => {
    console.log("You clicked on decrementCounter");
    return {
        type: DECREMENT
    }
};