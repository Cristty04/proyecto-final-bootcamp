// import { Container, Form, FormGroup, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

export default function ProfilePage(){

   const {user} = useSelector((state)=> state.AuthReducer)

   const { register, handleSubmit } = useForm();
   const onSubmit = data => console.log(data);
   return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}

//     return(
//         <Container>
//             <h1> Profile page</h1>
//         {console.log(user)}
//             <Form>
//                 <FormGroup>
//                     <label>Nombre: </label>
//                     {user.firstName}
//                 </FormGroup>
//                 <FormGroup>
//                     <label>Apellidos: </label>
//                     {user.lastName}
//                 </FormGroup>
//                 <FormGroup>
//                     <label>Email: </label>
//                     {user.email}
//                 </FormGroup>
//                 <FormGroup>
//                     <label>Sitema Operativo: </label>
//                     {user.team}
//                 </FormGroup>
//                 <Image src={user.image}></Image>
//             </Form>

//         </Container>
//     )
 



