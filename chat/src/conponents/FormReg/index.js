import { createUser } from '../../store/FormReducer'
import React, { useMemo } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { startForm, getFormData, getTouchesData } from '../../store/FormReducer'
import './style.scss'
const FormReg = ({ setIsOpen }) => {

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const dispatch = useDispatch()
    const formReducer = useSelector((state) => state.formReducer)
    const { errors, touches } = formReducer
    const navigate = useNavigate()
    const validation = useMemo(() => {
        return (values) => {
            const errors = {}
            !values.login ? errors.login = "Поле обязательно для заполнения" : errors.login = ''
            !values.password ? errors.password = "Поле обязательно для заполнения" : errors.password = ''
            if (values.confirmation && values.confirmation !== values.password) {
                errors.confirmation = 'Значения не совпадают'
            } else if (!values.confirmation) {
                errors.confirmation = "Поле обязательно для заполнения"
            } else { errors.confirmation = '' }
            return errors
        }
    })
    useEffect(() => {
        dispatch(startForm({ form: { login: '', password: '', confirmation: '' }, validation: validation, }))
    }, [])

    return (
        <div className="form-reg" onClick={(e) => e.stopPropagation()}>
            <div className='form-reg__container'>
                <div className='item'>
                    <input
                        type='text'
                        name="login"
                        onChange={(e) => {
                            dispatch(getFormData({ field: 'login', value: e.target.value }))
                        }}
                        onBlur={(e) => {
                            dispatch(getTouchesData('login'))
                        }}
                    />
                    Логин
                    {errors?.login && touches?.login && <span className="erroStyle">{errors?.login}</span>}
                </div>

                <div className='item'>
                    <input
                        type='password'
                        name="password"
                        onChange={(e) => {
                            dispatch(getFormData({ field: 'password', value: e.target.value }))
                        }}
                        onBlur={(e) => {
                            dispatch(getTouchesData('password'))
                        }}
                    />
                    Пароль
                    {errors?.password && touches?.password && <span className="erroStyle">{errors?.password}</span>}
                </div>
                <div className='item'>
                    <input
                        type='password'
                        name="confirmation"
                        onChange={(e) => {
                            dispatch(getFormData({ field: 'confirmation', value: e.target.value }))
                        }}
                        onBlur={(e) => {
                            dispatch(getTouchesData('confirmation'))
                        }}
                    />
                    Повторите пароль
                    {errors?.confirmation && touches?.confirmation && <span className="erroStyle">{errors?.confirmation}</span>}
                </div>
                <div className="btn" onClick={(() => dispatch(createUser(getRandomColor, navigate, setIsOpen)))}>Регистрация</div>
            </div>
        </div>
    )
}
export default FormReg