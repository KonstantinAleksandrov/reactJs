
const initialState = {
  form: {},
  validation: null,
  errors: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INITIAL_FORM': // Если у нас форма авторизации, то полями формы будут {login: '', password: ''},
      return {...state, form: action.payload.form, validation: action.payload.validation}
    case 'TRUNCATE_FORM': // вызывать при componentUnmount
      return {...state, form: {}}
    case 'UPDATE_FORM':
      return {...state, form: {[action.payload.field]: action.payload.value}}
    case 'VALIDATION_ERROR':
      return {...state, errors: action.payload}
    default :
      return state
  }
}