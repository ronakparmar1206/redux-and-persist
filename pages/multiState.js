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
  const check = () => {
    console.log(userAns);
    userAns == rakam[0] + rakam[1] ? setAns("True") : setAns("False");
  };
  useEffect(() => {
    const ls = [generateRandom(1, 10), generateRandom(2, 10)]; // list of list 
    setRakam(ls);
  }, []);

  console.log(rakam);
  return (
    <div style={{ padding: 30 }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ marginRight: "10px" }}>{`${rakam[0]} + ${rakam[1]}`}</h1>

        <input
          type="number"
          onChange={(e) => setUserAns(e.target.value)}
          style={{
            width: "70px",
            height: "50px",
            fontSize: "20px",
            padding: 10,
          }}
        />
      </div>
      <button onClick={check} style={{ fontSize: "20px" }}>
        Check
      </button>
      <h1>{ans}</h1>
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
