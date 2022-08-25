import './style.scss'
import React from 'react'
import { useState } from 'react'

const Form = ({ lastPost, renderPosts }) => {
    const [newPost, setNewPost] = useState({ date: '', distance: '' })

    const addNewPost = () => {
        if (!newPost.date || !newPost.distance) {
            return
        } else {
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            let raw = JSON.stringify({ ...newPost, "id": !lastPost? 0 : lastPost.id + 1});

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://127.0.0.1:900/posts", requestOptions)
                .then(response => response.json())
                .then((result) => { renderPosts(result); setNewPost({ date: '', distance: '' }) })
        }

    }
    return (
        <div className='form'>
            <div className='form-item'>
                <div className='form-item__title'>Дата(ДД.ММ.ГГ)</div>
                <input
                    value={newPost.date}
                    type="date"
                    onChange={(e) => { setNewPost({ ...newPost, date: e.target.value }) }}
                />
            </div>
            <div className='form-item'>
                <div className='form-item__title'>Пройдено км</div>
                <input
                    value={newPost.distance}
                    type="number"
                    onChange={(e) => { setNewPost({ ...newPost, distance: e.target.value }) }}
                />
            </div>
            <div className='form-item__btn' onClick={addNewPost}><span>ок</span></div>
        </div>
    )
}
export default Form;