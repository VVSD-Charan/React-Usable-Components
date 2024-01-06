import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Home from './components/Navbar/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BusinessPlan from './components/Navbar/pages/Businessplans'
import ContactUs from './components/Navbar/pages/ContactUs'
import Aboutus from './components/Navbar/pages/Aboutus'
import Agri from './components/Navbar/pages/agri'
import Automobile from './components/Navbar/pages/automobile'
import Manufacturing from './components/Navbar/pages/manufacturing'
import Agriculture_business from './components/services/Agriculture_business'
import Service_business from './components/services/Service_business'
import Automobile_business from './components/services/Automobile_business'
import Manufacturing_business from './components/services/Manufacturing_business'

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

        <Route path="/business-plans" element={<BusinessPlan />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<Aboutus />} />

        {/* Services routes  */}
        <Route path="/services/agriculture-business" element={<Agriculture_business />} />
        <Route path="/services/service-business" element={<Service_business />} />
        <Route path="/services/automobile-business" element={<Automobile_business />} />
        <Route path="/services/manufacturing-business" element={<Manufacturing_business />} />
        
      </Routes>
    </Router>
  )
}

export default App
