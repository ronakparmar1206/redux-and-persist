
import React, { useState } from "react";

const useTimer=()=>{

    const[toggle,settoggle]=useState(false)
    const[seconds,setseconds]=useState(0)
    const[minutes,setminutes]=useState(0)
            
    const timer=(interval)=>{

        if(toggle){
            interval = setInterval(() => {
              setseconds((prev)=>prev+1);
              if(seconds===59){
                setminutes(minutes+1)
                setseconds(0)
              }
              }, 1000);
          }
        
    }
    return {timer,seconds,minutes,setminutes,setseconds,toggle,settoggle,interval}
}
export default useTimer;