import React from "react";
import { useState } from "react";
import MyButton from "../UI/Button/Mybutton";
import MyInput from "../UI/Input/MyInput";

const Form = ({create}) => {
    const [post,setPost] = useState({title:'',text:''})
    const addNewPost = () => {
        const newPost ={
            ...post,id:Date.now()
        }
        create(newPost)
        setPost({title:'',text:''})
      }

    return (
        <div className='form'>
            <MyInput
                value={post.title}
                type='text'
                placeholder='Название поста'
                onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
            <MyInput
                type='text'
                placeholder='Текст поста'
                value={post.text}
                onChange={(e) => setPost({ ...post, text: e.target.value })}
            />
            <MyButton onClick={addNewPost} > Создать пост</MyButton>
        </div>
    )
}
export default Form;