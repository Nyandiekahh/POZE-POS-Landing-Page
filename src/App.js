// src/App.js

import React from 'react';
import Topbar from './components/Topbar';
import './App.css'; // Optional if you want to add more global styling

function App() {
  return (
    <div className="App">
      <Topbar />
      {/* You can add more components here for the landing page */}
    </div>
  );
}

export default App;
