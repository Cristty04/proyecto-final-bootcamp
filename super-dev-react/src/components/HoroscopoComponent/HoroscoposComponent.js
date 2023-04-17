import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHoroscopos } from "../../store/horoscopos/action";
import { Card, Container } from "react-bootstrap";
import { Bars } from "react-loader-spinner";


const HoroscoposComponent = () => {
  const dispatch = useDispatch();
  const { horoscopos, loadingHoroscopos } = useSelector(
    (state) => state.HoroscoposReducer
  );

  useEffect(() => {
    dispatch(getHoroscopos());
  }, []);

  if(loadingHoroscopos) {
    return(
      <Container>
        <Bars 
        height={100}
        width={100}>
        </Bars>
      </Container>
    )
  }

  return (
    <Container>
      {horoscopos.map(horoscopo=>{
        return(
          <Card className='px-4 py-2 mb-3'>
              <img width="100" className='mt-5 ms-2' src={horoscopo.sign} alt="" />
            <Card.Body>
            <Card.Title className= 'mt-3'>{horoscopo.name}</Card.Title>
              <Card.Text className='mt-3'>{horoscopo.date}</Card.Text>
              <Card.Text>{horoscopo.description}</Card.Text>
              <Card.Text className="mb-5">{horoscopo.lovers}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default HoroscoposComponent;
