import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Container, FormGroup, FormLabel, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { doLogin } from '../../store/auth/action';
import { Navigate } from 'react-router-dom';


const LoginComponent = () => {

  const {user} = useSelector((state)=> state.AuthReducer)
  const [email, setEmail] = useState("") //poner usuaria
  const [password, setPassword] = useState("") //poner contraseña

  const dispatch = useDispatch()

  function tryLogin() {
    // es importante mantener las keys del objeto que nos pida la API
    dispatch(doLogin({ email: email, password: password }))
  }

//En cuanto haya un usuario logeado llevalo al Foro para añadir y editar.
  if(user && user.id){
    return (
      <Navigate to="/foro" replace></Navigate>
    )
  }

  return (
  <Container>
    <Form>
      <FormGroup>
        <FormLabel className='m-1'>Email</FormLabel>
        <input className='m-1' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" type="email"></input>
      </FormGroup>
      <FormGroup>
        <FormLabel className='m-1'>Password</FormLabel>
        <input className='m-1' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password"></input>
      </FormGroup>
      <Button className='mb-5 mt-5 ml-1'onClick={tryLogin}>Login</Button>
    </Form>
  </Container>
  )
};

LoginComponent.propTypes = {};

LoginComponent.defaultProps = {};

export default LoginComponent;

