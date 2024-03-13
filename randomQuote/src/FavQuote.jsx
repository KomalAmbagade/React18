import React from 'react'
import './index.css'
const FavQuote = (props) => {
  return (
    <div>
      <div>
      {props.combinedState.savequote}
      </div>

      <div className='saveauthor'>
      ~{props.combinedState.saveauthor}
      </div>

      <div style={{padding:"10px"}}>
      <button  className='btn3' onClick={() => props.remove(props.index)}>Clear</button>
      </div>
      
    </div>
  )
}

export default FavQuote
