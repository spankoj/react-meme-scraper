import { useState } from 'react';

const MemeText = () => {
  // const handleClick = () => useState();
  const [topInput, setTopInput] = useState('meme');
  const [bottomInput, setBottomInput] = useState('memes_everywhere');
  const handleChangeTop = (e) => setTopInput(e.target.value);
  const handleChangeBottom = (e) => setBottomInput(e.target.value);

  return (
    <div className="interface">
      <div className="input">
        <div>
          <h3>Head</h3>
          <input
            onChange={handleChangeTop}
            placeholder="Top"
            value={topInput}
          />
        </div>
        <div>
          <h3>Button</h3>
          <input
            onChange={handleChangeBottom}
            placeholder="Bottom"
            value={bottomInput}
          />
        </div>
      </div>
      <img
        src={`https://api.memegen.link/images/buzz/${topInput}/${bottomInput}.png`}
        alt="meme"
        className="img-show"
      />
    </div>
  );
};

export default MemeText;
