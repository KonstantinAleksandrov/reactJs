import React from "react";
import classes from './MyInput.module.css'

const MyInput = React.forwardRef((props,ref) =>{
    return(
        <input  ref={ref} className={classes.myIn} {...props}></input>
    )
})
export default MyInput;