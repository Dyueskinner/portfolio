import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './views/Home';
import About from './views/About';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

export default App
