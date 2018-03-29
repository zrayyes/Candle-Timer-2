import C from "../constants";
import defaultState from "../assets/initialState.json";

export default function (state = null, action) {
    switch (action.type) {
        case C.ADD_TIMER:
            let newState = state;
            newState.push(Number(action.payload));
            return newState.slice(0).sort((a, b) => { return a - b });
        case C.REMOVE_TIMER:
            let newState1 = state.filter(timer => timer !== action.payload);
            return newState1;
        case C.RESET_TIMERS:
            console.log(defaultState);
            return state;
        default:
            return state;
    }
}