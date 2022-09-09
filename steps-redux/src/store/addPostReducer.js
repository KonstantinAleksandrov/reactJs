const defaultState = {
    date: '',
    distance: ''
}

export const formReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_DATE":
            return { ...state, date: action.payload }
        case "SET_DISTANCE":
            return { ...state, distance: action.payload }
        case "TRUNCATE":
            return defaultState
        default: return state
    }
}