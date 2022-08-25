import './common.scss'
import React from 'react';
import RenderPosts from './components/RenderPosts';
import { useState, useEffect } from 'react'
import Form from './components/Form';

function App() {
  const [posts, setPosts] = useState([])

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
      <RenderPosts posts={posts} renderPosts={setPosts}/>
    </div>
  );
}

export default App;
