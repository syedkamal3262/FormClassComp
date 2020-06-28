import React from 'react';
import './App.css';
import Home from './pages/Home'

function App() {
  const appStyle={
    height:window.innerHeight
  }
  return (
    <div className="App"
    style={appStyle}>
      <Home />
    </div>
  );
}

export default App;
