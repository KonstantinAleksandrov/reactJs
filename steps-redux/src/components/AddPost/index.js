import {useDispatch} from 'react-redux'

const AddPost = () => {
  const dispatch = useDispatch()
  const openModal = () => {
    dispatch({type: "OPEN", payload: 'add-form'})
  }

  return <button onClick={openModal}>Add</button>
}


export default AddPost