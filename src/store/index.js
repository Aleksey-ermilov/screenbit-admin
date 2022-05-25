import {applyMiddleware, compose, createStore,} from "redux";
import {rootReduce} from "./rootReduce";
import thunk from "redux-thunk";

export const store = createStore(rootReduce, compose(
    applyMiddleware(
        thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))