import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../store/events/action';
import { Card, Container } from 'react-bootstrap';
import { Bars } from 'react-loader-spinner';


const EventsComponent = () => {

  const dispatch = useDispatch();
  const { events, loadingEvents } = useSelector((state) => state.EventsReducer);

    useEffect(()=>{
      dispatch(getEvents())
    },[])

    if(loadingEvents){
      return(
        <Container>
        <Bars>
        </Bars>
        </Container>
      )
    }
  
    return(
      <Container>
        {events.map(event=>{
          return(
            <Card>
              <Card.Title>
                {event.name}
              </Card.Title>
              <Card.Body>
                {event.date}
                {event.location}
                {event.title}
                {event.description}
              </Card.Body>
            </Card>
          )
        })}
      </Container>
    )
};


EventsComponent.propTypes = {};

EventsComponent.defaultProps = {};

export default EventsComponent;
