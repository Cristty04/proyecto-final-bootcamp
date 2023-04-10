import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHoroscopos } from '../../store/horoscopos/action';
import { Card, Container } from 'react-bootstrap';
import { Bars } from 'react-loader-spinner';


const HoroscoposComponent = () => {

  const dispatch = useDispatch();
  const { horoscopos, loadingHoroscopos } = useSelector((state) => state.HoroscoposReducer);

    useEffect(()=>{
      dispatch(getHoroscopos())
    },[])

    if(loadingHoroscopos){
      return(
        <Container>
        <Bars>
        </Bars>
        </Container>
      )
    }
  
    return(
      <Container>
        {console.log(horoscopos)}
        {horoscopos.map(horoscopo=>{
          return(
            <Card>
            
              <Card.Title m-5>
                {horoscopo.name}
              </Card.Title>
              <Card.Body> 
             
              {horoscopo.sign}
                   
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


export default HoroscoposComponent