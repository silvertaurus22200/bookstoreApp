import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Courses from './components/Courses';
import Signup from './components/Signup';
import {Toaster} from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';


function App() {

  const [userAuth, setUserAuth] = useAuth();

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/courses' element={userAuth ? <Courses /> : <Home />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>

        <Footer />
        <Toaster />
      </Router>
    </>
  )
}

export default App
