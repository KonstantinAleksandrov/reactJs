const defaulState = {
    date: '',
    distance: ''
}

export const addPostRreducer = (state = defaulState, action) => {
    switch (action.type) {
        case "SET_DATE":
            return { ...state, date: action.payload }
        case "SET_DISTANCE":
            return { ...state, distance: action.payload }
        case "TRUNCATE":
            return defaulState
        default: return state
    }
}