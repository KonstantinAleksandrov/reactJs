import { createStore, combineReducers, applyMiddleware } from 'redux'
import { sortAddressMiddleware } from '../store/sortAddressMiddleware'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import routeReducer from './routeReducer'
const rootReducer = combineReducers({
    routeReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk, sortAddressMiddleware, logger))