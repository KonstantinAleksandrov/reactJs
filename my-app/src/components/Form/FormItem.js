
const FormItem = ({isTouched, error, ...inputProps}) => {
  return <label>
    <input
      {...inputProps}
    />
    {isTouched && <span>{error}</span>}
  </label>
}

export default FormItem