import { Container } from 'react-bootstrap'
import HoroscoposComponent from '../../components/HoroscopoComponent/HoroscoposComponent'


export default function HoroscoposPage(){
  return(
    <Container>
      <h1 className='mt-5 mb-5 ms-2'> HOROSCOPO SEMANAL </h1>
      <HoroscoposComponent></HoroscoposComponent>
    </Container>
  )
};