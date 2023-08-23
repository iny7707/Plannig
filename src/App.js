import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Map from './pages/Map';
import Planning from './pages/Planning';
import Mypage from './pages/Mypage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PasswordModify from './pages/PasswordModify';
import NotFound from './pages/NotFound';
import Restaurant from './pages/Restaurant';
import Mypage_review from './pages/Mypage_review';
import Mypage_planning from './pages/Mypage_planning';
import MyFavorite from './pages/MyFavorite';
import UserInfo from './pages/UserInfo';


// import { Swiper, SwiperSlide } from "swiper/react";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/map' element={<Map />} />
        <Route path='/planning' element={<Planning />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/password-modify' element={<PasswordModify />} />
        <Route path='/Restaurant' element={<Restaurant />} />
        <Route path='/mypage_review' element={<Mypage_review />} />
        <Route path='/mypage_planning' element={<Mypage_planning />} />
        <Route path='/mypage_favorite' element={<MyFavorite />} />
        <Route path='/user-info' element={<UserInfo />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
