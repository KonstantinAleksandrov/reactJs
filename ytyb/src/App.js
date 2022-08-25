import './common.scss'
import {useState} from 'react';
import PostList from './components/postList';
import Form from './components/Form';



function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', text: 'discription' },
    { id: 2, title: 'Python', text: 'discription' },
    { id: 3, title: 'Php', text: 'discription' },
  ])
 
  const craeteNewPost = (newPost)=>{
    setPosts([...posts,newPost])
  }

  const removePost = (post) =>{
    setPosts(posts.filter((item)=>item.id !== post.id))
  }
 

  return (
    <div className="App">
      <Form create={craeteNewPost}/>
      <PostList posts={posts} title={'Список постов 1'} remove={removePost} />
    </div>
  );
}

export default App;
