import React,{useState} from 'react'
import AccordinItems from './AccordinItems'
const Accordin = (props) => {
  
	
    const [openIndex,setOpenIndex]=useState(0)
    const update = (index) =>
    {
         setOpenIndex(index)
     }
  return (
		<div>
            <br/><h1 className='text-center'>Frequently Asked Questions</h1><br/>
			{props.items.map((obj,index) => (
                <AccordinItems title={obj.title} content={obj.content} isOpen={openIndex===index} update={update}
                    key={index} index={index} />
			))}
		</div>
	)
}

export default Accordin
