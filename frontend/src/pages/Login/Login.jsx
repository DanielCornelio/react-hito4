import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { Toaster, toast } from 'react-hot-toast'
import axios from 'axios'

const Login = () => {
    const [user, setUser] = useState({
        email:'',
        password:''
    })

    const validateField = ()=>{
        let isValid = true;

        const newError ={
            email:'',
            password:''
        }

        // validación de email
        if(!user.email.trim()){
            newError.email = toast.error('El campo email es obligatorio');
            isValid = false;
        }
        // validación de password
        if(!user.password){
            newError.password = toast.error('En campo contraseña es obligatorio');
            isValid = false;
        }else if(user.password.length < 6){
            newError.password = toast.error('La contraseña debe tener almenos 6 caracteres');
            isValid = false;
        }
        return isValid
    }


    const handleChange = (e)=>{
        setUser({...user, [e.target.name]:e.target.value})

    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(validateField()){
            try {
                await auth(user.email, user.password);
                toast.success('Datos correctos');
                // Redirige a otra página (ej: usando react-router)
                // navigate('/dashboard');
              } catch (error) {
                toast.error('Error al iniciar sesión. Verifica tus credenciales.');
              }
        }
    }

    const auth = async (userEmail, userPassword) =>{
        try {
            const URL = 'http://localhost:5001/api/auth/login';
            const payload = {email: userEmail , password: userPassword};
            const response = await axios.post(URL, payload)
            console.log({response})
            localStorage.setItem('token', response.data.token);
            console.log('user', response.data)
            return response
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
    return (
        <Form className="my-5 app" onSubmit={handleSubmit} >
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={7} className="center">
                        <h2>Login</h2>
                        <Toaster position="top-center" reverseOrder={false}/>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" name="email" value={user.email} onChange={handleChange} placeholder="Ingresa tu email" />
                           {/* {error.email && error.email} */}
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={user.password} onChange={handleChange} placeholder="Ingresa tu Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    )
}

export default Login