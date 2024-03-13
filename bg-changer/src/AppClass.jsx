import { Component } from "react";
import './index.css';
class AppClass extends Component
{
    constructor()
    {
        super()
        this.state={
            background:'#000000',
        }
    }
    change = () =>
    {
        console.log("hi")
      
			const random_color = "#" + Math.round(Math.random() * 10000000).toString(16)
            this.setState({background:random_color}) 
    }
    render ()
    {
        return (
					<div
						className='changer'style={{ backgroundColor: this.state.background }}>
               
						<button onClick={this.change}>change</button>
					</div>
				)
    }
}
export default AppClass