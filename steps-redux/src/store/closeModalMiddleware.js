


export const closeModalMiddleware = ({dispatch, getState}) => (next) => (action) => {

  if(action.type === 'EDIT_POST' || action.type === 'ADD_POST'){
    dispatch({type: "CLOSE"})
  }

  return next(action)
}