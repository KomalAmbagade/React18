import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
function AppProduct() {

 const [products,setProducts]=useState([])

 const[count,setCount]=useState(0)

 const[open,setOpen]=useState(-1)
 
 function add(index)
 {
     setCount(count+1)
     setOpen(index) 
      
 }

 useEffect(() =>
  {
   fetch("https://fakestoreapi.com/products")
     .then((res) => res.json())
     .then((data) => setProducts(data))
     .catch((err)=>console.assert.log("my error"+err))
  },[])
  return (
    <div>
        <h3>count:{count}</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)",  gap: "50px",padding:"40px" }}>
            {products.map((pr, index) => (
                <div style={{ boxShadow: "20px 20px 50px grey",padding:"30px" }} key={index}>
                   
                    <img
                        src={pr.image}
                        alt={pr.title}
                        height='200'
                        width='200'
                    />
                    <div className='tx'>
                    <h2>{pr.title}</h2>
                    </div>
                        <button onClick={()=>add(index)}>Add to card</button>
                   
                   
                    {index===open ? (<p>product added successfully</p>):(<p></p>)}   
                   
                    
                </div>
            ))}
        
        </div>
        
    </div>
  )
}
export default AppProduct
