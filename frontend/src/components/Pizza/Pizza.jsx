import React, { useEffect, useState } from 'react'
import { Container, Card, Button, ListGroup, Col, Row, Image } from 'react-bootstrap'
import { Toaster, toast } from 'react-hot-toast'

const Pizza = () => {
  const [info, setInfo] = useState({})
  const { name, price, ingredients, img, desc } = info

  useEffect(() => {
    getData()
  }, [])


  const getData = async () => {
    const url = 'http://localhost:5000/api/pizzas/p001'
    try {
      const response = await fetch(url);
      const data = await response.json();
      setInfo(data)
    } catch (error) {
      toast.error('No se pudo establecer conexión con el servidor');
    }
  }


  return (
    <Container>
      <Row className='my-5'>
      <Col md={6}>
      <Card>
        <Card.Body>
          <Card.Title className='capitalize'>{name}</Card.Title>
          <Card.Text>
            {desc}
          </Card.Text>
          <Card.Text>
            Precio: $ {price?.toLocaleString("es-CL")}
          </Card.Text>
          <ListGroup className='capitalize' variant="flush" as="ol" numbered>

          {ingredients?.map((ingrediente, index) => (
              <ListGroup.Item key={index}>
                🍕 {ingrediente}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button variant="dark">Añadir al carrito 🛒</Button>
        </Card.Body>
      </Card>
      </Col>
      <Col md={6}>
      <Image src={img} rounded />
      </Col>
      </Row>
    </Container>

  )
}

export default Pizza