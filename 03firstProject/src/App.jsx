import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  // let value= 5
  let [value, setValue ]=useState(5)//5 is intialization of variable
  //with help of this value get synked with UI and get update for every place

  function increment (){

    if(value<10){
      setValue(value+1)
      console.log(value)
    }
    
  }

  function decrement(){
    if(value>0){
      setValue(value-1)
    }
  }

  return (
    <>

    <h1>It's Your Value {value} </h1>
    {/* {technical problem is UI updation } */}
     {/* //value in console log updating on click but not
    //updating on the screen so to cater this we require hook to change multiple instance 
    //of variable */}
    {/* if we want to do this task by javaScript then we firstlly need refrence of every element 
    where we need to update this and then we need to change it one by one 
     */}


    <button id="inc" 
    onClick={increment}>UP: {value} </button>
    <br />
    <br />
    <button id="dec" onClick={decrement} >DOWN: {value}</button>
    </>
  )
}

export default App
