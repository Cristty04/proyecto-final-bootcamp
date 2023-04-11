
import NavigationComponent from './components/NavigationComponent/NavigationComponent';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import EventPage from './pages/EventsPage/EventPage';
import HoroscoposPage from './pages/HoroscoposPage/HoroscoposPage';
import MusicPage from './pages/MusicPage/MusicPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';




function App() {
  const {user} = ((state)=> state.AuthReducer)
  return (
    <div className="App">
      <NavigationComponent></NavigationComponent>
      <div>
      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route exact path="/articles" element={<ArticlePage/>}></Route>
        <Route exact path="/events" element={<EventPage/>}></Route>
        <Route exact path="/music" element={<MusicPage/>}></Route>
        <Route exact path="/horoscopos" element={<HoroscoposPage/>}></Route>
        <Route exact path="/about-us" element={<AboutUsPage/>}></Route>
        <Route exact path="/login" element={<LoginPage/>}></Route>
        <Route exact path="/profile" element={user && user.id?<ProfilePage/>: <Navigate to="/login" replace></Navigate>}></Route>                

      </Routes>
      </div>
    </div>
  );
}

export default App;
