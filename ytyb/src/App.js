import './common.scss'
import { useEffect, useState } from 'react';
import PostList from './components/postList';
import Form from './components/Form';
import Filter from './components/Filter';
import Modal from './components/Modal/idex';
import MyButton from './components/UI/Button/Mybutton';
import { usePosts } from './components/hooks/usePost';



function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [visible, setVisible] = useState(false)
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
  const [loading,setLoading]=useState(true)


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>response.json())
    .then(result=>{
      setTimeout(()=>{
        setPosts(result)
        setLoading(false)
      },1500)
    })
  },[])

  const craeteNewPost = (newPost) => {
    setPosts([...posts, newPost])
    setVisible(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton onClick={() => setVisible(true)} > Создать пост</MyButton>
      <Modal visible={visible} setVisible={setVisible}><Form create={craeteNewPost} /></Modal>
      <div style={{ margin: '15px 0', height: '2px', backgroundColor: 'black' }}></div>
      <Filter filter={filter} setFilter={setFilter}></Filter>
      {loading? <div style={{textAlign:'center',fontSize:'20px'}}>Идет загрузка....</div> :<PostList posts={sortedAndSearchPosts} title={'Список постов 1'} remove={removePost} />}
    </div>
  );
}

export default App;
