import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Consulting from './components/Navbar/pages/Consulting.js';
import Services from './components/Navbar/pages/Services.js';
import Home from './components/Navbar/pages/Home.js';
import Products from './components/Navbar/pages/Products.js';
import Marketing from './components/Navbar/pages/Marketing.js';
import Contactus from './components/Navbar/pages/Contactus.js';

function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
         <Route path='/' Component={Home}/>
         <Route path='/services' Component={Services}/>
         <Route path='/contact-us' Component={Contactus}/>
         <Route path='/marketing' Component={Marketing}/>
         <Route path='/products' Component={Products}/>
         <Route path='/consulting' Component={Consulting}/>
      </Routes>
    </Router>
  );
}

export default App;
