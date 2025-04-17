import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router";
import './index.css'
import './App.css';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import RapuProject from './pages/rapu-project.jsx';
import AboutMePage from './pages/aboutme.jsx';
import DigitalTwinProject from './pages/digital-twin-project.jsx';
import SIGCHIProject from './pages/SIGCHI-project.jsx';
import MyJyuProject from './pages/myJyu-project.jsx';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/rapu-project" element={<RapuProject />} />
      <Route path="/aboutme" element={<AboutMePage />} />
      <Route path="/digital-twin-project" element={<DigitalTwinProject />} />
      <Route path="/myjyu-project" element={<MyJyuProject />} />
      <Route path="/SIGCHI-project" element={<SIGCHIProject />} />
    </Routes>
  </HashRouter>,
)
