import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Service from './pages/Service';
import ContactUs from './pages/ContactUs';
import OurWorkPage from './pages/OurWork.jsx'
import Layout from './components/Layout';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="services" element={<Service />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
            {/* <Route path="our-work" element={<OurWorkPage />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
