import React, { useContext, useState } from 'react'
import { pizzaCart } from '../../data/pizzas'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import './Cart.css'
import { Context } from '../../contexts/Context'

const Cart = () => {
  const {cart, incrementar, disminuir, totalPrice} = useContext(Context)
  // const [cart, setCart] = useState(pizzaCart)

  // const incremetar = (id) => {
  //   const updatedCart = cart.map((pizza) => {
  //     if (pizza.id === id) {
  //       return { ...pizza, count: pizza.count + 1 };
  //     }
  //     return pizza;
  //   });
  //   setCart(updatedCart);
  // };

  // const disminuir = (id) => {
  //   const updatedCart = cart
  //     .map((pizza) => {
  //       if (pizza.id === id && pizza.count > 0) {
  //         return { ...pizza, count: pizza.count - 1 };
  //       }
  //       return pizza;
  //     })
  //     .filter((pizza) => pizza.count > 0);
  //   setCart(updatedCart);
  // };

  // const totalPrice = cart.reduce((total, pizza) => {
  //   return total + pizza.price * pizza.count;
  // }, 0);

  return (
    <div className="my-5 app">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={9}>
            <h3>Detalles del Pedidio:</h3>
            <ListGroup >
              {
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
                ))
              }
            </ListGroup>
            <h3>Total:$ {totalPrice.toLocaleString("es-CL")}</h3>
            <Button variant='dark'>Pagar</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Cart