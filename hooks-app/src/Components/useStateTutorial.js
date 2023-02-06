import React, { useState } from "react";

const StateTutotal = () => {
  const [inputValue, setInputValue] = useState("Pedro");

  const onChange = (event) => {
    let userValue = event.target.value;
    setInputValue(userValue);
  };

  return (
    <div>
      <input type="text" placeholder="Enter your name" onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTutotal;
