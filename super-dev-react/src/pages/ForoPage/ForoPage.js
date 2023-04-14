import React, {useState} from 'react';
import Formularios from '../../components/Formularios/Formularios';



function ForoPage() {
  //   const initialState = { name: "", surname: "", email: "", photo: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930" }
  // const [userData, setUserData] = useState(initialState)

  // function changeData(e) {
  //   setUserData({ ...userData, [e.target.name]: e.target.value })
  // }
    return (
    //     <div>
    // <div className="formulario">
    //   <h1>Foro SuperDev</h1>
    //   <section>
       <Formularios ></Formularios>
    // userData={userData} handleChangeData={changeData} esto va dentro de la linea anterior  
    // </section>
    //   <section>
    //     <h2>Tus Comentarios</h2>
    //     <h5>{`Soy ${userData.name}, mi email es: ${userData.email}, y quiero deciros que: ${userData.comment} `} </h5>
    //     <img src={userData.photo} ></img>
    //   </section>
    // </div>
    //     </div>
    );
}

export default ForoPage
