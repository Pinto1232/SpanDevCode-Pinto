import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Animation from './pages/Animation'
import HomePage from './pages/HomePage'
import Cartooning from './pages/Cartooning'


const Roteator = () => {
  return (
  
          <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/animation" element={<Animation />}></Route>
              <Route path="/cartoon" element={<Cartooning />}></Route>
          </Routes>

  )
}

export default Roteator