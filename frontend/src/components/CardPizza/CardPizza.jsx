import React from "react";
import Button from "react-bootstrap/Button";
import {Card, ListGroup} from "react-bootstrap";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card md={4}>
      <Card.Img src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <hr />
        <Card.Subtitle className="text-muted text-center mb-3">
        🍕 Ingredientes:
        </Card.Subtitle>
        
          <ListGroup>
            {
              ingredients.map((ingredient)=>(
                <ListGroup.Item key={ingredient} className="">{ingredient}</ListGroup.Item>
              ))
            }
          </ListGroup>
       
        <hr />
        <h5 className="text-center mb-3">
          Precio: $ {price.toLocaleString("es-CL")}
        </h5>
        <div className="d-flex justify-content-between">
          <Button variant="outline-secondary">Ver más 👀</Button>
          <Button variant="dark">Añadir 🛒</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
