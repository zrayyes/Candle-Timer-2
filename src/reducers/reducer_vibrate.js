import C from "../constants";

export default function (state = null, action) {
    switch (action.type) {
        case C.TOGGLE_VIBRATE:
            return action.payload;
        case C.SET_VIBRATE:
            return action.payload;
    }
    return state;
}