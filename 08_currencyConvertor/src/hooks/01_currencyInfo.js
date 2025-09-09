import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

    const [data , setData] = useState({}) //we used {} , in case of no data get return it 
    //it will not through error

    //now we will use useEffect as we want to call api every time user change the value
    //of currency 

    useEffect(()=>{
        fetch(url).
            then((res)=>{
                    return res.json()
                }).//as max time input is in string file and need to convert in json {object}
            then((res)=>{
                    return setData(res[currency])
                }) //here the value of data get set 

    }, [currency]) //currency is our dependency 

    return data
}

export default useCurrencyInfo //this is how custom hook get created 

// import {useEffect, useState} from "react"


// function useCurrencyInfo(currency){
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))
//         console.log(data);
//     }, [currency])
//     console.log(data);
//     return data
// }

// export default useCurrencyInfo;