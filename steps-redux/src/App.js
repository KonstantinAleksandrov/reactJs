import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import './common.scss'
import RenderPosts from "./components/RenderPosts";
import Modal from "./components/Modal";
import Form from "./components/Form";



function App() {
  const dispatch = useDispatch()
  const posts = useSelector((state)=>state.renderReducer.posts)
  const open = useSelector((state)=>state.openModalReducer)
  useEffect(()=>{
    fetch("http://127.0.0.1:900/posts")
      .then(response => response.json())
      .then(result=>{
        dispatch({type:'RENDER_POSTS',payload : result})
      })
  },[])
  return (
    <div className="App">
      <Form lastPostId={Math.max(...posts.map(post => post.id))}/>
      <RenderPosts posts={posts}/>
      {open.active && <Modal/>}
    </div>
  );
}

export default App;
