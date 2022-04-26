import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Customer from './pages/Customer'
import HomePage from './pages/HomePage'
import Statistic from './pages/Statistic'

const Roteator = () => {
  return (
  
          <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/statistic" element={<Statistic />}></Route>
              <Route path="/customers" element={<Customer />}></Route>
          </Routes>

  )
}

export default Roteator