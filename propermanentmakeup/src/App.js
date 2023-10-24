import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './pages/Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import About from './pages/About';
import References from './pages/References';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="references" element={<References/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="portfolio" element={<Portfolio/>} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
