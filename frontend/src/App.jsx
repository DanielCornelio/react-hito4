import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Cart from './pages/Cart/Cart'
import Pizza from './pages/Pizza/Pizza'
import { Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFoud/NotFound'
import Profile from './components/Profile/Profile'
import ContextProvider from './contexts/Context'

function App() {

  return (
    <div className='app'>
      <ContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/pizza/:id' element={<Pizza/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/404' element={<NotFound/>}/>


        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
      </ContextProvider>
    </div>
  )
}

export default App
