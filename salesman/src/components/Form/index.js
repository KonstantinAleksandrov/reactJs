import { useState } from "react"
import { setAddress } from '../../store/routeReducer'
import { useDispatch } from 'react-redux'
import './style.scss'
const Form = () => {
    const dispatch = useDispatch()
    const [newAddress, setNewAddress] = useState({ cityName: '', longitude: '', latitude: '' })
    return (
        <div className="form">
            <div className="form-title">Добавить адрес</div>
            <div className="form-body">
                <div className="form-sityName">
                    <input
                        type='text'
                        value={newAddress.cityName}
                        onChange={(e) => { setNewAddress({ ...newAddress, cityName: e.target.value }) }}
                    />
                    <span>Название города</span>
                </div>
                <div className="form-longitude">
                    <input
                        type="number"
                        value={newAddress.longitude}
                        onChange={(e) => { setNewAddress({ ...newAddress, longitude: e.target.value }) }}
                    />
                    <span>Долгота</span>
                </div>
                <div className="form-latitude">
                    <input
                        type="number"
                        value={newAddress.latitude}
                        onChange={(e) => { setNewAddress({ ...newAddress, latitude: e.target.value }) }}
                    />
                    <span>Широта</span>
                </div>
                <div className="form-btn" onClick={() => { dispatch(setAddress(newAddress)); setNewAddress({ cityName: '', longitude: '', latitude: '' }) }}>Добавить</div>
            </div>
        </div>
    )
}

export default Form