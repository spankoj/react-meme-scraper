import { useState } from 'react';

const SelectMeme = ({ memes, setMemes }) => {
  const [imgUrl, setImgUrl] = useState('');
  const handleSelect = (e) => {
    setImgUrl(e.target.value);
  };

  return (
    <div className="interface">
      <div className="input">
        <select name="name" id="id" onChange={handleSelect}>
          {memes.map((meme) => (
            <option key={meme.id} value={meme.blank}>
              {meme.name}
            </option>
          ))}
        </select>
      </div>
      {/* <button className="btn-input" onClick={handleInput}>
        Enter
      </button> */}
      <img src={imgUrl} alt="meme" className="img-show" />
    </div>
  );
};
export default SelectMeme;
