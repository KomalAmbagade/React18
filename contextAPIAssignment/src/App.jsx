import React from 'react'
import { useState } from 'react'
import { mainContext } from './main'
import Component from './Component'
import './index.css'
const App = () => {

  const [mode,setMode]=useState("white")
  const[textcolor,setTextcolor]=useState("black")

  return (
    <div style={{width:'800px',height:'700px',border:'4px solid red',padding:"100px"}}>
     <h2>App Component</h2>
      <button onClick={()=>{setMode("black") , setTextcolor("white")}}  style={{position:"absolute" ,left:"30px" ,top:"30px"}}>Change the mode</button>
      <mainContext.Provider value={{mode,textcolor}}>
        <Component />
			</mainContext.Provider>

		</div>
  )
}

export default App
