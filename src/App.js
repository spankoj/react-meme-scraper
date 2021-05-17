import './App.css';
import { useEffect, useState } from 'react';
import MemeText from './MemeText.js';

function App() {
  // Use stat for meme -> meme object part of JSON from API
  const [memes, setMemes] = useState([]); //Empty array! for the fetched objects
  // fetch with useEffect hook
  useEffect(() => {
    fetch('https://api.memegen.link/templates/') //fetch string
      .then((r) => r.json()) //convert it to JSON
      .then(setMemes); //update
  }, []);
  return (
    <div className="container">
      <header className="header">
        <h1>Random Meme Generator</h1>
      </header>
      <h2>Select meme and generate custom text!</h2>
      <MemeText memes={memes} setMemes={setMemes} />
    </div>
  );
}

export default App;
