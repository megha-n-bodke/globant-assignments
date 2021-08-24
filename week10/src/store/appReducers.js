import {default as reduxSaga} from "./../redux-saga/reducer"
import {combineReducers} from "redux";
import registerReducer from "../registration/registerReducer";

const reducers = combineReducers({
    jobopenings: reduxSaga,
    registration: registerReducer
});

export default reducers;
