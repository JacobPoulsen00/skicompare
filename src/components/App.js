import React from 'react';
import '../styles/App.css';
import Navbar from './Navbar'
import TitleCard from './TitleCard'
import Footer from './Footer';
import { HashRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Navbar />
        <TitleCard />
        <Footer />
    </div>
  );
}

export default App;
