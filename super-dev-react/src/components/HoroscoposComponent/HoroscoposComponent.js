import React, { useEffect } from 'react';
 import PropTypes from 'prop-types';
 import styles from './HoroscoposComponent.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { getHoroscopos } from '../../store/horoscopos/action'
import { Container, Card } from 'react-bootstrap'
import { Bars } from 'react-loader-spinner'


const HoroscoposComponent = () => {
  const dispatch = useDispatch()
  const {horoscopos, loadingHorosocopos} = useSelector((state) => state.HorosocoposReducer);

    useEffect(()=> {
    dispatch(getHoroscopos());
  },[])

  if (loadingHorosocopos){
    return (
      <Container>
        <Bars
          height={100}
          width={100}>
        </Bars>
      </Container>
    );
  }
  return (
    <Container>
      {horoscopos.map(horoscopo=> {
        return (
          <Card className='px-4 py-2 mb-3'>
            <Card.Title>
              {horoscopo.name}
            </Card.Title>
            <Card.Body>
              {horoscopo.predicition},
              {horoscopo.lovers}
            </Card.Body>
          </Card>
        )
      })}
    </Container>
  )
};



//   HoroscoposComponent.propTypes = {};

//  HoroscoposComponent.defaultProps = {};

export default HoroscoposComponent;