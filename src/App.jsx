import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import './assets/style/App.scss'
import Heroselection from './components/Heroselection'
import Certification from './pages/Certification'
import Heropage from './pages/Heropage'
import Heropage1 from './pages/Heropage1'
import Javascriptwork from './pages/Javascriptwork'
import Mernwork from './pages/Mernwork'
import Portfolio from './pages/Portfolio'
import Reactwork from './pages/Reactwork'
import Websitework from './pages/Websitework'



const App = () => {
  const theme={
    colors:{
      white:'white',
      black:'black',
      color1:'#695AA6',
      color2:'#463d3d;'
    }

  }


  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>

        <Route path="/kapsecode" element={<Heroselection/>}/>
        <Route path="/kapsecode/portfolio/" element={<Portfolio/>}>
          <Route index path="react" element={<Reactwork/>}></Route>
          <Route path="website" element={<Websitework/>}></Route>
          <Route path="javascript" element={<Javascriptwork/>}></Route>
          <Route path="mern" element={<Mernwork/>}></Route>
          <Route path="certification" element={<Certification/>}/>
        </Route>
      </Routes>

    </BrowserRouter>

    </ThemeProvider>

    
  )
}

export default App