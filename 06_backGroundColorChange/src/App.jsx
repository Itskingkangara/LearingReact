import { useState } from 'react'
import './App.css'




function App() {

  const [color, setColor]= useState('olive')

  function changeColor(colors){
    setColor(colors)
  }

  return (
    
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>
    <button onClick={()=>setColor('red')}> red  </button>
    <button onClick={()=>setColor('skyblue')}> blue  </button>
    <button onClick={()=>setColor('lightgreen')}> green  </button>
    <button onClick={()=>setColor('pink')}> pink  </button>
    <button onClick={()=>setColor('lavender')}> purple  </button>
    </div>
  )
}

export default App
