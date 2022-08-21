import {useForm} from "./useForm";
import './style.scss'
import FormItem from "./FormItem";

const Form = () => {
  const [state, dispatch] = useForm()

  const handleSendData = (e) => {
    e.preventDefault()
    console.log(state)
  }

  return <form onSubmit={handleSendData}>
    {/*<label>*/}
    {/*  <input*/}
    {/*  type="text"*/}
    {/*  name="login"*/}
    {/*  value={state.login}*/}
    {/*  onBlur={() => dispatch({type: "FIELD_WAS_TOUCHED", payload: 'login'})}*/}
    {/*  onChange={(e) => dispatch({type: "SET_LOGIN",payload: e.target.value})}*/}
    {/*/>*/}
    {/*  {state.errors && state.errors.login && state.touched.login && <span>{state.errors.login}</span>}*/}
    {/*</label>*/}
    <FormItem
      type="text"
      name="login"
      value={state.login}
      onBlur={() => dispatch({type: "FIELD_WAS_TOUCHED", payload: 'login'})}
      onChange={(e) => dispatch({type: "SET_LOGIN",payload: e.target.value})}
      isTouched={state.errors && state.errors.login && state.touched.login}
      error={state.errors && state.errors.login}
    />
    <input
      type="password"
      name="password"
      value={state.password}
      onFocus={() => dispatch({type: "FIELD_WAS_TOUCHED", payload: 'password'})}
      onChange={(e) => dispatch({type: "SET_PASSWORD",payload: e.target.value})}
    />
    <input
      type="password"
      name="confirmation"
      value={state.confirmation}
      onFocus={() => dispatch({type: "FIELD_WAS_TOUCHED", payload: 'confirmation'})}
      onChange={(e) => dispatch({type: "SET_CONFIRM",payload: e.target.value})}
    />
    <input
      type="checkbox"
      name="confirm"
      checked={state.checkbox}
      onFocus={() => dispatch({type: "FIELD_WAS_TOUCHED", payload: 'checkbox'})}
      onChange={(e) => dispatch({type: "SET_CHECKBOX",payload: e.target.checked})}
    />
    <button>Sign up</button>
  </form>
}

export default Form