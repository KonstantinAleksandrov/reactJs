import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import {useDispatch, useSelector} from 'react-redux';
const modalPortal = document.querySelector('#modal')

const Modal = ({children, name}) => {
  const dispatch = useDispatch()
  const open = useSelector((state) => state.modalReducer)

  if(open.active !== name) {
    return ''
  }

  return (
    ReactDOM.createPortal(
      <div className='modalContainer' onClick={() => dispatch({type: "CLOSE"})}>
        <span onClick={e => e.stopPropagation()}>
          {children}
        </span>
      </div>, modalPortal
    )
  )
}

export default Modal