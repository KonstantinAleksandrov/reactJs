import './style.scss'
import { removeAddress } from '../../store/routeReducer'
import { useDispatch } from 'react-redux'
const Address = ({ cityName, id }) => {
    const dispatch = useDispatch()
    return (
        <div className='address'>
            <span onClick={() => dispatch(removeAddress(id))}>{cityName}</span>
        </div>
    )
}

export default Address