

// function App() {

//   return (
//     <h1> Harshit Learing React with vite parcel </h1>
//   )
// }

//lets create our function 

function firstProject(){

  const userName = "evaluated result only"

  return (
    //only one tag is allowed to return 
    //but to by pass this we always allowed to use div or even empty tag to return multiple tags 
    //empyt tag in react named as fragment ,so we are returning fragments 
    
    <>
      <h1> HEY its first line of code {userName} </h1> //in curly brace only evaluated result can be return
      //we can't use if else of any JavaScript here ,
      //as finally it get return in form of object and react not allow to use javaScript in braces

      <h2> its second heading </h2>
    </>
  )
  
}

export default firstProject
