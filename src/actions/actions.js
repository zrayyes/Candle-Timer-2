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

export function toggleVibrate(state) {
    return {
        type: C.TOGGLE_VIBRATE,
        payload: state
    }
}

export function setVibrate(duration) {
    return {
        type: C.SET_VIBRATE,
        payload: duration
    }
}

export function toggleSound(state) {
    return {
        type: C.TOGGLE_SOUND,
        payload: state
    }
}

export function setSound(volume) {
    return {
        type: C.SET_SOUND,
        payload: volume
    }
}