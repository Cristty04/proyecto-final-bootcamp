import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/events/action";
import { Button, Card, Container } from "react-bootstrap";
import { Bars } from "react-loader-spinner";
import { Swal } from "sweetalert2/dist/sweetalert2";
import { ApiJson } from "../../store/events/action";
import { useNavigate } from "react-router-dom";

const EventsComponent = () => {
  const dispatch = useDispatch();
  const {events, loadingEvents } = useSelector((state) => state.EventsReducer);

  const {user} = useSelector((state)=> state.AuthReducer)
  useEffect(() => {
    dispatch(getEvents());
  }, []);

  const deleteEvent = (id, name) => {
    console.log({ id });
    
        ApiJson.delete(`/events/${id}`).then((respuesta) => {
          console.log('esto es lo que me muestra', respuesta);
        });
        deleteEvent();
      }
      navigate('/events/');
    };
  };



  if (loadingEvents) {
    return (
      <Container>
        <Bars
        height={100}
          width={100}></Bars>
      </Container>
    );
  }
  if(user && user.id){
    return (
      <Container>
      {events.map((event) => {
        return (
          <Card>

             {/* <Button>
             <p onClick={(ev)=> addEvent(`${event.name}`,`${event.image}`,`${event.date}`,`${event.title}`,`${event.location}`,`${event.description}`)}>
            Editar evento
            </p> 
            </Button>   */}

            <Card.Title className="mt-5 ms-5">{event.name}</Card.Title>
            <Card.Body className="ms-5">
              <img width="500" src={event.image} alt="" />
              <Card.Text className="mt-3">{event.date}</Card.Text>
              <Card.Text>{event.location}</Card.Text>
              <Card.Text>{event.title}</Card.Text>
              <Card.Text className="mb-5">{event.description}</Card.Text>
            </Card.Body>

             <Button>
             <p onClick={(ev)=> deleteEvent(`${event.id},``${event.name}`,)}>
            Eliminar evento
            </p> 
            </Button> 
          </Card>
        );
      })} 
      
    </Container>
      
      
    )
  }

  return (
    <Container>
      {events.map((event) => {
        return (
          <Card>
            <Card.Title className="mt-5 ms-5">{event.name}</Card.Title>
            <Card.Body className="ms-5">
              <img width="500" src={event.image} alt="" />
              <Card.Text className="mt-3">{event.date}</Card.Text>
              <Card.Text>{event.location}</Card.Text>
              <Card.Text>{event.title}</Card.Text>
              <Card.Text className="mb-5">{event.description}</Card.Text>
            </Card.Body>
          </Card>
        );
      })} 
      
    </Container>
  );
};



EventsComponent.propTypes = {};

EventsComponent.defaultProps = {};

export default EventsComponent;
