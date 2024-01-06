import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Home from './components/Navbar/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BusinessPlans from './components/Navbar/pages/Businessplans'
import ContactUs from './components/Navbar/pages/ContactUs'
import Aboutus from './components/Navbar/pages/Aboutus'
import Agri from './components/Navbar/pages/agri'
import Automobile from './components/Navbar/pages/automobile'
import Manufacturing from './components/Navbar/pages/manufacturing'
import Service from './components/Navbar/pages/service'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route path="/agribusiness" exact element={<Agri />} />
        <Route path="/automobilebusiness" exact element={<Automobile />} />
        <Route
          path="/manufacturingbusiness"
          exact
          element={<Manufacturing />}
        />
        <Route path="/servicebusiness" exact element={<Service />} />

        <Route path="/businessplans" element={<BusinessPlans />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<Aboutus />} />
      </Routes>
    </Router>
  )
}

export default App
