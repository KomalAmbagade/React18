import { useState } from "react"
import './index.css'
function App()
{
  const[background,setBackground]=useState('#ffffff')

  return(
  <div className="changer" style={{backgroundColor:background}} > 
    <input type="color" value={background} onChange={e=>setBackground(e.target.value)} />
   
  </div>
  )
}
export default App