import { useState } from "react"
import './App.css'
function App()
{
  const[count,setCount]=useState(0)

 return(
  <div>
    <p>Count:{count}</p>
   <div className="buttons">
      <button onClick={()=>(count>24)?setCount(count):setCount(count+1)}>Increament</button>
      <button onClick={()=>(count==0)?setCount(count):setCount(count-1)}>Decreament</button>
      <button onClick={()=>(count>=0)?setCount(count==0):setCount(count==1)}>reset</button>
   </div>
  </div>
 )
}
export default App