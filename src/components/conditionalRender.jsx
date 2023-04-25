import React, { useState } from 'react';

export default function ConditionalRender({ choices }) {
  const [selectedValue, setSelectedValue] = useState(choices[0]);
  const [showManualInput, setShowManualInput] = useState(true);

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
    setShowManualInput(e.target.value === 'Manual Entry');
  };

  return (
    <>
  {selectedValue === 'Manual Entry' ? (
    <div>
      <input type="text" className="participants inp-manual" name="participants" />
    </div>
  ) : (
    <div>
      <input
        type="file"
        className="participants inp-file"
        name="participants"
        accept=".csv"
        id="inp-file"
      />
    </div>
  )}
  <select name="roll_form" id="roll_form" onChange={handleSelectChange}>
    {choices.map((choice) => (
      <option value={choice} key={choice} id={`roll_form-${choice}`}>
        {choice}
      </option>
    ))}
  </select>
    </>
  );
}
