import React from 'react'
import imgUpdate from '../UpdateNotes/icon/update.png'
import './style.scss'
const UpdateNotes = (props) =>{

    const update = () =>{
        fetch('http://127.0.0.1:902/catalog')
            .then(response => response.json())
            .then((result) => {
                props.setList(Object.values(result))
            })
    }
    return(
        <div className='notes__header'>
            <div className='notes__title'>Notes</div>
            <div className='notes__btn btn' onClick={update}>
                <div className='btn__update'>
                    <img src={imgUpdate} alt='updateImg'></img>
                </div>
            </div>
        </div>
    )
}
export default UpdateNotes