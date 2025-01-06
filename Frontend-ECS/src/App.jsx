import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import AboutUs from './pages/home/AboutUs.jsx';
import Events from './pages/events/Events.jsx';
import Members from './pages/members/Members.jsx';
import Developers from './pages/developers/Developers.jsx';
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';
import Profile from './pages/Profile.jsx';
import ResourceHub from './pages/Resource Hub/ResourceHub.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
// import PrivateRoute from './components/PrivateRoute.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/members" element={<Members />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/Resource+Hub" element={<ResourceHub />} />
        
       
        <Route path="/profile" element={<Profile />} />
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
