import { Container } from 'react-bootstrap'
import EventsComponent from '../../components/EventsComponent/EventsComponent'

export default function EventPage(){
  return(
    <Container>
      <h1> Eventos</h1>
      <EventsComponent></EventsComponent>
    </Container>
  )
};