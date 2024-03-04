function Book(props)
{
 return(
   <div className="book">
    {
        props.rating <4 && (
            <div>
                <img src={props.url} alt="book" />
                <h2>rating:{props.rating}</h2>
                <h2>price: Rs{props.price}</h2>
                <p>author:{props.author}</p>
                <button onClick={() => props.fun(props.title)}>see the movie</button>
            </div>
        )
      
    }
   
   </div>
 )
}
export default Book