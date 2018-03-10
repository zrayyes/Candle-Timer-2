import C from "../constants";

export default function (state = null, action) {
    switch (action.type) {
        case C.ADD_TIMER:
            return action.payload;
        case C.REMOVE_TIMER:
            return action.payload;
    }
    return state;
}