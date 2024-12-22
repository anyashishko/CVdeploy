import React from 'react';
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './styles/App.module.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
