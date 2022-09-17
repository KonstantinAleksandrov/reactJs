import './style.scss'
import { useDispatch, useSelector } from 'react-redux'
import {lastIdSelector, onSetNewPost} from "../../store/postReducer";

const Form = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.formReducer)
    const lastPostId = useSelector(lastIdSelector)

    const addNewPost = () => {
        dispatch(onSetNewPost(lastPostId))
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