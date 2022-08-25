import Post from "../post";
import './style.scss'

const PostList = (props) => {
    const { posts,title,remove} = props
    return (
        <div className="list">
            <div className="list-title" style={{ textAlign: 'center', fontSize: 25 + 'px', fontWeight: 'bold', marginBottom: 15 + 'px' }}>{title}</div>
            {posts.map((item,index) => {
                return (
                    <Post number={index + 1} post={item} key={item.id}  remove={remove}/>
                )
            })}
        </div>
    )
}
export default PostList;