import { getUser } from "./ChatReducer"
import {UPDATE_CHAT} from './ChatReducer'

export const userMiddleware = ({ dispatch }) => (next) => (action) => {
    next(action)
    // if (action.type === UPDATE_CHAT) {
    //     dispatch(getUser(JSON.parse(localStorage.getItem('user'))))
    // }

}