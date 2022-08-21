

export default (values) => {
  const errors = {}
  if(!values.login) errors.login = "field login is required"
  if(!values.password) errors.password = "field password is required"
  if(values.password && values.password.length < 5) errors.password = "field password is too short"
  if(!values.confirmation) errors.confirmation = "field confirmation is required"
  if(!values.checkbox) errors.checkbox = "please attend confirm"
  return errors
}