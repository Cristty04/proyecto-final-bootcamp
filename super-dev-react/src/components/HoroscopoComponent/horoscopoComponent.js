import React, { useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './horoscopoComponent.module.css';
import { useDispatch, useSelector } from 'react-redux'

import { getHoroscopos } from '../../store/horoscopo/action'
import { Container, Card } from 'react-bootstrap'
import { Bars } from 'react-loader-spinner'


const HoroscopoComponent = () => {
  const dispatch = useDispatch()
  const { horoscopos, loadingHorosocopos } = useSelector((state) => state.HorosocopoReducer);

    useEffect(() => {
    dispatch(getHoroscopos());
  }, [])

  if (loadingHorosocopos) {
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
        );
      })}
    </Container>
  )
};










HoroscopoComponent.propTypes = {};

HoroscopoComponent.defaultProps = {};

export default HoroscopoComponent;