import React from 'react';
import MusicPage from '../MusicPage/MusicPage';
import EventPage from '../EventsPage/EventPage';
import HoroscopePage from '../HoroscopePage/HoroscopePage';
import ArticlePage from '../ArticlePage/ArticlePage';
// import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';


export default function HomePage(){

  return(
    <div>
    <table>
      <MusicPage/>
      <EventPage/>
      <HoroscopePage/>
      <ArticlePage/>
    </table>
      
    </div>
  )
};
