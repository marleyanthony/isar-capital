import React from 'react';
import './styles/app.css';

import Nav from './components/Navbar/Nav';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Main from './components/MainContent/Main';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
    </>
  );
}

export default App;
