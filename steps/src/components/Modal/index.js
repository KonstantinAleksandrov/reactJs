import './style.scss';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const modalPortal = document.querySelector('#modal')


const Modal = ({openModal,editPost, setPosts}) => {
    const [postData,setPostData]= useState(editPost)

    const onEditPost = (data) => {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
      };

      fetch("http://127.0.0.1:900/posts", requestOptions)
        .then(response => response.json())
        .then((result) => {
          openModal({active: false, id:''})
          setPosts([...result])
        })
    }

    return (
        ReactDOM.createPortal(
            <div className='modalContainer' onClick={()=>openModal({active: false,id:''})}>
                <div className='form-edit' onClick={(e=>e.stopPropagation())}>
                    <input 
                    type='date'
                    value={postData.date}
                    onChange={(e)=>setPostData({...postData,date:e.target.value})}
                     />
                    <input 
                    type='number'
                    value={postData.distance}
                    onChange={(e)=>setPostData({...postData,distance:e.target.value})}
                    />
                    <div className='button' onClick={()=>onEditPost(postData)}><span>ок</span></div>
                </div>
            </div>, modalPortal
        )
    )
}

export default Modal