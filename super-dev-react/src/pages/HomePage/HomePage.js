import React from "react";
import { Container } from "react-bootstrap";
import LogoSuperDev from "../../assets/images/LogoSuperDev.png";

export default function HomePage() {
  return (
    <Container>
      <img src={LogoSuperDev} width= "1300" height="300" className="LogoSuperDev"
              alt="React Bootstrap logo"></img>
      <h4 className="mt-5 mb-5"> La revista digital donde estarás informado de cada novedad del mundo de la programación </h4>
      {/*  se puede hacer iframe de canciones HTML */}
      <div className="d-flex justify-content-arround m-3">
      <div class="container-1">
        <img className='m-5' width='450'src="https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2023/03/07/640700aeef20b.r_d.4264-2843-1407.jpeg" alt=""/>
        <h6 className='ms-5'>
            Te informamos de los mejores eventos para programadores
        </h6>
        </div>
        <div class="container-2">
        <img className='m-5' width='450' height='253' src="https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2022/08/03/62ea34b16db5e.png" alt=""/>
        <h6 className='ms-5'>
        Las mejores paylist para que programes con el mejor ritmo
        </h6>
      </div>
      
      </div>

      <div className="d-flex justify-content-arround m-3">
      <div class="container-1">
        <img className='m-5' width='450'src="https://rsc.lavanguardia.com/img/horoscopo/horoscopo1.jpg" alt=""/>
        <h6 className='ms-5'>
            Que te deparará la semana según tu signo del zodíaco
        </h6>
        </div>
        <div class="container-2">
        <img className='m-5' width='450' height='253' src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2023/04/ponte-dia-cobol-80-lenguaje-45-anos-sigue-siendo-tan-demandado-3003538.jpg?tf=3840x" alt=""/>
        <h6 className='ms-5'>
            Artículos para estar informado de todas las novedades
        </h6>
      </div>
      
      </div>
      
    

    </Container>

    
  );
}
