import React, { useState } from 'react';
import Footer from "../Footer/footer";
import './index.css'; // Import the CSS file for styling

const Focus = () => {
  const [textBox1Value, setTextBox1Value] = useState('');
  const [textBox2Value, setTextBox2Value] = useState('');

  const handleTextBox1Change = (event) => {
    setTextBox1Value(event.target.value);
  };
  
  const handleTextBox2Change = (event) => {
    setTextBox2Value(event.target.value);
  };

  const handleSubmit = () => {
    // You can perform any actions with the values of the text boxes here
    console.log('TextBox 1 Value:', textBox1Value);
    console.log('TextBox 2 Value:', textBox2Value);
  };

  return (
    <div className="focus-container">
      <h1>Testing Focus</h1>

      {/* First text box */}
      <input
        type="text"
        placeholder="Enter Starting Time"
        value={textBox1Value}
        onChange={handleTextBox1Change}
        className="text-box"
      />

      {/* Second text box */}
      <input
        type="text"
        placeholder="Enter Ending Time"
        value={textBox2Value}
        onChange={handleTextBox2Change}
        className="text-box"
      />

      {/* Submit button */}
      <button onClick={handleSubmit} className="submit-button">Submit</button>

      <Footer />
    </div>
  );
};

export default Focus;