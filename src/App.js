import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from '../src/home/Home.js'
import Careers from './Careers.js';
import './App.css';
import SDE from './roles/SDE.js';
import Manager from './roles/Manager.js';
import Services from './Services.js';
import Team from './Team.js';
import Contact from './Contact.js';
import Partners from './Partners.js';
import Finance from './services/Finance.js'
import Legalities from './services/Legalities.js'
import Collaborations from './services/Collaborations.js';
import Business from './services/Business.js';
import Insurance from './services/Insurance.js';
import Role from './roles/Role.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/careers" element={<Careers/>}/>
          <Route path="/careers-developer" element={<SDE/>}/>
          <Route path="/careers-manager" element={<Manager/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/insurance" element={<Insurance/>}/>
          <Route path="/finance" element={<Finance/>}/>
          <Route path="/legalities" element={<Legalities/>}/>
          <Route path="/collaborations" element={<Collaborations/>}/>
          <Route path="/business" element={<Business/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/partners" element={<Partners/>}/>
          <Route path="/job/:id" element={<Role />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
