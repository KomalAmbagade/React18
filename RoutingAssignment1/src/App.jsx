import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Header from './Header'
import RandomQuote from '../../randomQuote/src/randomQuote'
import AccordinApp from '../../accordin/src/AccordinApp'
import BgChangerApp from '../../bg-changer/src/BgChangerApp'
import CountDownTimerApp from '../../countDownTimerAssignment/src/CountDownTimerApp'
import EvenOddCounterApp from '../../EvenOddCounter/src/EvenOddCounterApp'
import UseEffectApp from '../../useEffectDemo2/src/UseEffectApp'
import RegisterFormApp from '../../ReactFormsRegister/src/RegisterFormApp'
import MovieSeachApp from '../../movieSearch/src/MovieSearchApp'
import NotFound from './NotFound'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/countDownTimer'  element={<CountDownTimerApp/>}></Route>
        <Route path='/registerForm'  element={<RegisterFormApp/>}></Route>
        <Route path='/useEffectApp'  element={<UseEffectApp/>}></Route>
        <Route path='/evenOddCounter'  element={<EvenOddCounterApp/>}></Route>
        <Route path='/movieSearch' element={<MovieSeachApp/>}></Route>
        <Route path='/random'  element={<RandomQuote/>}></Route>
        <Route path='/accordin'  element={<AccordinApp/>}></Route>
        <Route path='/bgChanger'  element={<BgChangerApp/>}></Route>
        <Route path='*'  element={<NotFound/>}></Route>
      </Routes>
    </div>
  )
}

export default App
