import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import {Card, ListGroup} from "react-bootstrap";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const CardPizza = ({ name, price, ingredients, img, id}) => {
  const { addToCart } = useContext(CartContext)
  const pizza = { name, ingredients, price, img, id };
  const navigate = useNavigate();
  const irAPizza = () => {
    navigate(`/pizza/${id}`)
  }


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
          <Button variant="outline-secondary" onClick={irAPizza} >Ver más 👀</Button>
          <Button variant="dark" onClick={() => addToCart(pizza)}>Añadir 🛒</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
