import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Cart from './pages/Cart/Cart'
import Pizza from './pages/Pizza/Pizza'
import { Navigate, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFoud/NotFound'
import Profile from './components/Profile/Profile'
import { useContext } from 'react'
import { UserContex } from './contexts/UserContext'


function App() {
  const {token} = useContext(UserContex)

  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={token ? <Navigate to='/'/> : <Register/>}/>
        <Route path='/login' element={token ? <Navigate to='/'/> : <Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/pizza/:id' element={<Pizza/>}/>
        <Route path='/profile' element={token ? <Profile/> : <Navigate to='/login'/>}/>
        <Route path='/404' element={<NotFound/>}/>


        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
