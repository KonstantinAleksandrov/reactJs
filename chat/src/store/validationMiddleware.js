import { getErrors } from './FormReducer'

export const validationMiddleware = ({ dispatch, getState }) => (next) => (action) => {
   next(action)
   if (action.type === 'UPDATE_FORM' || action.type === "BLUR_FORM") {
      const { formReducer } = getState()
      const errors = formReducer.validation(formReducer.form)
      dispatch(getErrors(errors))
   }
}