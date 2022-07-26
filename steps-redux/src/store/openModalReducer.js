const defaultState = {
    active: false,
}

export const modalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "OPEN":
            return { ...state, active: action.payload }
        case "CLOSE":
            return { ...state, active: false }
        default: return state
    }
}