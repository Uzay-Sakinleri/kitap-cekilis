import React, { useState } from 'react';

export default function ConditionalRender({ choices }) {
  const [selectedValue, setSelectedValue] = useState(choices[0]);
  const [showManualInput, setShowManualInput] = useState(true);

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
    setShowManualInput(e.target.value === 'Manuel Giriş');
  };

  return (
    <>
  {selectedValue === 'Manuel Giriş' ? (
    <div>
      <input type="text" className="participants inp-manual" name="participants" id="participants"/>
    </div>
  ) : (
    <div>
      <input
        type="file"
        className="participants inp-file"
        name="participants"
        accept=".csv"
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
    </>
  );
}
