// src/App.js
import React from 'react';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; // Import the HomePage component
import './App.css';

function App() {
  return (
    <div className="App">
      <Topbar />
      <main>
        <HomePage /> {/* Use the HomePage component here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
