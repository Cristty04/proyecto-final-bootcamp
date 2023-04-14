import { Container } from 'react-bootstrap';
import LoginComponent from '../../components/LoginComponent/LoginComponent';



export default function LoginPage(){
  return(
    <Container>
      <h1> Inicia Sesión </h1>
      <LoginComponent></LoginComponent>
    </Container>
  )
};