import { useEffect, useState } from 'react'
import '/src/App.scss'
import Home from '/src/components/pages/Home/Home'
import Navbar from '/src/components/elements/Navbar/Navbar'
import Footer from '/src/components/elements/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import { NavigationContext, WinesContext } from '/src/utils/contexts/contexts'
import Login from '/src/components/pages/Login/Login'
import Signup from '/src/components/pages/Signup/Signup'
import OverAge from '/src/components/pages/OverAge/OverAge'
import About from '/src/components/pages/About/About'
import Profile from '/src/components/pages/Profile/Profile'
import Products from '/src/components/pages/Products/Products'
import ProductEntry from '/src/components/pages/ProductEntry/ProductEntry'
import Cart from '/src/components/pages/Cart/Cart'

function App() {

  const [fetchWines, setFetchWines] = useState<[]>([]);
  const [currentPage, setCurrentPage] = useState<string>('Home')
  const [overAge, setOverAge] = useState<boolean>(sessionStorage.getItem('overAge') === 'true' ? true : false)

  return (
  <>
    <WinesContext.Provider value={{fetchWines, setFetchWines}}>
    <NavigationContext.Provider value={{currentPage, setCurrentPage, overAge, setOverAge}}>
      <Navbar/>
        <Routes>
          <Route index element={ <OverAge/> }/>
          <Route path='/home' element={ <Home/> }/>
          <Route path='/login' element={ <Login/> }/>
          <Route path='/signup' element={ <Signup/> }/>
          <Route path='/overage' element={ <OverAge/> }/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/profile' element={ <Profile/> }/>
          <Route path='/products' element={ <Products/> }/>
          <Route path='/products/:idNumber' element={ <ProductEntry/> }/>
          <Route path='/cart' element={ <Cart/> }/>
        </Routes>
      <Footer/>
      </NavigationContext.Provider>
      </WinesContext.Provider>
    </>
  )
}

export default App
