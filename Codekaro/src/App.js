import React from 'react'
import "./App.css"
import Hero from './componenets/Hero'
import Home from "./componenets/Home"
import Navbar from './componenets/Navbar'
function App() {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Home />
    </div>
  )
}

export default App