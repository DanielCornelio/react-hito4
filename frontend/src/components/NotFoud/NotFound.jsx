import React from 'react'
import { Link } from 'react-router-dom'
import godzilla from '../../assets/img/godzilla.png'
import { Container, Row, Col } from 'react-bootstrap'


const NotFound = () => {
    return (
        <Container>
            <Row className='d-flex justify-content-center align-items-center text-center'>
                <h1 className='fw-bold'>404: Not Found</h1>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={godzilla} alt='godzilla' className='object-fit-contain ' style={{height: "45rem" }}/>
                </div>
                <h3>La página a la que intentas acceder, no existe!!</h3>
                <p>Regresar al <Link to="/">Inicio</Link></p>

            </Row>
        </Container>
    )
}

export default NotFound