import React from 'react';
import '../styles/App.css';
import Navbar from './Navbar'
import TitleCard from './TitleCard'
import Footer from './Footer';
import { HashRouter as Router, Route } from 'react-router-dom'; //Use Route for redirect path on SQL-query


function App() {
  return (
    <Router>
      <div>
          <Navbar />
          <TitleCard />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
