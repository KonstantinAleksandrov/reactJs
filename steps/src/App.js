import './common.scss'
import React from 'react';
import RenderPosts from './components/RenderPosts';
import { useState, useEffect } from 'react'
import Form from './components/Form';
import Modal from './components/Modal';

function App() {
  const [posts, setPosts] = useState([])
  const [openModal,setOpenModal] = useState({active : false,id:''})

  useEffect(() => {
    fetch("http://127.0.0.1:900/posts")
      .then(response => response.json())
      .then(result => {
        setPosts([...result])
      })
  }, [])

  return (
    <div className="App">
      <Form lastPost={posts[posts.length - 1]} renderPosts={setPosts}/>
      <RenderPosts posts={posts} renderPosts={setPosts} openModal={setOpenModal}/>
      {openModal.active && <Modal editPost={posts.find((item)=>item.id ===openModal.id)} openModal={setOpenModal}></Modal>}
    </div>
  );
}

export default App;
