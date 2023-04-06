import React from 'react';
import { useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getHoroscopes } from '../../store/horoscope/action';
import { Bars } from 'react-loader-spinner';

const HoroscopeComponent = () => {
    const dispatch = useDispatch()
    const {horoscopes,loadingHoroscopes} = useSelector((state)=> state.HoroscopeReducer)
  
    useEffect(()=>{ 
        dispatch(getHoroscopes())
     },[])

     if(loadingHoroscopes){
        return(
            <Container>
                <Bars
                height={100}
                width={100}>
                </Bars>
            </Container>
        )
     }
     
    return( 
        <Container >
        {horoscopes.map(horoscope=>{
            return(
                <Card className='px-4 py-2 mb-3'>
                    <Card.Image>
                    {horoscope.sign}
                           </Card.Image>
                         <Card.Title>
                            {horoscope.name}
                        </Card.Title>
                        <Card.Body>
                            {horoscope.prediction}
                        </Card.Body>
                        <Card.Body>
                            {horoscope.lovers}
                        </Card.Body>
                </Card>
            )
        })}
        </Container>
    )
};


export default HoroscopeComponent;
