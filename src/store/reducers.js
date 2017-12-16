import C from "../constants";
import {combineReducers } from "redux";

export const vibrate = (state=false, action) => {
    return (action.type === C.SET_VIBRATE) ?
    action.payload:
    state
}

export const sound = (state=true, action) => {
    return (action.type === C.SET_SOUND) ?
    action.payload:
    state
}

export const est = (state="00:00:00", action) => {
    return (action.type === C.SET_EST) ?
    action.payload:
    state
}

export const timers = (state=[], action) => {
    switch(action.type) {

        case C.ADD_TIMER:
            return [
                ...state,
                action.payload
            ];
        
        case C.REMOVE_TIMER:
            return state.filter((timer) => { timer !== action.payload})
        
        default:
            return state;
    }
}

export default combineReducers({
    timers,
    est,
    vibrate,
    sound
});