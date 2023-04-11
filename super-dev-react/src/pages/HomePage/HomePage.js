import React from 'react';
import { useSelector } from 'react-redux';
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';



export default function HomePage(){

  const {user} = useSelector((state)=> state.AuthReducer)
  return(
    <CarouselComponent>
      <h1> Home Page</h1>
      {user && user.id? <h2>Bienvenid@ {user.firstName}</h2>: 'No estás loggeado'} 

      
    </CarouselComponent>
  )
};
