import React from 'react';
import './App.css';
import banner from './banner.png';
import wc from './wc';

const divStyle = {
  background: '#80c9d2',
  padding: '10px'
};

const paddingStyle = {
  padding: '3px'
};

function App() {
  return (
    <div style={divStyle} className="App">
      <h2>React</h2>
      <img src={banner}></img>
    { /* web component inside react */ }
      <div style={paddingStyle}>
        <mf-link n="3"></mf-link>
      </div>
      <div style={paddingStyle}>
        <mf-link n="4"></mf-link>
      </div>
    </div>
  );
}

export default App;
