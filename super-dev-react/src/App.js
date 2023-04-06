import NavigationComponent from './components/NavigationComponent/NavigationComponent'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import EventPage from './pages/EventsPage/EventPage';
import HoroscopePage from './pages/HoroscopePage/HoroscopePage';
import MusicPage from './pages/MusicPage/MusicPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <NavigationComponent></NavigationComponent>
      <div>
      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route exact path="/shop" element={<ShopPage/>}></Route>
        <Route exact path="/articles" element={<ArticlePage/>}></Route>
        <Route exact path="/events" element={<EventPage/>}></Route>
        <Route exact path="/music" element={<MusicPage/>}></Route>
        <Route exact path="/horoscope" element={<HoroscopePage/>}></Route>
        <Route exact path="/about-us" element={<AboutUsPage/>}></Route>
        
        <Route exact path="/login" element={<LoginPage/>}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
