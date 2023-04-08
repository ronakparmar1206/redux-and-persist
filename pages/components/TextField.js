import { TextField } from '@mui/material'
import { useField } from 'formik'
import React from 'react'

const TextFields = ({...props}) => {
  const[field,meta]=useField(props)

  return (
    <TextField
    // placeholder={placeholder}
  
    size="small"
    {...props}
  {...field}
  error={meta.error&&true}
  helperText={meta.error}
  />
  )
}

export default TextFields