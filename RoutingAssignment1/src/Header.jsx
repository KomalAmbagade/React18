import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='container-fluid'>
      <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
		<div className='container-fluid'>

			<button data-bs-target="#menu" data-bs-toggle="collapse" className='navbar-toggler'>
				<span className='navbar-toggler-icon'></span>
			</button>

            <h2 className='navbar-brand'>Routing</h2>

			<div className='navbar-collapse collapse' id='menu'>
             <ul className='navbar-nav'>

				<li className='nav-item'>
					<button className='nav-link'>
						<Link to='/countDownTimer'>CountDownTimer</Link>
					</button>
				</li>

				<li className='nav-item'>
					<button className='nav-link'>
						<Link to='/registerForm'>ReactRegisterForm</Link>
					</button>
				</li>

				<li className='nav-item'>
					<button className='nav-link'>
						<Link to='/useEffectApp'>useEffectDemo</Link>
					</button>
				</li>

				<li className='nav-item'>
					<button className='nav-link'>
						<Link to='/evenOddCounter'>EvenOddCounter</Link>
					</button>
				</li>

				<li children='nav-item'> 
		            <button className='nav-link'>
                        <Link to='/movieSearch'>MovieSearch</Link>
					</button>
				</li>

				<li className='nav-item'>
					<button className='nav-link'>
						<Link  to='/random'>RandomQuote</Link>
					</button>
				</li>

                <li className='nav-item'>
					<button className='nav-link'>
						<Link to='/accordin'>Accordin</Link>
					</button>
				</li>

				<li className='nav-item'>
					<button className='nav-link'>
						<Link to='/bgChanger'>bgChanger</Link>
					</button>
				</li>
                 
			  </ul>
			</div>
		</div>
	  </nav>
    </div>
  )
}

export default Header
