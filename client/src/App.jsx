import React, { useState } from 'react'
import Home from './component/Home'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Signup from './component/Signup'
import Login from './component/Login'
import Navbar from './component/Navbar'

const App = () => {
  const [Mode, setMode] = useState({
    Color:'dark',
    bg:'light'
  });

const ModeSet=()=>{

if (Mode.Color=='dark') {
  setMode({
    Color:"light",
    bg:'dark'
  })
  document.body.style.backgroundColor='black'
  document.body.style.color='white'
}

else{

  setMode({
    Color:"dark",
    bg:'light'
  })
  document.body.style.backgroundColor='white'
  document.body.style.color='black'




}
}

  return (
     <Router>
    <div >
      <div >
        <div >
          <Navbar Color={Mode.Color} bg={Mode.bg} ModeSet={ModeSet}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route exact  path='/home' element={<Home/>} />
        <Route exact  path='/signup' element={<Signup/>} />
        <Route exact  path='/login' element={<Login/>} />
      </Routes>
        </div>
      </div>
      
    </div>
     </Router>
  )
}

export default App
