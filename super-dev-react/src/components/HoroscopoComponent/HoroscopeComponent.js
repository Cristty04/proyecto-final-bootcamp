import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../store/Horoscope/action';
import { Card, Container } from 'react-bootstrap';
import { Bars } from 'react-loader-spinner';


const HoroscopeComponent = () => {

  const dispatch = useDispatch();
  const { events, loadingHoroscope } = useSelector((state) => state.HoroscopeReducer);

    useEffect(()=>{
      dispatch(getHoroscope())
    },[])

    if(loadingHoroscope){
      return(
        <Container>
        <Bars>
        </Bars>
        </Container>
      )
    }
  
    return(
      <Container>
        {horoscopo.map(event=>{
          return(
            <Card>
            
              <Card.Title m-5>
                {horoscopo.name}
              </Card.Title>
              <Card.Body> 
              <Card.Img>
              {event.sign}
             </Card.Img>        
                <Card.Text>
                {horoscopo.date}
                </Card.Text>
                <Card.Text>
                {horoscopo.prediction}
                </Card.Text>
                <Card.Text>
                {horoscopo.lovers}
                </Card.Text>
            
              </Card.Body>
            </Card>
          )
        })}
      </Container>
    )
};
EventsComponent.propTypes = {};

EventsComponent.defaultProps = {};

export default HoroscopeComponent