import React, { useState } from 'react';
import Footer from "../Footer/footer";
import './index.css'; // Import the CSS file for styling

const Focus = () => {
  const [textBox1Value, setTextBox1Value] = useState('');
  const [textBox2Value, setTextBox2Value] = useState('');
  const [textBox3Value, setTextBox3Value] = useState('');
  const [websitesArray, setWebsitesArray] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleTextBox1Change = (event) => {
    setTextBox1Value(event.target.value);
  };

  const handleTextBox2Change = (event) => {
    setTextBox2Value(event.target.value);

  };

  const handleTextBox3Change = (event) => {
    setTextBox3Value(event.target.value);
  };

  const handleSubmit = () => {
    // Check if both time values are in the correct format before submitting
    if (/^\d{2}:\d{2}$/.test(textBox1Value) && /^\d{2}:\d{2}$/.test(textBox2Value)) {
      // Extract hours and minutes from the time values
      const startTime = textBox1Value.split(':');
      const endTime = textBox2Value.split(':');

      // Convert hours and minutes to minutes for easier comparison
      const startMinutes = parseInt(startTime[0]) * 60 + parseInt(startTime[1]);
      const endMinutes = parseInt(endTime[0]) * 60 + parseInt(endTime[1]);

      // Check if the starting time is earlier than the ending time
      if (startMinutes < endMinutes) {

        // Parse the string, eliminate leading 'www.', and save in array
        const parsedWebsites = textBox3Value
          .split(' ')
          .map(website => website.replace(/^www\./, ''));

        setWebsitesArray((prevWebsitesArray) => {
          console.log('Previous Websites Array:', prevWebsitesArray);
          console.log('Updated Websites Array:', parsedWebsites);
          return parsedWebsites;
        });


        // You can perform any actions with the values of the text boxes here
        console.log('TextBox 1 Value:', textBox1Value);
        console.log('TextBox 2 Value:', textBox2Value);
        console.log('TextBox 3 Value:', textBox3Value);

        // Build and return an array of JSON objects
        const resultArray = parsedWebsites.map(parsedWebsite => ({
          parsedWebsites: parsedWebsite,
          textBox1Value: textBox1Value,
          textBox2Value: textBox2Value
        }));

        // You can perform any actions with the values of the text boxes here
        console.log('Result Array:', resultArray);

        setWebsitesArray(parsedWebsites);

        setErrorMessage(''); // Clear any previous error message
      } else {
        setErrorMessage('Please make sure the starting time is earlier than the ending time');
      }
    } else {
      setErrorMessage('Please make sure both time values are in the format HH:mm (e.g., 12:34)');
    }



  };

  return (
    <div className="focus-container">
      <h1>Testing Focus</h1>

      {/* Third, longer text box */}
      <input
        type="text"
        placeholder="Enter the websites address Separated with Space(' ')"
        value={textBox3Value}
        onChange={handleTextBox3Change}
        className="long-text-box"
      />


      {/* First text box */}
      <input
        type="text"
        placeholder="Enter Start Time (00:00)"
        value={textBox1Value}
        onChange={handleTextBox1Change}
        className="text-box"
      />

      {/* Second text box */}
      <input
        type="text"
        placeholder="Enter End Time (00:00)"
        value={textBox2Value}
        onChange={handleTextBox2Change}
        className="text-box"
      />

      {/* Submit button */}
      <button onClick={handleSubmit} className="submit-button">Submit</button>

      {/* Display error message, if any */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <Footer />
    </div>
  );
};

export default Focus;