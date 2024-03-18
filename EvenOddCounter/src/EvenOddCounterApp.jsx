import { useState } from "react"
import './App.css'
function EvenOddCounterApp()
{
  const[count,setCount]=useState(0)
 
    
  return(
    <div className="content">
         <div className="count">
          <h1>{(count==0)? '' :( (count%2)==0?(<p>Count is even</p>):(<p>Count is not even</p>))}</h1>
         </div>
         <h2>Count:{count}</h2>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>count>0?setCount(count-1):setCount(0)}>-</button>
      
     
    </div>
  )
}
export default EvenOddCounterApp