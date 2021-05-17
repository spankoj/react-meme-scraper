import { useState } from 'react';

const MemeText = ({ memes, setMemes }) => {
  const [topInput, setTopInput] = useState('meme');
  const [bottomInput, setBottomInput] = useState('memes_everywhere');
  const [memeId, setMemeId] = useState('');

  const handleChangeTop = (e) => setTopInput(e.target.value);
  const handleChangeBottom = (e) => setBottomInput(e.target.value);
  const handleSelect = (e) => {
    setMemeId(e.target.value);
  };

  return (
    <div className="interface">
      <div className="input">
        <div className="a">
          <h3>Choose meme</h3>
          <select name="name" id="id" onChange={handleSelect}>
            {memes.map((meme) => (
              <option key={meme.id} value={meme.id}>
                {meme.name}
              </option>
            ))}
          </select>
        </div>
        <div className="b">
          <h3>Head text</h3>
          <input
            onChange={handleChangeTop}
            placeholder="Top"
            value={topInput}
          />
        </div>
        <div className="c">
          <h3>Bottom text</h3>
          <input
            onChange={handleChangeBottom}
            placeholder="Bottom"
            value={bottomInput}
          />
        </div>
        <div className="d btn">
          <button>Download</button>
        </div>
      </div>
      <img
        src={`https://api.memegen.link/images/${memeId}/${topInput}/${bottomInput}.png`}
        alt="meme"
        className="img"
      />
    </div>
  );
};

export default MemeText;
