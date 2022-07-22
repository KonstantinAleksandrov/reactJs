import {useEffect} from "react";

const Button = ({handleClick, modify = 1, children}) => {

  useEffect(() => {
    return () => {
      console.log("will unmount")
    }
  }, [])

  return <button className={"btn"} onClick={() => handleClick(prevState => prevState + modify)}>
    {children}
  </button>
}


export default Button