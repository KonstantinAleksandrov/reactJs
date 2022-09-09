import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

const modalPortal = document.querySelector('#modal')


const Modal = () => {
    const dispatch = useDispatch()
    const post = useSelector((state) => state.openModalReducer.post)

    const changeDate = (value) => {
        dispatch({ type: 'CHANGE_DATE', payload: value })
    }
    const changeDistance = (value) => {
        dispatch({ type: 'CHANGE_DISTANCE', payload: value })
    }

    const onEditPost = () => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
  
        let requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: JSON.stringify(post),
          redirect: 'follow'
        };
  
        fetch("http://127.0.0.1:900/posts", requestOptions)
          .then(response => response.json())
          .then((result) => {
            dispatch({type:'RENDER_POSTS',payload : result})
            dispatch({ type: "CLOSE", payload: {} })
          })
      }
    return (
        ReactDOM.createPortal(
            <div className='modalContainer' onClick={() => dispatch({ type: "CLOSE", payload: {} })}>
                <div className='form-edit' onClick={(e => e.stopPropagation())}>
                    <input
                        type='date'
                        value={post.date}
                        onChange={(e) => changeDate(e.target.value)}
                    />
                    <input
                        type='number'
                        value={post.distance}
                        onChange={(e) => changeDistance(e.target.value)}
                    />
                    <div className='button' onClick={() => {
                        onEditPost()
                    }}
                    ><span>ок</span></div>
                </div>
            </div>, modalPortal
        )
    )
}

export default Modal