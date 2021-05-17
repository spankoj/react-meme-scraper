import { useState } from 'react';

const MemeText = ({ memes, setMemes }) => {
  //sending down props
  // Creating use states for input and sroll down actions
  const [topInput, setTopInput] = useState('meme');
  const [bottomInput, setBottomInput] = useState('memes_everywhere');
  const [memeId, setMemeId] = useState('');
  // Creating the handler functions
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
            {memes.map(
              (
                meme, //user able to choose from API's objects names
              ) => (
                <option key={meme.id} value={meme.id}>
                  {meme.name}
                </option>
              ),
            )}
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
        src={`https://api.memegen.link/images/${memeId}/${topInput}/${bottomInput}.png`} // using template literals to modify the url to show
        alt="meme"
        className="img"
      />
    </div>
  );
};

export default MemeText;
