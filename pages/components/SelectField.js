import { FormControl, MenuItem, Select } from '@mui/material'
import { useField } from 'formik'
import React, { useState } from 'react'

const SelectField = ({label ,data , ...props}) => {
    // --
    const[select,setselect]=useState("")
    // --
  
    const[field,meta]=useField(props)
    
    // --
    const getValue = (e) => {
        setselect(e.targe.value)
    }
  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
    <Select   
      error={meta.error&&true}
    
      value={select}
      onChange={getValue}
      helperText={meta.error}
      {...field}
    >
    <MenuItem  value="as">{label}</MenuItem>
      {data.map((days) => (
        <MenuItem  value={days}>{days}</MenuItem>
      ))}
    </Select>
   {<p style={{color:"red",fontSize:"10px",fontFamily:"inherit"}}>{meta.error}</p>}
  </FormControl>
  )
}

export default SelectField