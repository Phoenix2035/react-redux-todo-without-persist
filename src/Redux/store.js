import {applyMiddleware, createStore} from "redux"
import logger from "redux-logger"
import rootReducers from "./rootReducers";


const middlewares = [logger]

export default createStore(
    rootReducers,
    applyMiddleware(...middlewares)
)