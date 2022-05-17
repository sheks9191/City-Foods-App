import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Menus from './pages/Menus';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';
import FooterIcons from './components/FooterIcons';


function App() {
  return (
   
    <>

      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menus/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/> 
        </Routes>
        <FooterIcons/>
      </Router>
    </>
  );
}

export default App;
