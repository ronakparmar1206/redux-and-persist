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
  const [rakam, setRakam] = useState([]);
  const [ans, setAns] = useState("");
let i=0;



  const check = () => {
console.log(userAns[0])
 setAns(rakam.map((e,i)=>e[0]+e[1]==userAns[i]?true:false))
   
 console.log(ans)

  };
  console.log(ans,"answer")
// generateRandom()
  useEffect(() => {
 // list of list 
 let array=[]
  for( i=0 ; i<10 ;i++){
   let arr1=generateRandom(i,10)
   let arr2=generateRandom(i*1,10)
   array.push([arr1,arr2])
  
 
  
 }
 setRakam(array)
console.log(rakam,"swaggy")
  
  
  }, []);

  console.log(rakam);
  return (
    <div style={{ padding: 30 }}>
   {
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
   }
      <button onClick={check} style={{ fontSize: "20px" }}>
        Check
      </button>
      
    </div>
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
