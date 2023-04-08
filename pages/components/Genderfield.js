import { Box, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import { useField } from 'formik'
import React, { useState } from 'react'

const Genderfield = ({...props}) => {
  
    const[field,meta]=useField(props)
    // console.log(field ,meta)
  return (
    <Box
    sx={{
      display: "flex",
      alignItems: "center",
      border: "1px solid lightgray",
      height: "40px",
      borderRadius: "3px",
      justifyContent: "space-between",
    }}
  >
    <label htmlfor={props.value}  style={{ fontSize: "14px", paddingLeft: "8px" }}>
      {props.value}
    <input {...field} type="radio" value={props.value}/>
    </label>


  </Box>
  )
}

export default Genderfield