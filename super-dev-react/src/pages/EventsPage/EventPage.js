import { Container } from 'react-bootstrap'
import EventsComponent from '../../components/EventsComponent/EventsComponent'

export default function EventPage(){
  return(
    <Container>
      <h2 className='mt-5 mb-5 ms-2'> LOS PRINCIPALES EVENTOS DEL AÑO PARA PROGAMADORES</h2>
      <EventsComponent></EventsComponent>
    </Container>
  )
};