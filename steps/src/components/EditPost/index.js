import './style.scss'
import pencil from './pencil.svg'
import React from 'react'

const EditPost = ({id,renderPosts,openModal})=>{
  
    return(
        <div className='pencil' onClick={()=>openModal({active : true,id : id})}>
            <img src={pencil} alt='pencil'/>
        </div>
    )
}
export default EditPost;