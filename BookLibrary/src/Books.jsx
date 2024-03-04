import './index.css'
import Book from './Book'
function Books({booksData})
{ 
    function print(name) {
      alert("button clicked" + name)
    }
    return(
       
       <div className="books">
        {
            booksData.map((m)=>(
                <Book  url={m.image} title={m.title} fun={print}  rating={m.rating} price={m.price} author={m.author} key={m.title}/>
            )

            )
        }

       </div>  
    )

}
export default Books