import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/events/action";
import { Card, Container } from "react-bootstrap";
import { Bars } from "react-loader-spinner";

const EventsComponent = () => {
  const dispatch = useDispatch();
  const { events, loadingEvents } = useSelector(
    (state) => state.EventsReducer);

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  if (loadingEvents) {
    return (
      <Container>
        <Bars></Bars>
      </Container>
    );
  }

  return (
    <Container>
      {events.map((event) => {
        return (
          <Card>
            <Card.Title className="ms-5 mt-5">{event.name}</Card.Title>
            <Card.Body className="ms-5">
              <img width="500" src={event.image} alt="" />
              <Card.Text className="mt-5">{event.date}</Card.Text>
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
