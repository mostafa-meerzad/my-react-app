// import { useQuery } from "@tanstack/react-query";
// import React from "react";

// function BasicsQC() {
//   const { data, error, isLoading } = useQuery(["test"], () => {
//     return fetch("https://catfact.ninja/fact").then((res) => res.json());
//   });
//   console.log(isLoading);
//   console.log(error);
//   console.log(data);
//   if (isLoading) {
//     return <div>Loading...</div>
//   }
//   else if (error) {
//     return <div>Error...</div>
//   }
//   else{

//       return <div>{data.fact}</div>;
//   }
// }

// export default BasicsQC;

// 

import React from "react";
import { useEffect } from "react";

function BasicsQC() {
  const [data, setData] = React.useState("");
  const getNewFact = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((fact) => setData(fact));
  };
  // getNewFact()
// useEffect(() => {
//   console.log(data.fact)
// getNewFact()

// }, [])
  
  return (
    <div>
      <p>{data.fact}</p>
      <br />
      <button onClick={getNewFact}>refresh</button>
    </div>
  );
}

export default BasicsQC;
