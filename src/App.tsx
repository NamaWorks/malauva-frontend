import { useState } from 'react'
import './App.scss'
import Home from './components/pages/Home/Home'
import Navbar from './components/elements/Navbar/Navbar'
import Footer from './components/elements/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar/>
        <Routes>
          <Route index element={ <Home/> }/>
          <Route path='/' element={ <Home/> }/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
