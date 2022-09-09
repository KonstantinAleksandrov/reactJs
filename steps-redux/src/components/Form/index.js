import './style.scss'
import { useDispatch, useSelector } from 'react-redux'
const Form = ({ lastPostId}) => {
    const dispatch = useDispatch()
    const state = useSelector((state)=>state.addPostRreducer)
    const addNewPost = () => {
        if (!state.date || !state.distance) {
            return
        } else {
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const newId = (lastPostId < 0) ? 0 : lastPostId + 1
            let raw = JSON.stringify({ ...state, "id": newId});

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://127.0.0.1:900/posts", requestOptions)
                .then(response => response.json())
                .then((result) => { 
                    dispatch({type: "TRUNCATE"})
                    dispatch({type:'RENDER_POSTS',payload : result})
                })
        }
    }

    return (
        <div className='form'>
            <div className='form-item'>
                <div className='form-item__title'>Дата(ДД.ММ.ГГ)</div>
                <input
                    value={state.date}
                    type="date"
                    onChange={(e) => { dispatch({ type: "SET_DATE", payload: e.target.value }) }}
                />
            </div>
            <div className='form-item'>
                <div className='form-item__title'>Пройдено км</div>
                <input
                    value={state.distance}
                    type="number"
                    onChange={(e) => { dispatch({ type: "SET_DISTANCE", payload: e.target.value }) }}
                />
            </div>
            <div className='form-item__btn' onClick={addNewPost}><span>ок</span></div>
        </div>
    )
}
export default Form;