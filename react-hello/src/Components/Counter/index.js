import './style.scss'
import {useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(4)


  return (
    <div>
      <button className={"btn"} style={{border: count > 0 ? "3px solid red" : "0"}} onClick={() => setCount(count + 1)}>Click+</button>
      <div>{count}</div>
      <button className='btn' style={{border: count < 0 ? "3px solid blue" : "0"}} onClick={()=>setCount(count - 1)}>Click-</button>
    </div>
  )
}

export default Counter