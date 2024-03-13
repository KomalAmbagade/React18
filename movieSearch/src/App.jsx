import React, { useEffect, useState } from 'react'
import Movies from './Movies'
import './index.css'

function App() {
  const[searchTerm,setSearchTerm]=useState('')
  const[moviesList,setMoviesList]=useState([])

  useEffect(()=>{
    async function fetchData(){
      const res=await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=e3277b8e`)
      const data=await res.json()
      setMoviesList(data.Search)

    }
    fetchData()
  },
  [searchTerm]
  )
  return (
    <div>
      <div style={{padding:"20px" }}>
        <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder='Search the Movies here'/>
      </div>
      <Movies moviesList={moviesList}/>
    </div>
  )
}
export default App
