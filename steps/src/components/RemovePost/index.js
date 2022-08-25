import './style.scss'
import React from 'react'
import Cross from './cross.svg'

const RemovePost = ({ id, renderPosts }) => {

    const remove = () => {
        let requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };
        fetch(`http://127.0.0.1:900/posts/${id}`, requestOptions)
            .then(response => response.json())
            .then((result) => renderPosts(result))
    }

    return (
        <div className='cross' onClick={remove}>
            <img src={Cross} alt='cross' />
        </div>
    )
}
export default RemovePost;
