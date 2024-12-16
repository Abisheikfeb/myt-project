import './App.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import About from './components/about/About';
import Eaducation from './components/eaducation/eaducation';
import Myskill from './components/myskill/myskills';
import Project from './components/project/project';
import Certificate from './components/certificate/certificate';
import Contact from './components/contact/contact';

function App() {
  return (
   <>

   <Navbar/>
   <Hero/>
   <About/>
   <Eaducation/>
   <Myskill/>
   <Project/>
   <Certificate/>
   <Contact/>
   </>
    
  );
}

export default App;
