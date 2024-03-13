import { useEffect, useState } from 'react'
import FavQuote from './FavQuote';
import axios from 'axios'


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
                  savequote.map((value, index) => (
                    <div className='save'>
                      <h1>Fav Quote</h1>
                     <div key={index}>
                     <FavQuote q={value} a={saveauthor[index]} index={index}  remove={remove}/>
                     </div>
                    </div>
                  ))
              }  
            </div>
          </div>  
      </div> 
    </>
    
  )
}

export default App;