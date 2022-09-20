import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAddresses } from '../../store/routeReducer'
import Address from '../Address';
import './style.scss'
const Route = () => {
    const dispatch = useDispatch()
    const addresses = useSelector((state) => state.routeReducer.addresses)
    useEffect(() => {
        dispatch(getAddresses())
    }, [])
    return (
        <div className='route'>
            {
                addresses.length
                    ? <div className='addresses'>
                        <div className='address-title'>Оптимальный маршрут</div>
                        <div className='addresses-body'>
                            {addresses.map((address) => {
                                return (
                                    <Address key={address.id} cityName={address.cityName} id={address.id} />
                                )
                            })}
                        </div>
                    </div>
                    : <div >Добавте адрес</div>
            }
        </div>
    )
}
export default Route