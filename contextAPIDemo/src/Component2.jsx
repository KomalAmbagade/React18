import React, { useContext } from 'react'
import { mainContext } from './main'

const Component2 = () =>
{
    const count= useContext(mainContext)
  return (
		<div style={{ width: "200px", height: "100px", border: "4px solid black" ,padding:"100px"}}>
			count inside is {count}
		</div>
	)
}

export default Component2