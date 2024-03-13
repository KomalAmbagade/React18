import React,{ useState }  from 'react'
import Child from './Child'
import './index.css'
const App = () => {
  const [values, setValues] = useState([])
  const[text,setText]=useState('')

  const add = () => {
    setValues([...values,text])
    setText("")
  }
  const remove = (id) => {

    values.splice(id, 1)
    setValues([...values])
  }

  return (
    <div className='bd'>

       <div className='parent'>
            <h1>I'm a Parent</h1>
            <div>
              <input type="text" value={text}  onChange={(e)=>setText(e.target.value)}/>
              <button onClick={add}>click</button>
            </div>
       </div>
       
        <div className='child'>  
          <h1>I'm a Child</h1>
          <div>
            <ul>
              {values.map((t,i)=>(
                <Child task={t} index={i}  remove={remove}/>
                ))}
            </ul>
          </div>
        </div>
        

    </div>
  )
}

export default App
