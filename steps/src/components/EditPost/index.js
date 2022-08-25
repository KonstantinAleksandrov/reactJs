import './style.scss'
import pencil from './pencil.svg'
import React from 'react'

const EditPost = ({id,renderPosts})=>{
    return(
        <div className='pencil' onClick={()=>console.log(id)}>
            <img src={pencil} alt='pencil'/>
        </div>
    )
}
export default EditPost;