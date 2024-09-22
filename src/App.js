import React from 'react';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import './App.css'; // Optional for additional global styles

function App() {
  return (
    <div className="App">
      <Topbar />
      {/* Add more components or routes here for the landing page */}
      
      {/* Example landing page content */}
      <main>
        <h1>Welcome to POZE</h1>
        <p>Your go-to solution for managing business operations.</p>
        {/* Additional content can be added here */}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
