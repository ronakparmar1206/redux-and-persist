
import React, { useEffect, useState } from "react";

const useTimer=()=>{

    const[toggle,settoggle]=useState(false)
    const[seconds,setseconds]=useState(0)
    const[minutes,setminutes]=useState(0)
          
    let interval;        
useEffect(() => {
  
  if(toggle){
   interval= setInterval(() => {
       setseconds((prev)=>prev+1);
       if(seconds===59){
         setminutes((minutes)=>minutes+1)
         setseconds(0)
       }
       }, 1000);
   }

  return () => {
clearInterval(interval)
  }
}, [seconds,minutes,toggle])
const start=()=>{
  settoggle(true)
}
const reset=()=>{
  setminutes(0),setseconds(0),settoggle(false)
}
const clear=()=>{
  clearInterval(interval)
}
return {seconds,minutes,start,reset,toggle,clear}
        
    }
   

export default useTimer;