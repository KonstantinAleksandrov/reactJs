import './style.scss'
import {useState, useEffect} from 'react'
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(4)
  console.log("render")

  useEffect(() => {
    console.log("did mount")
    setCount(10)
  }, [])

  useEffect(() => {
    console.log("did update")
  }, [count])

  return (
    <div>
      <Button handleClick={setCount}>Click+</Button>
      <div>{count}</div>
      {count > 10 && <Button handleClick={setCount} modify={-1}>Click-</Button>}
    </div>
  )
}

export default Counter