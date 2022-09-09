const defaultState = {
    active: false,
    post: {},
}

export const openModalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "OPEN":
            return { ...state, active: true, post: action.payload }
        case "CHANGE_DATE":
            return { ...state, active: true, post: { ...state.post, date: action.payload } }
        case "CHANGE_DISTANCE":
            return { ...state, active: true, post: { ...state.post, distance: action.payload } }
        case "CLOSE":
            return { ...state, active: false, post: action.payload }
        default: return state
    }
}