import {useState, useEffect} from "react";
import './style.scss'

const validation = (values) => {
  const errors = {}
  if(!values.login) errors.login = "field login is required"
  if(!values.password) errors.password = "field password is required"
  if(values.password && values.password.length < 5) errors.password = "field password is too short"
  if(!values.confirmation) errors.confirmation = "field confirmation is required"
  if(!values.checkbox) errors.checkbox = "please attend confirm"
  return errors
}

const Form = () => {
  // const [login, setLogin] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmation, setConfirmation] = useState('')
  // const [checkbox, setCheckbox] = useState(false)

  const [formData, seFormData] = useState({login: '', password: '', confirmation: '', checkbox: false})
  const [formErrors, seFormErrors] = useState({})
  const [touched, setTouched] = useState({})

  const handleSendData = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  useEffect(() => {
    seFormErrors(validation(formData))
  }, [formData])

  return <form onSubmit={handleSendData}>
    <label>
      <input
      type="text"
      name="login"
      value={formData.login}
      onBlur={() => setTouched((prev) => ({...prev, login: true}))}
      onChange={(e) => seFormData(prev => ({...prev, login: e.target.value}))}
    />
      {formErrors.login && touched.login && <span>{formErrors.login}</span>}
    </label>
    <input
      type="password"
      name="password"
      value={formData.password}
      onFocus={() => setTouched((prev) => ({...prev, password: true}))}
      onChange={(e) => seFormData(prev => ({...prev, password: e.target.value}))}
    />
    <input
      type="password"
      name="confirmation"
      value={formData.confirmation}
      onFocus={() => setTouched((prev) => ({...prev, confirmation: true}))}
      onChange={(e) => seFormData(prev => ({...prev, confirmation: e.target.value}))}
    />
    <input
      type="checkbox"
      name="confirm"
      checked={formData.checkbox}
      onFocus={() => setTouched((prev) => ({...prev, checkbox: true}))}
      onChange={(e) => seFormData(prev => ({...prev, checkbox: e.target.checked}))}
    />
    <button>Sign up</button>
  </form>
}

export default Form