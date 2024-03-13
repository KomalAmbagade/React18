import { useState } from "react";
import './index.css'
function App()
{
  const[background,setBackground]=useState('#ffffff')
  function change()
  {
     const random_color="#"+Math.round(Math.random()*10000000).toString(16);
     setBackground(random_color)
  }

  return(
    <div  className="changer" style={{backgroundColor:background}}>
      <button onClick={change}>changer</button>
    </div>
  )
}
export default App