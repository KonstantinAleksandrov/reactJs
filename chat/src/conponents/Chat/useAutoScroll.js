import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

export const useAutoScroll = (cb) => {
  const chatReducer = useSelector((state) => state.chatReducer)
  const dispatch = useDispatch()
  const { counter } = chatReducer
  const timerId = useRef(null)
  const ul = useRef()

  useEffect(() => {
    if (timerId.current) {
      clearTimeout(timerId.current)
      ul.current.scrollTop = ul.current?.scrollHeight - ul.current?.offsetHeight
    } // scrollIntoView
    setTimeout(dispatch, 1500, cb(counter, timerId))
  }, [counter])

  return [ul]
}