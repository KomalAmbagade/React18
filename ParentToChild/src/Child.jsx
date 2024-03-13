import React from 'react'

const Child = (props) => {
  return (
    <div>
           
			<li key={props.index}>
				{props.task} <button onClick={() => props.remove(props.index)}>❎</button>
			</li>
		
    </div>
  )
}

export default Child
