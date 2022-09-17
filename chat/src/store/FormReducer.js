import { nanoid } from 'nanoid'

const initialState = {
  form: {},
  validation: null,
  errors: null,
  touches: {}
}
const INITIAL_FORM = 'INITIAL_FORM'
const TRUNCATE_FORM = 'TRUNCATE_FORM'
const UPDATE_FORM = 'UPDATE_FORM'
const VALIDATION_ERROR = 'VALIDATION_ERROR'
const BLUR_FORM = 'BLUR_FORM'

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_FORM:
      return { ...state, form: action.payload.form, validation: action.payload.validation, touches: action.payload.form }
    case TRUNCATE_FORM:
      return { ...state, form: {} }
    case UPDATE_FORM:
      return { ...state, form: { ...state.form, [action.payload.field]: action.payload.value } }
    case VALIDATION_ERROR:
      return { ...state, errors: action.payload }
    case BLUR_FORM:
      return { ...state, touches: { ...state.touches, [action.payload]: true } }
    default:
      return state
  }
}

export const onEnter = (setCheckUser, navigate) => (dispatch, getState) => {
  const { formReducer } = getState()
  const form = formReducer.form
  if (form?.login && form?.password) {
    fetch(`http://127.0.0.1:903/catalog`)
      .then(response => response.json())
      .then((result) => {
        for (let key in result) {
          if (key === form.login) {
            if (result[key].password === form.password) {
              setCheckUser(true)
              localStorage.setItem('user', JSON.stringify(result[key]))
              navigate('/chat')
            } else {
              setCheckUser(false)
            }
          } else {
            setCheckUser(false)
          }
        }
      })

  }
}

export const createUser = (getRandomColor, navigate, setIsOpen) => (dispatch, getState) => {
  const { formReducer } = getState()
  const { form, touches, errors } = formReducer
  if (Object.values(errors).filter((item) => item !== '').length) {
    touches.login = true
    touches.password = true
    touches.confirmation = true
    dispatch(getErrors(form))
  } else {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "name": form.login,
      'password': form.password,
      'key': nanoid(),
      'color': getRandomColor(),
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://127.0.0.1:903/catalog`, requestOptions)
      .then(response => response.json())
      .then(result => {
        localStorage.setItem('user', raw)
        navigate('/chat')
        setIsOpen(false)
      })
  }
}


export const startForm = (payload) => ({ type: INITIAL_FORM, payload })
export const delForm = (payload) => ({ type: TRUNCATE_FORM, payload })
export const getErrors = (payload) => ({ type: VALIDATION_ERROR, payload })
export const getFormData = (payload) => ({ type: UPDATE_FORM, payload })
export const getTouchesData = (payload) => ({ type: BLUR_FORM, payload })



