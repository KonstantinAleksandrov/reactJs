import { getUser } from "./ChatReducer"
export const userMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    next(action)
    if (action.type === 'UPDATE_CHAT') {
        dispatch(getUser(JSON.parse(localStorage.getItem('user'))))
    }
}