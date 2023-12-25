import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/Navbar/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/Navbar/pages/Services';
import Products from './components/Navbar/pages/Products';
import ContactUs from './components/Navbar/pages/ContactUs';
import SignUp from './components/Navbar/pages/SignUp';
import Marketing from './components/Navbar/pages/Marketing';
import Consulting from './components/Navbar/pages/Consulting';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/marketing' element={<Marketing/>} />
        <Route path='/consulting' element={<Consulting/>} />
      </Routes>
    </Router>
  );
}

export default App;
