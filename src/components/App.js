import React from 'react';
import '../styles/App.css';
import Rejser from './Rejser'
import TitleCard from './TitleCard'


function App() {
  return (
    <div className="App">
        <TitleCard />
        <Searchbar />
    </div>
  );
}

export default App;
