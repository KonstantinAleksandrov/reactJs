import './common.scss'
import {useMemo, useState} from 'react';
import PostList from './components/postList';
import Form from './components/Form';
import MySelect from './components/UI/Select/MySelect';
import MyInput from './components/UI/Input/MyInput';



function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'aa', text: 'ww' },
    { id: 2, title: 'bb', text: 'dd' },
    { id: 3, title: 'cc', text: 'aa' },
  ])
  const [selectedSort,setSelectedSort] = useState('')
  const [searchQuery,setSearchQuery] = useState(' ')
 
  const craeteNewPost = (newPost)=>{
    setPosts([...posts,newPost])
  }
  const sortedPosts = useMemo(()=>{
    if(selectedSort){
      return (
        [...posts].sort((a,b)=>{
          if(a[selectedSort] > b[selectedSort]){
            return 1
          }
          if(a[selectedSort] < b[selectedSort]){
            return -1
          }
          if(a[selectedSort] === b[selectedSort]){
            return 0
          }
        })
      )
    }else{
      return posts
    }
  },[selectedSort,posts])
 
  const removePost = (post) =>{
    setPosts(posts.filter((item)=>item.id !== post.id))
  }
 const sortPosts = (sort) =>{
  setSelectedSort(sort)
 }

  return (
    <div className="App">
      <Form create={craeteNewPost}/>
      <div style={{margin:'15px 0',height:'2px',backgroundColor:'black'}}></div>
      <MyInput 
        value={searchQuery}
        placeholder='Поиск...'
        onChange={(e)=>{setSearchQuery(e.target.value)}}
      />
      <MySelect defaultOption='Сортировка' value={selectedSort} options={[{value:'title',name:'По названию'},{value:'text',name:'По описанию'}]} onChange={sortPosts}/>
      <PostList posts={sortedPosts} title={'Список постов 1'} remove={removePost} />
    </div>
  );
}

export default App;
