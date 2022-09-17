const initialState = {
    messages: [],
    counter: 0,
    user: null

}
const UPDATE_CHAT = 'UPDATE_CHAT'
const UPDATE_USER = 'UPDATE_USER'
export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CHAT:
            return { ...state, messages: action.payload.messages, counter: action.payload.counter }
        case UPDATE_USER:
            return { ...state, user: action.payload }
        default: return state
    }
}


export const tick = (counter, timerId) => (dispatch) => {
    fetch(`http://127.0.0.1:903/card`)
        .then(response => response.json())
        .then(result => {
            if (result.length > counter) {
                dispatch(getMessages({ counter: result.length, messages: result }))
            }
            timerId.current = setTimeout(dispatch, 1500, tick(counter, timerId))
        })
}

export const sendMessange = (textMessage) =>(dispatch,getState) =>{
    const {chatReducer} = getState()
    const {user} = chatReducer
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        [user.key]: { 'text': textMessage, 'color': user.color, 'userName': user.name }
    });
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    }

    fetch('http://127.0.0.1:903/card', requestOptions)
}

export const getMessages = (payload) => ({ type: UPDATE_CHAT, payload })
export const getUser = (payload) => ({ type: UPDATE_USER, payload })