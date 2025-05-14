import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { Toaster, toast } from 'react-hot-toast'
import { UserContex } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const { register } = useContext(UserContex)
    const navigate = useNavigate();

    const validateField = () => {
        let isValid = true;

        const newError = {
            email: '',
            password: '',
            confirmPassword: ''
        }

        if (!user.email.trim()) {
            newError.email = toast.error('El campo email es obligatorio');
            isValid = false
        }

        if (!user.password) {
            newError.password = toast.error('El campo password es obligatorio');
            isValid = false
        } else if (user.password.length < 6) {
            newError.password = toast.error('El password debe tener al menos 6 caracteres');
            isValid = false
        }

        if (!user.confirmPassword) {
            newError.confirmPassword = toast.error('El campo confirmar password es obligatorio');
            isValid = false
        } else if (user.password !== user.confirmPassword) {
            newError.confirmPassword = toast.error('Las contraseñas no coinciden');
            isValid = false
        }

        return isValid

    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validateField()) {
            try {
                const data = await register(user.email, user.password)
                toast.success('Datos correctos')
            } catch (error) {
                toast.error(`Error: ${error.message}`)
            }
        }
    }

    return (
        <Form className="my-5 app" onSubmit={handleSubmit}>
            <Container >
                <Row className="justify-content-md-center">
                    <Col md={7} className="center">
                        <h2>Registro</h2>
                        <Toaster position="top-center" reverseOrder={true} />
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" name='email' onChange={handleChange} placeholder="Ingresa tu email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' onChange={handleChange} placeholder="Ingresa tu Password" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirmar Password</Form.Label>
                            <Form.Control type="password" name='confirmPassword' onChange={handleChange} placeholder="Confirma tuPassword" />

                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
};

export default Register;
