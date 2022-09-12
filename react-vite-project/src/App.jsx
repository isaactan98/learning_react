import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/index'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
    </Router>
    </div>
  )
}

export default App
