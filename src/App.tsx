import { useState } from 'react'
import './App.scss'
import Home from './components/pages/Home/Home'
import Navbar from './components/elements/Navbar/Navbar'
import Footer from './components/elements/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import { WinesContext } from './utils/contexts/contexts'

function App() {

  const [fetchWines, setFetchWines] = useState([])

  return (
  <>
    <WinesContext.Provider value={{fetchWines, setFetchWines}}>
      <Navbar/>
        <Routes>
          <Route index element={ <Home/> }/>
          <Route path='/' element={ <Home/> }/>
        </Routes>
      <Footer/>
      </WinesContext.Provider>
    </>
  )
}

export default App
