import { createStore,combineReducers } from 'redux';
import { renderReducer } from './postReducer';
import {openModalReducer} from './openModalReducer';
import {addPostRreducer} from './addPostReducer';
/* import {editPostReducer} from './editPostReducer' */

const rootReducer = combineReducers({
    renderReducer,
    openModalReducer,
    addPostRreducer,
})

export const store = createStore(rootReducer)