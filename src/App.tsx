import { useState } from 'react'
import './App.scss'
import Home from './components/pages/Home/Home'
import Navbar from './components/elements/Navbar/Navbar'
import Footer from './components/elements/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import { NavigationContext, WinesContext } from './utils/contexts/contexts'
import Login from './components/pages/Login/Login'
import Signup from './components/pages/Signup/Signup'
import OverAge from './components/pages/OverAge/OverAge'
import About from './components/pages/About/About'
import Profile from './components/pages/Profile/Profile'
import Products from './components/pages/Products/Products'

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
          <Route path='/about' element={ <About/> }/>
          <Route path='/profile' element={ <Profile/> }/>
          <Route path='/products' element={ <Products/> }/>
        </Routes>
      <Footer/>
      </NavigationContext.Provider>
      </WinesContext.Provider>
    </>
  )
}

export default App
