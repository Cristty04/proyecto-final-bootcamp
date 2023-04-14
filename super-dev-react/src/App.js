
import NavigationComponent from './components/NavigationComponent/NavigationComponent';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ForoPage from './pages/ForoPage/ForoPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import EventPage from './pages/EventsPage/EventPage';
import HoroscoposPage from './pages/HoroscoposPage/HoroscoposPage';
import MusicPage from './pages/MusicPage/MusicPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ChatbotComponent from './components/ChatbotComponent/ChatbotComponent';
import Formularios from './components/Formularios/Formularios';
import { useSelector } from 'react-redux';
import Forms from './components/Forms/Forms';




function App() {
  const {user} = useSelector((state)=> state.AuthReducer)
  return (
    <div className="App">
      <NavigationComponent/>
      <div>
      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route exact path="/foro" element={<ForoPage/>}></Route>
        <Route exact path="/articles" element={<ArticlePage/>}></Route>
        <Route exact path="/events" element={<EventPage/>}></Route>
        <Route exact path="/music" element={<MusicPage/>}></Route>
        <Route exact path="/horoscopos" element={<HoroscoposPage/>}></Route>
        <Route exact path="/about-us" element={<AboutUsPage/>}></Route>
        <Route exact path="/login" element={<LoginPage/>}></Route>
        <Route path="/formularios" element={user && user.id?<Formularios/> : <Navigate to="/login" replace></Navigate>}></Route>
        <Route path="/edit/:id" element={user && user.id?<Forms/> : <Navigate to="/login" replace></Navigate>}></Route>                                

      </Routes>
      </div>

      <ChatbotComponent/>
    </div>
  );
}

export default App;
