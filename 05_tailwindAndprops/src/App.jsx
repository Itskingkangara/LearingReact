import { useState } from 'react'
import './App.css'
import Card from './componets/card'

function App() {

  return (
    <>
    {/* this componet I copied from dev UI  */}
    {/* <div>
          <img
            src="https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=790b7611a2f696d51a46ce892e420e77735707466a4abd3b&rid=giphy.gif&ct=g"
            alt="test"
            width="300"
            height="300"
            className="rounded-t-xl w-full"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-7 -mt-4 bg-black rounded-b-xl ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">Bored ape nft accidental</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div> */} 

        {/* <Card/>
        <Card/>
        <Card/>  */}
        
        {/* now componet can be used as many time as we want by we want every card shold have 
        different properties  */}

        {/* now using propertires of the card we had created in componet section  */}

        <Card userName="HARSHIT"/> 
        {/* as we passed here we need to recive in component section  */}
        <Card userName="RISHI" price="25"/>

        

        {/* now we want to use this card code once again so to do this we can create seprate componet
        to make it reusabale */}


    </>
  )
}

export default App
