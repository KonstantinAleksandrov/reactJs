import {useState, useMemo} from "react";


export const useLazy = (count) => {
  const [toggle, setToggle] = useState(1)

  const lazyToggle = useMemo(() => {
    for(let i = 0; i < count;){
      i++
    }

    return toggle
  }, [toggle % 10 === 0])

  return [lazyToggle, setToggle]
}