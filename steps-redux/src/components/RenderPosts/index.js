import './style.scss'
import React, {useEffect} from 'react'
import Post from '../Post'
import {useDispatch, useSelector} from "react-redux";
import {sortedPostsSelector, onGetPosts} from "../../store/postReducer";

const RenderPosts = () => {
  const dispatch = useDispatch()
  const posts = useSelector(sortedPostsSelector)

  useEffect(()=>{
    dispatch(onGetPosts(2))
  },[])
    
    return (
        <table className='posts'>
            <thead>
            <tr className='posts__title'>
                <th className='posts__title-date'>Дата(ДД.ММ.ГГ)</th>
                <th className='posts__title-distance'>Пройдено км</th>
                <th className='posts__title-actions'>Действия</th>
            </tr>
            </thead>
            <tbody className='posts__body'>
                {posts.map((item) => {
                    return(
                        <Post date={item.date} distance={item.distance} key={item.id} id={item.id} />
                    )
                })}
            </tbody>
        </table>
    )
}
export default RenderPosts;