import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import EditForm from '../EditForm'
import {useDispatch, useSelector} from 'react-redux';
const modalPortal = document.querySelector('#modal')

const Modal = () => {
  const dispatch = useDispatch()
  const open = useSelector((state) => state.modalReducer)

  if(!open.active) {
    return ''
  }

  return (
    ReactDOM.createPortal(
      <div className='modalContainer' onClick={() => dispatch({type: "CLOSE", payload: {}})}>
        <EditForm/>
      </div>, modalPortal
    )
  )
}

export default Modal