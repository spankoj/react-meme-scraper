import './App.css';
import { useState } from 'react';
import MemeText from './MemeText.js';

// import SelectMeme from './SelectMeme.js';

const memesArr = [
  {
    id: 'aag',
    name: 'Ancient Aliens Guy',
    lines: 2,
    styles: [],
    blank: 'https://api.memegen.link/images/aag.png',
    example: 'https://api.memegen.link/images/aag/_/aliens.png',
    source: 'http://knowyourmeme.com/memes/ancient-aliens',
    _self: 'https://api.memegen.link/templates/aag',
  },

  {
    id: 'ackbar',
    name: "It's A Trap!",
    lines: 2,
    styles: [],
    blank: 'https://api.memegen.link/images/ackbar.png',
    example: "https://api.memegen.link/images/ackbar/_/it's_a_trap!.png",
    source: 'http://knowyourmeme.com/memes/its-a-trap',
    _self: 'https://api.memegen.link/templates/ackbar',
  },

  {
    id: 'afraid',
    name: 'Afraid to Ask Andy',
    lines: 2,
    styles: [],
    blank: 'https://api.memegen.link/images/afraid.png',
    example:
      "https://api.memegen.link/images/afraid/i_don't_know_what_this_meme_is_for/and_at_this_point_i'm_too_afraid_to_ask.png",
    source: 'http://knowyourmeme.com/memes/afraid-to-ask-andy',
    _self: 'https://api.memegen.link/templates/afraid',
  },
];

function App() {
  const [memes, setMemes] = useState(memesArr);

  return (
    <div className="container">
      <header className="header">
        <h1>Random Meme Generator</h1>
        {/* <img src={image} alt="meme" className="img" /> */}
      </header>
      <h2>Select meme and generate custom text!</h2>
      <MemeText memes={memes} setMemes={setMemes} />
    </div>
  );
}

export default App;
