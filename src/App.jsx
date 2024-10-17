import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setcount] = useState(1)
  const before = () =>{
    if (count > 1) {
      setcount(count -1)     
    }
  }
  const after = () =>{
    if (count < 4) {
      setcount(count +1)      
    }  
  }
  console.log(count);
  return <React.Fragment>
    <div className='w-1/4 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-80 rounded-md p-10 '>
      <b><h1 className='text-center font-mono text-2xl'>step progress bar</h1></b>
      <div  className='flex flex-row p-10 justify-center'>
      <div className={`rounded-full w-10 h-10 bg-red bg-red-400 text-white flex flex-col justify-center items-center mr-10 border-4 border-solid border-white ${count === 1 ? " border-4 border-solid border-green-600" : ""}`}>1</div>
      <div className={`rounded-full w-10 h-10 bg-red bg-red-400 text-white flex flex-col justify-center items-center mr-10 border-4 border-solid border-white ${count === 2 ? " border-4 border-solid border-green-600" : ""}`}>2</div>
      <div className={`rounded-full w-10 h-10 bg-red bg-red-400 text-white flex flex-col justify-center items-center mr-10 border-4 border-solid border-white ${count === 3 ? " border-4 border-solid border-green-600" : ""}`}>3</div>
      <div className={`rounded-full w-10 h-10 bg-red bg-red-400 text-white flex flex-col justify-center items-center mr-10 border-4 border-solid border-white ${count === 4 ? " border-4 border-solid border-green-600" : ""}`}>4</div>
      </div>
      <div className='flex flex-row justify-around'>
      <button  onClick={before} className={`bg-orange-400 border-none outline-none w-20 p-1 rounded-lg text-white ${count === 1 ? "opacity-40 cursor-not-allowed " : ""}`} >Pre</button>
      <button onClick={after} className={`bg-orange-400 border-none outline-none w-20 p-1 rounded-lg text-white ${count === 4 ? "opacity-40 cursor-not-allowed " : ""}`}>Next</button>
      </div>
    </div>
    </ React.Fragment>
}

export default App