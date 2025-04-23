import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import CardPizza from "../../components/CardPizza/CardPizza";
import { Col, Container, Row } from "react-bootstrap";
import { Toaster, toast } from 'react-hot-toast'


const Home = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const url = "http://localhost:5000/api/pizzas"
    try {
      const response = await fetch(url);
      const data = await response.json();
      setInfo(data)
    } catch (error) {
      toast.error('No se pudo establecer conexión con el servidor');
    }
  }

  return (
    <>
      <Header />
      <Toaster position="top-center" reverseOrder={true} />
      <Container className="my-5">
        <Row>
          {
            info.map((pizza) => (
              <Col md={4} key={pizza.id}>
                <CardPizza id={pizza.id} name={pizza.name} price={pizza.price} ingredients={pizza.ingredients} img={pizza.img} />
              </Col>
            ))
          }

        </Row>
      </Container>
    </>
  );
};

export default Home;
