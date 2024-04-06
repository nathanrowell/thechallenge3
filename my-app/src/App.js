import React, { useState } from 'react';
import ListNames from './player.tsx';
import Purge1 from './challenge1.tsx';
import ReloadButton from './reloadbutton.tsx'; // Import ReloadButton component
import './App.css'; // Import styles

function App() {
  const [showPurge1, setShowPurge1] = useState(false); // State to toggle Purge1 visibility

  // Function to toggle Purge1 visibility
  const togglePurge1 = () => {
    setShowPurge1(!showPurge1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/en/b/b7/Challenge_season_30_logo.jpg" className="App-logo" alt="logo" />
        <p>
          The Challenge: Dirty XXX Simulator
        </p>
        <p> <ReloadButton /> {/* Assuming ReloadButton doesn't take props */}</p>
      </header>
      <hr />
      <ListNames /> {/* Render ListNames component */}
      <hr />
      <button onClick={togglePurge1} className="button">Opening Purge</button> {/* Button to toggle Purge1 visibility */}
      {showPurge1 && <Purge1 />} {/* Render Purge1 if showPurge1 is true */}
    </div>
  );
}

export default App;