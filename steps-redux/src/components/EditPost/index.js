import './style.scss'
import pencil from './pencil.svg'
import React from 'react'
import { useDispatch,useSelector } from 'react-redux'


const EditPost = ({id})=>{
    const dispatch = useDispatch()
    const posts = useSelector((state)=>state.renderReducer.posts)
    const openModal = ()=>{
    dispatch({type:"OPEN",payload : posts.find((item)=>item.id === id)})
  }
    return(
        <div className='pencil' onClick={()=>openModal()}>
            <img src={pencil} alt='pencil'/>
        </div>
    )
}
export default EditPost;