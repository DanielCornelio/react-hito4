import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { UserContex } from '../../contexts/UserContext'
const Profile = () => {
  const {user, logout} = useContext(UserContex)
  
  return (
    <>
    {
      user
      ?(
        <Container className="pt-5 mt-5">
      <h1>Profile</h1>
      
      <h6 className="mt-5">{user?.email}</h6>

      <Link className='btn btn-primary' variant="outline-secondary" onClick={()=>logout()} >🚪 Cerrar Sesión</Link>
    </Container> 
      ):(
      <h6 className="mt-5">sin datos</h6>
        
      )
    }
    
  </>
  )
}

export default Profile