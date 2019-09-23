import React from 'react';
import './App.css';
import banner from './banner.png';
import wc from './wc';

function App() {
  return (
    <div className="App">
      <img src={banner}></img>
    { /* web component inside react */ }
      <mf-link n="3"></mf-link>
    </div>
  );
}

export default App;
