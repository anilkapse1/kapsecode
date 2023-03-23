import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/style/App.scss'
import Heropage from './pages/Heropage'
import Portfolio from './pages/Portfolio'





const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/kapsecode" element={<Heropage/>}/>
      <Route path="/kapsecode/portfolio" element={<Portfolio/>}/>
      </Routes>
    </BrowserRouter>

    
  )
}

export default App