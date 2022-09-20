const initialState = {
    addresses: []
}
const CREATE_ROUTE = 'CREATE_ROUTE'
const SORT_ADDRESSES = 'SORT_ADDRESSES'
const DEL_ADDRESS = 'DEL_ADDRESS'

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ROUTE:
            return { ...state, addresses: action.payload }
        case SORT_ADDRESSES:
            return { ...state, addresses: action.payload }
        case DEL_ADDRESS:
            return { ...state, addresses: action.payload }
        default: return state
    }
}

export const getAddresses = () => (dispatch, getState) => {
    fetch("http://127.0.0.1:900/posts")
        .then(response => response.json())
        .then((result) => dispatch(drawRoute(result)))
}
export const setAddress = (newAddress) => (dispatch, getState) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({ ...newAddress, id: Date.now() });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch("http://127.0.0.1:900/posts", requestOptions)
        .then(response => response.json())
        .then(result => dispatch(drawRoute(result)))
}
export const removeAddress = (id) => (dispatch, getState) => {
    let requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };
    fetch(`http://127.0.0.1:900/posts/${id}`, requestOptions)
        .then(response => response.json())
        .then((result) => { dispatch({ type: DEL_ADDRESS, payload: result }) })
}

export const drawRoute = (payload) => ({ type: CREATE_ROUTE, payload })
export const sortRoute = (payload) => ({ type: SORT_ADDRESSES, payload })
