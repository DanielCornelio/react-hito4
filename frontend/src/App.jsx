import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Cart from './components/Cart/Cart'
import Pizza from './components/Pizza/Pizza'

function App() {

  return (
    <div className='app'>
      <Navbar/>
       {/* <Home/> */}
      {/* <Register/>  */}
       {/* <Login/>  */}
       {/* <Cart/>  */}
       <Pizza/>
      <Footer/>
    </div>
  )
}

export default App
