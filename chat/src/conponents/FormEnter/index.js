import React from "react";
import { useState, useEffect,useMemo} from 'react'
import './style.scss'
import { useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import {onEnter} from '../../store/FormReducer'
import { startForm ,delForm,getTouchesData,getFormData} from "../../store/FormReducer";

const FormEnter = ({setIsOpen}) => {
    const [checkUser,setCheckUser] = useState(true)

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const formReducer = useSelector((state)=>state.formReducer)
    const {form,errors,touches} = formReducer
    const validation = useMemo(()=>{
        return (values) => {
            const errors = {}
            !values.login ? errors.login = "Поле обязательно для заполнения" : errors.login = ''
            !values.password ? errors.password = "Поле обязательно для заполнения" : errors.password = ''
            return errors
        }
    }) 
    

    useEffect(() => {
        dispatch(startForm({form:{login: '', password: ''},validation:validation}))

        return () => {
            dispatch(delForm())
        }
    }, [])


    return (
        <div className="form-enter">
            <div className='form-enter__container'>
                <div className="item">
                    <input
                        type='text'
                        name="login"
                        value={form?.login}
                        onChange={(e) => {
                           dispatch(getFormData({field:'login',value:e.target.value}))
                        }}
                        onFocus={()=>{
                            setCheckUser(true)
                        }}
                       onBlur={()=>{
                            dispatch(getTouchesData('login'))
                       }}
                    />
                    Логин
                    {errors?.login &&  touches?.login && <span className="erroStyle">{errors.login}</span>}
                </div>

                <div className="item">
                    <input
                        type='password'
                        name="password"
                        value={form?.password}
                        onChange={(e) => {
                            dispatch(getFormData({field:'password',value:e.target.value}))
                        }}
                        onFocus={()=>{
                            setCheckUser(true)
                        }}
                        onBlur={()=>{
                            dispatch(getTouchesData('password'))
                       }}
                    />
                    Пароль
                    {errors?.password && touches?.password && <span className="erroStyle">{errors.password}</span>}
                </div>
                { checkUser || <div className="chekUser">Неверный логин или пароль</div>}
                <div className="buttons">
                    <div className="btn" onClick={() =>dispatch(onEnter(setCheckUser,navigate))} >Вход</div>
                    <div onClick={() => setIsOpen(true)} className="btn btn-reg" >Регистрация</div>
                </div>
            </div>
        </div>
    )
}
export default FormEnter