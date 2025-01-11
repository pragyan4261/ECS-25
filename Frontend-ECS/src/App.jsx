import React ,{useEffect}from 'react';
import { Routes, Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();

  useEffect(() => {
    // Save the current page to localStorage on route change
    localStorage.setItem("lastPage", location.pathname);
  }, [location]);

  useEffect(() => {
    // Redirect to the saved page on load
    const lastPage = localStorage.getItem("lastPage");
    if (lastPage) {
      window.history.replaceState({}, "", lastPage);
    }
  }, []);

  return (
   <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/annual-attraction" element={<Events />} />
        <Route path="/members" element={<Members />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/Resource+Hub" element={<ResourceHub />} />
        
       
        <Route path="/profile" element={<Profile />} />
       
      </Routes>
      <Footer />
      </>
  );
}

export default App;
