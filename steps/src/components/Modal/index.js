import './style.scss';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const modalPortal = document.querySelector('#modal')


const Modal = ({openModal,editPost}) => {
    const [postData,setPostData]= useState(editPost)


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
                    <div className='button' onClick={()=>console.log(postData)}><span>ок</span></div>
                </div>
            </div>, modalPortal
        )
    )
}

export default Modal