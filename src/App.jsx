import './App.css';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import AnimatedGreeting from './components/AnimatedGreeting';

function App() {
  return (
    <Router>
      <AnimatedGreeting />
      <div className='min-h-screen relative bg-white dark:bg-gray-900 overflow-auto'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <MobileNavbar />
      </div>
    </Router>
  );
}

export default App;