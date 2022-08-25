import './style.scss'
import React, {useReducer} from 'react'
import { useState } from 'react'

const initialState = { date: '', distance: '' }

const Reducer = (state, action) => {
    const {payload, type} = action

    switch(type) {
        case "SET_DATE":
            return {...state, date: payload}
        case "SET_DISTANCE":
            return {...state, distance: payload}
        case "TRUNCATE":
            return initialState

        default:
            return state
    }
}

const Form = ({ lastPost, renderPosts }) => {
    // const [newPost, setNewPost] = useState(initialState)
    const [state, dispatch] = useReducer(Reducer, initialState)

    const addNewPost = () => {
        if (!state.date || !state.distance) {
            return
        } else {
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            let raw = JSON.stringify({ ...state, "id": !lastPost? 0 : lastPost.id + 1});

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://127.0.0.1:900/posts", requestOptions)
                .then(response => response.json())
                .then((result) => { renderPosts(result); dispatch({type: "TRUNCATE"}) })
        }
    }

    return (
        <div className='form'>
            <div className='form-item'>
                <div className='form-item__title'>Дата(ДД.ММ.ГГ)</div>
                <input
                    value={state.date}
                    type="date"
                    onChange={(e) => { dispatch({ type: "SET_DATE", payload: e.target.value }) }}
                />
            </div>
            <div className='form-item'>
                <div className='form-item__title'>Пройдено км</div>
                <input
                    value={state.distance}
                    type="number"
                    onChange={(e) => { dispatch({ type: "SET_DISTANCE", payload: e.target.value }) }}
                />
            </div>
            <div className='form-item__btn' onClick={addNewPost}><span>ок</span></div>
        </div>
    )
}
export default Form;