import React from 'react';
import './styles/app.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Main from './components/MainContent/Main';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </>
  );
}

export default App;
