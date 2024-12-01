import { useState } from 'react'
import './App.scss'
import Home from './components/pages/Home/Home'
import Navbar from './components/elements/Navbar/Navbar'
import Footer from './components/elements/Footer/Footer'
import { Route, Routes, UNSAFE_NavigationContext } from 'react-router-dom'
import { NavigationContext, WinesContext } from './utils/contexts/contexts'
import Login from './components/pages/Login/Login'
import Signup from './components/pages/Signup/Signup'
import OverAge from './components/pages/OverAge/OverAge'

function App() {

  const [fetchWines, setFetchWines] = useState<[]>([]);
  const [currentPage, setCurrentPage] = useState<string>('Home')


  return (
  <>
    <WinesContext.Provider value={{fetchWines, setFetchWines}}>
    <NavigationContext.Provider value={{currentPage, setCurrentPage}}>
      <Navbar/>
        <Routes>
          <Route index element={ <Home/> }/>
          <Route path='/' element={ <Home/> }/>
          <Route path='/login' element={ <Login/> }/>
          <Route path='/signup' element={ <Signup/> }/>
          <Route path='/overage' element={ <OverAge/> }/>
        </Routes>
      <Footer/>
      </NavigationContext.Provider>
      </WinesContext.Provider>
    </>
  )
}

export default App
