import './App.css'
import Navbar from './components/Navbar'
import MobileNavbar from './components/MobileNavbar'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <Router>
    <div className='min-h-screen relative bg-white dark:bg-gray-900 overflow-auto'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <MobileNavbar />
    </div>
  </Router>
    
  )
}

export default App
