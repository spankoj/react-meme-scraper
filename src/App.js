import './App.css';
import { useState } from 'react';
import image from './0_meme.jpg';
import RandomMeme from './RandomMeme.js';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Random Meme Generator</h1>
        <img src={image} alt="meme" className="img" />
      </header>
      <h2>Generate custom text!</h2>
      <RandomMeme />
    </div>
  );
}

export default App;
