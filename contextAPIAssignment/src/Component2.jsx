import React, { useContext } from 'react'
import { mainContext } from './main'
import './index.css'

const Component2 = () =>
{
    const {mode,textcolor}= useContext(mainContext)
    return (
		<div style={{ width: "200px", height: "100px", border: "4px solid black" ,padding:"100px",backgroundColor:mode}}>
		<div style={{marginTop:"-70px",marginBottom:"40px",color:textcolor}}>
		 <h2>Component3</h2>
		</div>
		 <div style={{ color:textcolor}}>
			<p>First, solve the problem. Then write the code</p>
		 </div>
		
		</div>
	)
}

export default Component2