import { useReducer } from 'react';
import './App.scss';
import Home from './components/pages/Home/Home';
import Navbar from './components/elements/Navbar/Navbar';
import Footer from './components/elements/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { NavigationContext, WinesContext, NotificationContext } from './utils/contexts/contexts';
import { WinesContextInterface, NavigationContextInterface, NotificationContextInterface } from './utils/types/interfaces';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import OverAge from './components/pages/OverAge/OverAge';
import About from './components/pages/About/About';
import Profile from './components/pages/Profile/Profile';
import Products from './components/pages/Products/Products';
import ProductEntry from './components/pages/ProductEntry/ProductEntry';
import Cart from './components/pages/Cart/Cart';
import Notification from './components/elements/Notification/Notification';
import { winesReducer } from './reducers/winesReducer';
import { navigationReducer } from './reducers/navigationReducer';
import { notificationReducer } from './reducers/notificationReducer';

function App() {
  const [fetchWines, dispatchFetchWines] = useReducer(winesReducer, []);
  const [navigationState, dispatchNavigation] = useReducer(navigationReducer, {
    currentPage: '',
    overAge: sessionStorage.getItem('overAge') === 'true',
    loggedIn: sessionStorage.getItem('token') === 'true',
  });
  const [notificationState, dispatchNotification] = useReducer(notificationReducer, {
    notificationOn: false,
    hideNotification: false,
    notificationText: 'checking something',
    notificationColor: 'dark',
  });

  const winesContextValue: WinesContextInterface = { fetchWines, dispatchFetchWines };
  const navigationContextValue: NavigationContextInterface = { navigationState, dispatchNavigation };
  const notificationContextValue: NotificationContextInterface = { notificationState, dispatchNotification };

  return (
    <>
      <WinesContext.Provider value={winesContextValue}>
        <NavigationContext.Provider value={navigationContextValue}>
          <NotificationContext.Provider value={notificationContextValue}>
            <Navbar />
            <Notification text={`test`} color={`pink`} />
            <Routes>
              <Route index element={<OverAge />} />
              <Route path='/home' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/overage' element={<OverAge />} />
              <Route path='/about' element={<About />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/products' element={<Products />} />
              <Route path='/products/:idNumber' element={<ProductEntry />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
            <Footer />
          </NotificationContext.Provider>
        </NavigationContext.Provider>
      </WinesContext.Provider>
    </>
  );
}

export default App;
