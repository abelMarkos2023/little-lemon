import React from 'react';
import './App.css';
import Header from './components/Navbar/Navbar';
import Specials from './components/Specials/Specials';
import HeroSection from './components/Hero/Hero';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Specials />
      <Form />

    </div>
  );
}

export default App;
