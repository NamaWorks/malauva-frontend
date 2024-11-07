import { useState } from 'react'
import './App.scss'
import Home from './components/pages/Home/Home'
import Navbar from './components/elements/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App
