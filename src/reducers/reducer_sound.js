import C from "../constants";

export default function (state = null, action) {
    switch (action.type) {
        case C.TOGGLE_SOUND:
            return state;
        case C.SET_SOUND:
            let newState = state;
            newState.volume = action.payload;
            return newState;
        default:
            return state;
    }
}