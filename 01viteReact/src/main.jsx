import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import NewFile from './NewFile.jsx' // name can be any value 
// import App from './App.jsx'

//we are trying to know how react work under the hood

//as we know it converts our object in tree structure (parse it in tree form )
//if we directlly try to execute function 

// function MyApp(){
//     return (
//       <>
//       <h1>hey by function directlly from main </h1>
//       </>
//     )
// }

//as we create our own lib "02customReact", can't take input directlly here as react have pre-
//defined way how the input  need to be 
const anotherUser=" Lets check "
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google',
  anotherUser//after all value direct varaible can be inject
)


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <NewFile />

    //2 way to excute fucntion directlly 
    // MyApp()//this is not considered as good practice
    // <MyApp/> //this is good with proper syntax 

    //another way where we directlly create object using react library 
    reactElement
    //

  // </StrictMode>, //strictMode only is for security purpose  removal of this in this cases doesnt stop working of this code 
)

//react work on sigle page only means if we need next page , react remove the contect of that paga
// and a new contenct info that's why it is considered as single page application 
