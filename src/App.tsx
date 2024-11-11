import { useState } from 'react'
import './App.scss'
import Home from './components/pages/Home/Home'
import Navbar from './components/elements/Navbar/Navbar'
import Footer from './components/elements/Footer/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
