import React from 'react';
import house from './House.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        𝘏𝘰𝘶𝘴𝘦 4 𝘚𝘶𝘮𝘮𝘦𝘳
        </p>
        <img src={house} className="App-logo" alt="logo" />
        <p>
          Spacious 4 bedroom property available between July and August '21
        </p>
        <p>
          Includes a cooked breakfast!
        </p>
        <p>
          £0.00 per night
        </p>
      </header>
    </div>
  );
}

export default App;