import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects'
import Contact from './views/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
