import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Home';
import Courses from './components/Courses';
import Signup from './components/Signup';


function App() {



  return (
    <>

      <Router>
      <Navbar />
        
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        
        <Footer />
      </Router>
    </>
  )
}

export default App
