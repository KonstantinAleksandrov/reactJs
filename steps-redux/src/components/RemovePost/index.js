import './style.scss'
import React from 'react'
import Cross from './cross.svg'
import { useDispatch} from "react-redux";

const RemovePost = ({id}) => {
    const dispatch = useDispatch()
    const remove = () => {
        let requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };
        fetch(`http://127.0.0.1:900/posts/${id}`, requestOptions)
            .then(response => response.json())
            .then((result) =>{dispatch({type:'RENDER_POSTS',payload:result})})
    }

    return (
        <div className='cross' onClick={remove}>
            <img src={Cross} alt='cross' />
        </div>
    )
}
export default RemovePost;
