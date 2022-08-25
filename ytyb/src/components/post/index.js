import React from "react";
import './style.scss'
import MyButton from "../UI/Button/Mybutton";


const Post = (props) => {
    return (
        <div className="post">
            <div className="post-container">
                <div className="post-title">{props.number}. {props.post.title}</div>
                <div className="post-text">{props.post.text}</div>
            </div>
            <MyButton onClick={()=>props.remove(props.post)}>Удалить</MyButton>
        </div>
    )
}
export default Post