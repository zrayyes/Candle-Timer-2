const ADD_TIMER = "ADD_TIMER";
const REMOVE_TIMER = "REMOVE_TIMER";
const SET_VIBRATE = "SET_VIBRATE";
const SET_SOUND = "SET_SOUND";

export function addTimer(timer) {
    return {
        type: ADD_TIMER,
        payload: timer
    }
}

export function removeTimer(timer) {
    return {
        type: REMOVE_TIMER,
        payload: timer
    }
}