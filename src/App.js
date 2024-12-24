import React, { useState } from 'react';
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
  const [user, setUser] = useState(null); // Manage login state

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser); // Set user after login
  };

  return (
    <>
      <Navbar onLogin={handleLogin} user={user} />
      <Hero />
      <About />
      <Eaducation />
      <Myskill />
      {/* Pass isLoggedIn as prop to Project */}
      <Project isLoggedIn={!!user} />
      <Certificate />
      <Contact />
    </>
  );
}

export default App;


