import React, { useState } from 'react';
import './AgeCalculator.css';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const calculatedAge = Math.floor((today - birthDateObj) / (365.25 * 24 * 60 * 60 * 1000));
    setAge(calculatedAge);
  };
  return (
    <div className="age-calculator-container">
      <h2 className="age-calculator-title">Age Calculator</h2>
      <input
        type="date"
        value={birthDate}
        onChange={event => setBirthDate(event.target.value)}
        className="age-calculator-input"
      />
      <button onClick={calculateAge} className="age-calculator-button">
        Calculate
      </button>
      {age && <p className="age-calculator-result">Your age is {age} years.</p>}
    </div>
  );
  
}

export default AgeCalculator;
