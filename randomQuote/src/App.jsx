import { useEffect, useState } from 'react'
import FavQuote from './FavQuote';
import axios from 'axios'
import './index.css'
function App ()
{
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState('')
  const [btnClick,setbtnClick]=useState(0)
  const[savequote,setSavequote]=useState([])
  const[saveauthor,setSaveauthor]=useState([])
  useEffect(() =>
  {
    axios.get("https://api.quotable.io/random")
      .then((data) =>
      {
        setQuote(data.data.content);
        setAuthor(data.data.author)
    })
  },[btnClick])

  const add=()=>{
    setSavequote([...savequote,quote])   
    setSaveauthor([...saveauthor,author])
  }
  const combinedState = { savequote, saveauthor };

  const remove = (id) => {

    savequote.splice(id, 1)
    saveauthor.splice(id,1)
    setSavequote([...savequote])
    setSaveauthor([...saveauthor])
  }

  return (
    <>
      <div className='page'>
        
          <div className='box'>
              <div className='quote'>
              <blockquote>{quote}</blockquote>
              </div>

              <div  className='author'>
              <cite>~{author}</cite><br />
              </div>

              <div className='bt'>
              <button className='btn' onClick={()=>setbtnClick(btnClick+1)} >Refresh</button>
              </div>
              <button className='btn2' onClick={add}>Save</button>

              <div >
              {
                
                savequote.map((q,i)=>(
              
                    <div className='save'>
                    <h4>Fav Quote</h4>
                    <FavQuote combinedState={combinedState} index={i}  remove={remove} />
                    </div>
                  
                  ) 
                )
              }  
            </div>
          </div>  
      </div> 
    </>
    
  )
}

export default App