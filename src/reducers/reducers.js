import {combineReducers } from "redux";
import TimersReducer from "./reducer_timers";
import VibrateReducer from "./reducer_vibrate";
import SoundReducer from "./reducer_sound";

export default combineReducers({
    timers: TimersReducer,
    vibrate: VibrateReducer,
    sound: SoundReducer
});