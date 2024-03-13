import { Component } from "react";
import './index.css'
class AppClass extends Component
{
    constructor()
    { 
        super()
        this.state={
            background:'#ffffff'
        }
    }
    change=(e)=>{
        this.setState(e.target.value)
    }
    render()
    {
        return(
            <div className="changer" style={{backgroundColor:this.state.background}} > 
            <input type="color"  onChange={change} />
          </div>
        )
    }
}
export default AppClass