import validation from './validation'
import {useEffect, useReducer} from "react";

const initialState = {
  login: '',
  password: '',
  confirmation: '',
  checkbox: false,

  errors: null,
  touched: {}
}

const Reducer = (state, action) => {
  const {type, payload} = action

  switch (type){
    case "SET_LOGIN":
      return Object.assign({}, state, {login: payload})
    case "SET_PASSWORD":
      return Object.assign({}, state, {password: payload})
    case "SET_CONFIRM":
      return Object.assign({}, state, {confirmation: payload})
    case "SET_CHECKBOX":
      return Object.assign({}, state, {checkbox: payload})
    case "THROW_ERRORS":
      return Object.assign({}, state, {errors: payload})
    case "FIELD_WAS_TOUCHED":
      return Object.assign({}, state, {touched: {...state.touched, [payload]: true}})
    default:
      return state
  }
}


export const useForm = () => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  useEffect(() => {
    dispatch({type:"THROW_ERRORS", payload: validation(state)})
  }, [state.login, state.password, state.confirmation, state.checkbox])

  return [state, dispatch]
}