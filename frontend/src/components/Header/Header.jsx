import React from 'react'
import './Header.css'
import Image from 'react-bootstrap/Image';
import banner from '../../assets/img/wp-banner.jpg';

const Header = () => {
  return (
    <header className="header">
        <Image src={banner} fluid className='banner'/>
        <div className="text-center banner__text">
          <h1 className='my-3 '>¡Pizzería Mamma Mía!</h1>
          <p >Tenenos las mejores pizzas que podrás encontrar</p>
          <hr/>
        </div>
      </header>
  )
}

export default Header