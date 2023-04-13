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


  if(user && user.id){
    return (
      <Navigate to="/profile" replace></Navigate>
    )
  }

  return (<Container>
    <Form>
      <FormGroup>
        <FormLabel>Email</FormLabel>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" type="email"></input>
      </FormGroup>
      <FormGroup>
        <FormLabel>Password</FormLabel>
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password"></input>
      </FormGroup>
      <Button onClick={tryLogin}>Login</Button>
    </Form>
  </Container>)

};

LoginComponent.propTypes = {};

LoginComponent.defaultProps = {};

export default LoginComponent;
