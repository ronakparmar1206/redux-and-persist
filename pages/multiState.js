import React, { useEffect, useState } from "react";

function generateRandom(min = 0, max = 100) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;

  return rand;
}
export default function MultiState() {
  const [userAns, setUserAns] = useState("");
  const [rakam, setRakam] = useState([]);
  const [ans, setAns] = useState("");
let i=0;
  const check = () => {
    console.log(userAns);
    console.log()
   
 

  };
  
// generateRandom()
  useEffect(() => {
 // list of list 
  for( i=0 ; i<10 ;i++){
   let arr1=generateRandom(i,10)
   let arr2=generateRandom(i*1,10)
    setRakam([...rakam,[arr1,arr2]])
  console.log(i,rakam)
 
  
 }

  
  
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
          type="number"
          onChange={(e) => setUserAns((prev)=>[...prev,e.target.value])}
          style={{
            width: "70px",
            height: "50px",
            fontSize: "20px",
            padding: 10,
          }}
        />
        <h1>{ans}</h1>
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
