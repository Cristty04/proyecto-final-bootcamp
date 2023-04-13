import { Container } from 'react-bootstrap';
import ComentsFormComponent from '../../components/ComentsFormComponent/ComentsFormComponent';


export default function AboutUsPage(){
  return(
    <Container>
      <div>
      <h1> About Us Page formulario</h1>
      <p>
      Pretenemos reunir toda la información sobre mundo Dev, empezamos por lo que podemos ver a simple vista el Front,
      y más adelante irems implementando más información de Back y a partir de ahí descubriremos nuevos mundo del sector. 
      También dinos qué quieres ver, te escuchamos...
      </p>
      <ComentsFormComponent/>
      </div>
    </Container>
  )
};