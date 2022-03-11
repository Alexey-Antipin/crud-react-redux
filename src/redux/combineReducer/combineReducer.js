import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';
import { Namereducer } from "../reducer/reducer";

const rootReducer = combineReducers({
    rep: Namereducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))