import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './Home'
import Contact from './Contact'
import NotFound from './NotFound'
import Header from './Header'
const App = () => {
  return (
    <div>
      <Header/>
      <Routes>

     
      <Route
					path='/'
					element={<Home />}>
       </Route>
       

       <Route
					path='/home'
					element={<Home />}>
        </Route>


				<Route
					path='/Contact'
          element={<Contact />}>
        </Route>
				
        <Route
          path='*'
          element={<NotFound />}>
        </Route>

      </Routes>

    </div>
  )
}

export default App
