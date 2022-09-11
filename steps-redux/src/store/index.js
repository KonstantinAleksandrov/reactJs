import { createStore, combineReducers, applyMiddleware } from 'redux';
import postReducer from './postReducer';
import {modalReducer} from './openModalReducer';
import {formReducer} from './addPostReducer';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
/* import {editPostReducer} from './editPostReducer' */
import {closeModalMiddleware} from "./closeModalMiddleware";

const rootReducer = combineReducers({
    postReducer,
    modalReducer,
    formReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk, closeModalMiddleware, logger))