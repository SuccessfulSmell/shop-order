import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import reduxLogger from "redux-logger"

const configureStore = (reducers = {}, preloadedState = {}, middleware = []) => createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
        applyMiddleware(
            ...middleware, thunk, reduxLogger
        )
    ))

export default configureStore