import React, { useState } from 'react';

export default function ConditionalRender({ choices }) {
  const [selectedValue, setSelectedValue] = useState(choices[0]);
  const [text, setText] = useState('');
  
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setText(trure);
    } else {
      setText(false);
    }
  };

  const checkInput = (e) => {
    if(selectedValue === 'Manuel Giriş') {
      if(text == '') {
        alert('Please enter a name');
        e.preventDefault();
      } 
    } else if (!text) {
        alert('Please select a file');
        e.preventDefault();
    }
  }

  return (
    <>
  {selectedValue === 'Manuel Giriş' ? (
    <div>
      <input 
      type="text" 
      className="participants inp-manual" 
      name="participants" 
      value={text}
      onChange={(e) => setText(e.target.value)}
      id="participants"
      />
    </div>
  ) : (
    <div>
      <input
        type="file"
        className="participants inp-file"
        name="participants"
        accept=".csv"
        value={text}
        onChange={handleFileChange}
        id="participants"
      />
    </div>
  )}
  <select name="roll_choice" id="roll_choice" onChange={handleSelectChange}>
    {choices.map((choice) => (
      <option value={choice} key={choice} id={`roll_form-${choice}`}>
        {choice}
      </option>
    ))}
  </select>
  <button className="roll" type="submit" onClick={( e) => checkInput(e)}>ROLL</button>
    </>
  );
}
