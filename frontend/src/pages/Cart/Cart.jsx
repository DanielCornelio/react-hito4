import React, { useContext, useState } from 'react'
import { pizzaCart } from '../../data/pizzas'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import './Cart.css'
import { CartContext } from '../../contexts/CartContext'
import { UserContex } from '../../contexts/UserContext'

const Cart = () => {
  const {cart, incrementar, disminuir, totalPrice, cartCheckout, checkoutSuccess} = useContext(CartContext)
  const {token} = useContext(UserContex);
  
  const handlePay = async() =>{
    await cartCheckout()
  }

  return (
    <div className="my-5 app">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={9}>
            <h3>Detalles del Pedidio:</h3>
            <ListGroup >
              {
                cart.length >= 1 ?
                cart.map((pizza) => (
                  <ListGroup.Item key={pizza.id} className='d-flex gap-5'>
                    <Col md={6} className='d-flex gap-4 align-items-center justify-content-md-start'>
                      <img className='cart__img' src={pizza.img} alt={pizza.name} />
                      <p className='cart__title mb-0'>{pizza.name}</p>
                    </Col>
                    <Col md={6} className='d-flex  align-items-center justify-content-md-center gap-3'>
                      <p className='mb-0'>$ {pizza.price}</p>
                      <Button variant="outline-danger" onClick={()=> disminuir(pizza.id)}>-</Button>
                      <p className='mb-0'>{pizza.count}</p>
                      <Button variant="outline-primary" onClick={() => incrementar(pizza.id)}>+</Button>
                    </Col>
                  </ListGroup.Item>
                )):
                <h3>El carrito se encuentra vacío</h3>
              }
            </ListGroup>
            <h3>Total:$ {totalPrice.toLocaleString("es-CL")}</h3>
            {token && <Button variant='dark' onClick={handlePay}>Pagar</Button>}

            {checkoutSuccess && <div className='text-center'>Se ha realizado la compra con exito</div>}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Cart