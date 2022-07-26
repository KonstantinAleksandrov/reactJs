import {useEffect} from "react";
import ReactDOM from 'react-dom';
import './style.scss'
const modalPortal = document.querySelector('#modal')

const modal = document.createElement('div')

const Modal = ({children, setIsOpen}) => {
  
  useEffect(() => {
    modalPortal.append(modal)

    return () => {
      modal.remove()
    }
  }, [])

  return (
    ReactDOM.createPortal(
      <div className="modal-container" onClick={()=>setIsOpen(false)}>
        {children}
      </div>,
      modal
    )
  )
}


export default Modal