import React from "react";
import {useState,useEffect} from 'react'
import './style.scss'
import {useNavigate, useParams} from 'react-router-dom'

const FormEnter = () => {
    const [formData, setFormData] = useState({ login: '', password: ''})
    const [formErrors, setFormErrors] = useState({})
    const [formTouches, setFormTouches] = useState({})
    /* const navigate = useNavigate() */

    const validation = (values) => {
        const errors = {}
        !values.login ? errors.login = "Поле обязательно для заполнения" : errors.login = ''
        !values.password ? errors.password = "Поле обязательно для заполнения" : errors.password = ''
        return errors
    }
    useEffect(() => {
        setFormErrors(validation(formData))
    }, [formData])


    const enter = () =>{
        if(formData.login && formData.password){
            fetch(`http://127.0.0.1:903/catalog`)
            .then(response => response.json())
            .then((result)=> {
                console.log(result)
                 /* navigate('/chat') */
            })
              /* .finally(() => navigate('/chat')) */

        }else{
            setFormErrors(validation(formData))
        }
    }
    return (
        <div className="form-enter">
            <div className='form-enter__container'>
                <input
                    type='text'
                    name="login"
                    value={formData.login}
                    onChange={(e)=>{
                        setFormData((prev)=>({...prev,login :e.target.value}))
                    }}
                />
                Логин
                <span className="erroStyle">{formErrors.login}</span>

                <input
                    type='password'
                    name="password"
                    value={formData.password}
                    onChange={(e)=>{
                        setFormData((prev)=>({...prev,password :e.target.value}))
                    }}
                />
                Пароль
                <span className="erroStyle">{formErrors.password}</span>
                <div className="buttons">
                    <div  className="btn" onClick={()=>enter()} >Вход</div>
                    <div className="btn btn-reg" >Регистрация</div>
                </div>
            </div>
        </div>
    )
}
export default FormEnter