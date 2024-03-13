import React from 'react'
const AccordinItems = (props) => {
       
	const {title,content,isOpen,update,index}= props
  return (

    
    <div >
        
		<div className='accordion' id="faq">
			<div className='accordion-item'>
				<div children='accordion-header'>
				   <button className='accordion-button' onClick={() => update(index)}>{title} </button>
				</div>
                <div className='accordion-body'>
				   {isOpen && <p>{content}</p>}
				</div>
			</div>
			
		</div>
	</div>

		
	)
}

export default AccordinItems
