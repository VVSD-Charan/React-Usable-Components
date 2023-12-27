import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/Navbar/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/Navbar/pages/Services';
import ContactUs from './components/Navbar/pages/ContactUs';
import SignUp from './components/Navbar/pages/SignUp';
import Loans from './components/Navbar/pages/Loans';
import Business from './components/Navbar/pages/Business';
import Aboutus from './components/Navbar/pages/Aboutus';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/business' element={<Business/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/loans' element={<Loans/>} />
        <Route path='/about-us' element = {<Aboutus/> }/>
      </Routes>
    </Router>
  );
}

export default App;
