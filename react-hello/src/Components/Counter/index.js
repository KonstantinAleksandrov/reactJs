import './style.scss'
import {useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(4)


  return (
    <div>
      <button className="btn" onClick={() => setCount(count + 1)}>Click</button>
      <div>{count}</div>
    </div>
  )
}

export default Counter