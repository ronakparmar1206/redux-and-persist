import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  Select,

  Typography,
} from "@mui/material";
import { Form, Formik, useField } from "formik";
import React from "react";
import { object, string, number, date, InferType } from 'yup';
import TextField from "./TextField";
import SelectField from "./SelectField";
import Genderfield from "./Genderfield";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetials_fun } from "../redux/slices.js/SignUpSlice";
const FormPage = () => {

  // ---
   const dispatch = useDispatch()
   const state=useSelector((state)=>state)
  // ---
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const month = ["jan", "feb", "march", "apir", "may", "jun", "july"];
  const year = [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009];

  let validate=object({
    firstName:string().min(5,"Must be 5 character").required('First Name required'),
    lastName:string().min(5,"Must be 5 character").required('Last Name required'),
    password: string()
  .required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  email:string().email().required('Email is required'),
  // day:string().required(),

  // month:string().required(),
  // year:string().required()

  gender:string().required(),
  day: number().required('Day is required').min(1, 'Day must be between 1 and 31').max(31, 'Day must be between 1 and 31'),
  month: string().required('Month is required').min(1, 'Month must be between Jan and December').max(12, 'Month must be between Jan and December'),
  year: number().required('Year is required').min(1900, 'Year must be between 1900 and 2023').max(2023, 'Year must be between 1900 and 2023'),
  })
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "400px",
          boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          padding: "2rem",
        }}
      >
        <Formik
          initialValues={{
            firstName: `${state.signup.firstName}`,
            lastName: "",
             email: "",
            password: "",
         day:"",
         month:"",
         year:"",
         gender :""
          }}
          validationSchema={validate}
          
          onSubmit={values=>{
            
            dispatch(getUserDetials_fun(values))
          }}
        >
          {(formik) => {
          

            return(
            <Form>
              <Grid container rowSpacing={2}>
                <Grid container columnSpacing={1}>
                  <Grid item xs={6}>
                    <TextField
                      placeholder="First Name"
                      variant="outlined"
                      name="firstName"
                    
                  
                      size="small"
                    />
           
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      placeholder="Surname"
                      variant="outlined"
                      size="small"
                      name="lastName"
                     
            
                    />
            
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  {/* <Item>3</Item> */}
                  <TextField
                    fullWidth
                    placeholder="MobileNumber or EmailAddress"
                    variant="outlined"
                    name="email"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* <Item>3</Item> */}
                  <TextField
                    fullWidth
                    placeholder="New password"
                    variant="outlined"
                    size="small"
                    name="password"
                  />
                </Grid>

                <Grid container columnSpacing={2}>
                  <Grid item xs={12}>
                    {/* <Item>4</Item> */}
                    <Typography
                      variant="subtitle2"
                      sx={{ mb: "10px", mt: "10px" }}
                    >
                      Gender
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                
                    <Genderfield value="Male" name="gender" />
                  </Grid>
                  <Grid item xs={4}>
                  <Genderfield value="Female" name="gender"/>
                  
                  </Grid>
                  <Grid item xs={4}>
                  <Genderfield value="Custom" name="gender"/>
                  
                  </Grid>
                </Grid>
                <Grid container columnSpacing={2}>
                  <Grid item xs={12}>
                   
                    <Typography
                      variant="subtitle2"
                      sx={{ mb: "10px", mt: "10px" }}
                    >
                      Date of birth
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                   
                    <SelectField  data={days} name="day" label="day"/>
                  </Grid>
                  <Grid item xs={4}>
                  
                    <SelectField  data={month} name="month"   label="month"/>
                  </Grid>
                  <Grid item xs={4}>
                  
                    <SelectField  data={year} name="year" label="year"/>
                  </Grid>
                </Grid>
               
              </Grid>
              <Button  type="submit" variant="contained" fullWidth sx={{mt:"1rem",background:"green"}}>Submit</Button>
            </Form>
            
          )}}
        </Formik>
      </Box>
    </Box>
  );
};

export default FormPage;
