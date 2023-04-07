import React from 'react';
import MusicPage from '../MusicPage/MusicPage';
import EventPage from '../EventsPage/EventPage';
import HoroscopoPage from '../HoroscopoPage/HoroscopoPage';
import ArticlePage from '../ArticlePage/ArticlePage';
// import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';


export default function HomePage(){

  return(
    <div>
    <table>
      <MusicPage/>
      <EventPage/>
      <HoroscopoPage/>
      <ArticlePage/>
    </table>
      
    </div>
  )
};
