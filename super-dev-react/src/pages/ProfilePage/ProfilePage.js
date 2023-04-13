import { Container, Form, FormGroup, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function ProfilePage(){

    const {user} = useSelector((state)=> state.AuthReducer)
    return(
        <Container>
            <h1> Profile page</h1>
        {console.log(user)}
            <Form>
                <FormGroup>
                    <label>Nombre: </label>
                    {user.firstName}
                </FormGroup>
                <FormGroup>
                    <label>Apellidos: </label>
                    {user.lastName}
                </FormGroup>
                <FormGroup>
                    <label>Email: </label>
                    {user.email}
                </FormGroup>
                <FormGroup>
                    <label>Sitema Operativo: </label>
                    {user.team}
                </FormGroup>
                <Image src={user.image}></Image>
            </Form>

        </Container>
    )
}

