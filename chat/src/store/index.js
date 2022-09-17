import {createStore,combineReducers,applyMiddleware} from 'redux'
import {validationMiddleware} from './validationMiddleware'
import { userMiddleware } from './userMiddleware'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import formReducer from './FormReducer'
import chatReducer from './ChatReducer'
const rootReducer = combineReducers({
    formReducer,
    chatReducer,
})
export const store = createStore(rootReducer,applyMiddleware(thunk,validationMiddleware,userMiddleware,logger))