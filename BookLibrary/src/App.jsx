import React from 'react'
import booksData1 from './fantacyBook.js'
import booksData2 from './fictionBook.js'
import booksData3 from './nonfictionBook.js'
import Books from './Books.jsx'
function App()
{
 return(
  <div>
    <h1>Book Library</h1>
    <Books booksData={booksData1}/>
    <Books booksData={booksData2}/>
    <Books booksData={booksData3}/>
     
  </div>
 )
}
export default App