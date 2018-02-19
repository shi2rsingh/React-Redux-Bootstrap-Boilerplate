import {
    INCREMENT,
    DECREMENT
} from "../actions";

const initialState = {
    count: 0
}

export default function (state, action) {
    console.log("Inside Reducer");

    if (typeof state === 'undefined') {
        console.log("Inside initial Reducer");
        return initialState
    }
    switch (action.type) {
        case INCREMENT:
            {
                console.log("Inside + Reducer");
                return Object.assign({}, state, {
                    count: state.count + 1
                });
            }
        case DECREMENT:
            {
                console.log("Inside - Reducer");
                return { ...state,
                    count: state.count - 1
                }
            }
        default:
            return state
    }
    //return state;
}

/* function counterApp(state = initialState, action) {
    // For now, don't handle any actions
    // and just return the state given to us.
    return state
  } */