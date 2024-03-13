import React from 'react'
import './index.css'
const Movies = ({moviesList}) => {
  return (
    <div  style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)",  gap: "40px",padding:"40px"}}>
      {
        moviesList && 
        moviesList.map((movie,index)=>(
          <div style={{ boxShadow: "20px 20px 40px Highlight",padding:"30px" }} key={index}>
            <img src={movie.Poster} 
                 alt={movie.Title}
                 height={300}
                 width={300}
            />

            <h3>{movie.Title}</h3>
            <p>Released: {movie.Year}</p>
            </div>
        ))
      }
    </div>
  )
}

export default Movies
