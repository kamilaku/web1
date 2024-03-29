import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './pages/Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import About from './pages/About';
import References from './pages/References';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Brows from './pages/services/Brows';
import Lips from './pages/services/Lips';
import Eyelids from './pages/services/Eyelids';
import MedicalPigmentation from './pages/services/MedicalPigmentation';
import Cover from './pages/services/Cover';
import Removal from './pages/services/Removal';
// import Courses from './pages/services/Courses';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />

          <Route path="services" element={<Services/>} />
            <Route path="services/brows" element={<Brows/>} />
            <Route path="services/lips" element={<Lips/>} />
            <Route path="services/eyelids" element={<Eyelids/>} />
            <Route path="services/medicalpigmentation" element={<MedicalPigmentation/>} />
            <Route path="services/cover" element={<Cover/>} />
            <Route path="services/removal" element={<Removal/>} />

          {/* <Route path="references" element={<References/>} /> */}
          <Route path="contact" element={<Contact/>} />
          <Route path="portfolio" element={<Portfolio/>} />
          {/* <Route path="courses" element={<Courses/>} /> */}
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
