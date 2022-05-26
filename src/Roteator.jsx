import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Animation from './pages/Animation'
import HomePage from './pages/HomePage'
import Cartooning from './pages/Cartooning'
import CharacterDesign from './pages/CharacterDesign'
import Comedy from './pages/Comedy'
import Design from './pages/Design'
import DJing from './pages/DJing'
import Engineering from './pages/Engineering'
import GameDesign from './pages/GameDesign'
import Settings from './pages/Settings'



const Roteator = () => {
  return (
  
          <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/animation" element={<Animation />}></Route>
              <Route path="/cartoon" element={<Cartooning />}></Route>
              <Route path="/chardesign" element={<CharacterDesign />}></Route>
              <Route path="/comedy" element={<Comedy/>}></Route>
              <Route path="/design" element={<Design/>}></Route>
              <Route path="/djing" element={<DJing/>}></Route>
              <Route path="/engineering" element={<Engineering/>}></Route>
              <Route path="/gamedesign" element={<GameDesign/>}></Route>
              <Route path="/settings" element={<Settings/>}></Route>
          </Routes>

  )
}

export default Roteator