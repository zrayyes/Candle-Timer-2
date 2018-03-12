import C from "../constants";

export default function (state = null, action) {
    switch (action.type) {
        case C.TOGGLE_SOUND:
            return action.payload;
        case C.SET_SOUND:
            return action.payload;
        default:
            return state;
    }
}