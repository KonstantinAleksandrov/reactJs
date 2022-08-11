import { nanoid } from 'nanoid'
import React from "react";
import { useState, useEffect, useCallback } from "react";
import './style.scss'

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


const validation = (values) => {
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

const FormReg = () => {
    const [formData, setFormData] = useState({ login: '', password: '', confirmation: '' })
    const [formErrors, setFormErrors] = useState({})

    useEffect(() => {
        setFormErrors(validation(formData))
    }, [formData])

    const createUser = useCallback(() => {
        if (Object.keys(validation(formData)).length) {
            setFormErrors(validation(formData))
        } else {
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            let raw = JSON.stringify({
                "name": formData.login,
                'password': formData.password,
                'key' : nanoid(),
                'color' : getRandomColor(),
            });

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch(`http://127.0.0.1:903/catalog`, requestOptions)
                .then(response => response.json())
                .then(result=>console.log(result))
        }
    }, [formData.login, formData.confirmation, formData.password])

    return (
        <div className="form-reg">
            <div className='form-reg__container'>
            <input
                type='text'
                name="login"
                onChange={(e) => {
                    setFormData((prev) => ({ ...prev, login: e.target.value }))
                }}
            />
            Логин
            <span className="erroStyle">{formErrors.login}</span>

            <input
                type='password'
                name="password"
                onChange={(e) => {
                    setFormData((prev) => ({ ...prev, password: e.target.value }))
                }}
            />
            Пароль
            <span className="erroStyle">{formErrors.password}</span>

            <input
                type='password'
                name="confirmation"
                onChange={(e) => {
                    setFormData((prev) => ({ ...prev, confirmation: e.target.value }))
                }}
            />
            Повторите пароль
            <span className="erroStyle">{formErrors.confirmation}</span>
            <div className="btn" onClick={(() => createUser())}>Регистрация</div>
            </div>
        </div>
    )
}
export default FormReg