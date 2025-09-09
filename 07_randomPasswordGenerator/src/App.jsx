import { useEffect, useRef, useState } from 'react'
import './App.css'
import { useCallback } from 'react'

function App() {

  //as our project requires to set change password and show on screen as we change
  // length char number etc.

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [passWord, setPassWord] = useState('')


  //as we need to generate function again and again as dependencies (charAllower, length ...etc)
  //use callback is also based on MEMOIZATOIN : stores dependecy in cache memory to reduce 
  //task of cpu 

  const genPassword = useCallback(() => {
    let str = ''
    let pass = ''

    str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) {
      str += '0123456789'
    }

    if (charAllowed) {
      str += '!@#$%^&*()_+'
    }

    //now we need to choose the random charactor from str and need to add in password

    for (let i = 0; i < length; i++) {
      let random = Math.floor((Math.random() * str.length + 1))
      pass += str.charAt(random)
    }

    setPassWord(pass)
  }, [length, numberAllowed, charAllowed, setPassWord])

  useEffect(() => {
    genPassword()
  }, [length, numberAllowed, charAllowed, setPassWord])

  // const copyToClipBoard= useCallback(()=>{
  //     window.navigator.clipboard.writeText(passWord)
  // }, [passWord])  //this function is sufficient to copy from passWord section and save to clipBoard 

  //to give better userExperience and also select length of text as we want we can use 
  //useRef

  const passWordRef = useRef(null) //intially we pointed towards null 

  const copyToClipBoard= useCallback(()=>{
    passWordRef.current?.select()
    passWordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(passWord)
}, [passWord])

   

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">

      <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
              <input 
                  type="text" 
                  value={passWord}
                  className="outline-none w-full py-1 px-3"
                  placeholder="Password"
                  readOnly
                  ref={passWordRef}

              />

              <button 
                  onClick={copyToClipBoard}
                  className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
              > COPY </button>
        </div>

        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
                  type="range"
                  min={8}
                  max={60}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e) => {setLength(e.target.value)}}
              />

              <label >
                  Length:{length}
              </label>

            </div>

            <div className="flex items-center gap-x-1">
                <input 
                    type="checkbox"
                    defaultChecked={numberAllowed}
                    id="numberInput"
                    onChange={()=>{
                      setNumberAllowed((prev)=>!prev)
                    }} 
                />

                <label htmlFor="numberInput">Numbers</label>

            </div>

            <div className="flex items-center gap-x-1">
                <input
                    type="checkbox"
                    defaultChecked={charAllowed}
                    id="characterInput"
                    onChange={() => {
                        setCharAllowed((prev) => !prev )
                    }}
                />
                <label htmlFor="characterInput">Characters</label>
            </div>
        </div>

    </div>


  )
}

export default App
