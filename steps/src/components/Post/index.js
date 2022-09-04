import './style.scss'
import React from 'react'
import RemovePost from '../RemovePost'
import EditPost from '../EditPost'

const Post = (props) =>{
    const {date,distance,id,renderPosts,openModal} = props
    return(
        <tr className='post'>
            <td className='post__date'>{date}</td>
            <td className='post__distance'>{distance}</td>
            <td className='post__blockControl blockControl'>
                <EditPost id={id} renderPosts={renderPosts} openModal={openModal}/>
                <RemovePost id={id} renderPosts={renderPosts}/>
            </td>
        </tr>
    )
}
export default Post;