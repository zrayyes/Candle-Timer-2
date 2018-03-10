import C from "../constants";

export function addTimer(timer) {
    return {
        type: C.ADD_TIMER,
        payload: timer
    }
}

export function removeTimer(timer) {
    return {
        type: C.REMOVE_TIMER,
        payload: timer
    }
}