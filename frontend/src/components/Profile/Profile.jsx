import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Profile = () => {
  return (
    <>
    <Container className="pt-5 mt-5">
      <h1>Profile</h1>
      
      <h6 className="mt-5">test@test.com</h6>

      <Link to='/' className='btn btn-primary' variant="outline-secondary" >🚪 Cerrar Sesión</Link>
    </Container> 
  </>
  )
}

export default Profile