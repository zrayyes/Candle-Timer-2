import C from "../constants";

export default function (state = null, action) {
    switch (action.type) {
        case C.ADD_TIMER:
            let newState = state;
            newState.push(Number(action.payload));
            return newState;
        case C.REMOVE_TIMER:
            return state;
        default:
            return state;
    }
}