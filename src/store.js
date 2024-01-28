import { legacy_createStore, applyMiddleware, compose } from "redux";
import {slotReducers} from "./reducers/selectTimeSlotReducer";
import { thunk } from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
    slotReducers,
    composeEnhancers(applyMiddleware(thunk))
)

export default store;