import React from "react";
import { useState, useEffect } from 'react'
import './style.scss'
import { useNavigate, Link } from 'react-router-dom'
import Modal from "../Modal";
import FormReg from "../FormReg";

const validation = (values) => {
    const errors = {}
    !values.login ? errors.login = "Поле обязательно для заполнения" : errors.login = ''
    !values.password ? errors.password = "Поле обязательно для заполнения" : errors.password = ''
    return errors
}

const FormEnter = () => {
    const [formData, setFormData] = useState({ login: '', password: '' })
    const [formErrors, setFormErrors] = useState({})
    const [formTouches, setFormTouches] = useState({})
    const [checkUser,setCheckUser] = useState(true)

    const [isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate()

    const validation = (values) => { // useMemo
        const errors = {}
        !values.login ? errors.login = "Поле обязательно для заполнения" : errors.login = ''
        !values.password ? errors.password = "Поле обязательно для заполнения" : errors.password = ''
        return errors
    }


    useEffect(() => {
        setFormErrors(validation(formData))
    }, [formData])

    useEffect(() => {
        // INITIAL_FORM

        return () => {
            // TRUNCATE_FORM
        }
    }, [])


    const enter = () => {
        if (formData.login && formData.password) {
            fetch(`http://127.0.0.1:903/catalog`)
                .then(response => response.json())
                .then((result) => {
                    for (let key in result){
                        if(key === formData.login){
                            if(result[key].password === formData.password){
                                setCheckUser(true)
                                localStorage.setItem('user',JSON.stringify(result[key]))
                                navigate('/chat')
                            }else{
                                setCheckUser(false) 
                            }
                        }else{
                            setCheckUser(false)
                        }
                    }
                })

        } else {
            formTouches.login = true
            formTouches.password = true
            setFormErrors(validation(formData))
        }
    }
    return (
        <div className="form-enter">
            <div className='form-enter__container'>
                <div className="item">
                    <input
                        type='text'
                        name="login"
                        value={formData.login}
                        onChange={(e) => {
                            setFormData((prev) => ({ ...prev, login: e.target.value }))
                        }}
                        onBlur={(e) => {
                            setFormTouches((prev) => ({ ...prev, login: true }))
                        }}
                        onFocus={()=>setCheckUser(true)}
                    />
                    Логин
                    {formErrors.login && formTouches.login && <span className="erroStyle">{formErrors.login}</span>}
                </div>

                <div className="item">
                    <input
                        type='password'
                        name="password"
                        value={formData.password}
                        onChange={(e) => {
                            setFormData((prev) => ({ ...prev, password: e.target.value }))

                        }}
                        onBlur={(e) => {
                            setFormTouches((prev) => ({ ...prev, password: true }))
                        }}
                        onFocus={()=>setCheckUser(true)}
                    />
                    Пароль
                    {formErrors.password && formTouches.password && <span className="erroStyle">{formErrors.password}</span>}
                </div>
                { checkUser || <div className="chekUser">Неверный логин или пароль</div>}
                <div className="buttons">
                    <div className="btn" onClick={() => enter()} >Вход</div>
                    {/*<Link to="/sign-up"><div className="btn btn-reg" >Регистрация</div></Link>*/}
                    <div onClick={() => setIsOpen(true)} className="btn btn-reg" >Регистрация</div>
                </div>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen}><FormReg/></Modal>}
        </div>
    )
}
export default FormEnter