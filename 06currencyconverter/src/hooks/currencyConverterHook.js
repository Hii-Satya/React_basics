// import { useState } from "react";
// import { useEffect } from "react";

// function useCurrencyInfo(currency){
//  const [data,setData] =useState({})
//     useEffect(()=>{
//     fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//     .then((res) =>res.json())
//     .then((res)=>setData(res[currency]))
//    },[currency])
//    return data
// }
// export default useCurrencyInfo;
import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const date = "2024-12-31"; // change as needed

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((json) => setData(json[currency]));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
