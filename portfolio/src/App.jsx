import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Resume from '../pages/Resume'
import Contact from '../pages/Contact'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
       <Header/>
       <Routes>

          <Route path='/'  element={}></Route>

          <Route path='/about'  element={}></Route>

          <Route path='/projects'  element={}></Route>

          <Route path='/resume'   element={}></Route>

          <Route  path='/contact'   element={}></Route>

       </Routes>
       <Footer/>
    </div>
  )
}
export default App
