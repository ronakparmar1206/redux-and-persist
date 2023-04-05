import React, { useEffect, useState } from "react";

function generateRandom(min = 0, max = 100) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;

  return rand;
}
export default function MultiState() {
  const [userAns, setUserAns] = useState({});
  // const[counter,setCounter]=useState(0)
  const[seconds,setseconds]=useState(0)
  const[toggle,settoggle]=useState(false)
  const[minutes,setminutes]=useState(0)
  const [rakam, setRakam] = useState([]);
  const [ans, setAns] = useState("");
let i=0;
let interval;


  const check = () => {
console.log(userAns[0])
 let newState=rakam.map((e,i)=>e[0]+e[1]==userAns[i]?true:false)
 console.log(newState,">><<")
 setAns(()=>(rakam.map((e,i)=>e[0]+e[1]==userAns[i]?true:false)))
  // ans.map((e)=>console.log(e[i]))
  // console.log(newState,"?>>?")
console.log(newState.includes(false))
  !newState.includes(false)?clearInterval(interval):""


  };
  // console.log(ans,"answer")
// generateRandom()
  useEffect(() => {
 // list of list 
 let array=[]
  for( i=0 ; i<3 ;i++){
   let arr1=generateRandom(i,10)
   let arr2=generateRandom(i*1,10)
   array.push([arr1,arr2])
  
 
  
 }
 setRakam(array)
console.log(rakam,"swaggy")
  
  
  }, []);
  useEffect(() => {
    if(toggle){
      interval = setInterval(() => {
        setseconds((prev)=>prev+1);
        if(seconds===59){
          setminutes(minutes+1)
          setseconds(0)
        }
        }, 1000);
    }
   

    return () => {
      clearInterval(interval);
    };
  },[seconds,minutes,toggle]);

  // console.log(rakam);
  return (<>

    <h1>{minutes}:{seconds}</h1>
    <button onClick={()=>settoggle(true)}>Start</button>
    <button onClick={()=>{setminutes(0),setseconds(0),settoggle(false)}}>Reset</button>
    <div style={{ padding: 30 }}>
   {
    toggle&&
    rakam.map((e,i)=>{
      return(


      <div key={e.id} style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ marginRight: "10px" }}>{`${e[0]} + ${e[1]}`}</h1>
{/*  */}
        <input
          type="text"
          onChange={(e) =>setUserAns((prev)=>({...prev,[i]:e.target.value}))}
          style={{
            width: "70px",
            height: "50px",
            fontSize: "20px",
            padding: 10,
            background:`${ans[i]==true?'green':'red'}`
          }}
        />
        {
          ans!="" &&   <h1>{`${ans[i]}`}</h1>
        }
     
      </div>
      
            
      )
    })

   }{
    toggle&& <button onClick={check} style={{ fontSize: "20px" }}>
        Check
      </button>
   }
  
   
      
    </div>
  </>
  );
}

// kids maths game

// 10 - 8 [ ]
// check
// green or red

// multiple rakam
// const rakam = [[1,10], [2,10]]
// userAns = [12, 19]
// check index wise checking
