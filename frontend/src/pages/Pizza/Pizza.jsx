import React, { useEffect, useState } from 'react'
import { Container, Card, Button, ListGroup, Col, Row, Image } from 'react-bootstrap'
import { Toaster, toast } from 'react-hot-toast'
import { useParams } from 'react-router-dom'

const Pizza = () => {
  const [info, setInfo] = useState({})
  const {id} = useParams();

  console.log(useParams())
  
  useEffect(() => {
    getData()
  }, [id])


  const getData = async () => {
    console.log(id)
    const url = `http://localhost:5001/api/pizzas/${id}`
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
      <Toaster/>
      <Row className='my-5'>
      <Col md={6}>
      <Card>
        <Card.Body>
          <Card.Title className='capitalize'>{info.name}</Card.Title>
          <Card.Text>
            {info.desc}
          </Card.Text>
          <Card.Text>
            Precio: $ {info.price?.toLocaleString("es-CL")}
          </Card.Text>
          <ListGroup className='capitalize' variant="flush" as="ol" numbered>

          {info.ingredients?.map((ingrediente, index) => (
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
      <Image src={info.img} rounded />
      </Col>
      </Row>
    </Container>

  )
}

export default Pizza