import React from 'react'
import { Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import DigitalNomad from './pages/DigitalNomad'
import CurrentEvents from './pages/CurrentEvents'
import Wallpapers from './pages/Wallpapers'
import TreeDRenders from './pages/TreeDRenders'
import TexturesPatterns from './pages/TexturesPatterns'
import Experimental from './pages/Experimental'
import Nature from './pages/Nature'
import BusinessWork from './pages/BusinessWork'
import Architecture from './pages/Architecture'
import Fashion from './pages/Fashion'
import Settings from './pages/Settings'



const Roteator = () => {
  return (
          <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/digital-nomad" element={<DigitalNomad />}></Route>
              <Route path="/current-events" element={<CurrentEvents />}></Route>
              <Route path="/wallpapers" element={<Wallpapers />}></Route>
              <Route path="/3d-renders" element={<TreeDRenders/>}></Route>
              <Route path="/textures-patterns" element={<TexturesPatterns />}></Route>
              <Route path="/experimental" element={<Experimental />}></Route>
              <Route path="/architecture" element={<Architecture/>}></Route>
              <Route path="/nature" element={<Nature/>}></Route>
              <Route path="/fashion" element={<Fashion/>}></Route>
              <Route path="/business-work" element={<BusinessWork/>}></Route>
              <Route path="/settings" element={<Settings/>}></Route>
          </Routes>
  )
}

export default Roteator