import React, { useState } from 'react';
import Navbar from '../Nav/nav';

import "./index.css"
import Footer from '../Footer/footer';

const HomePage = () => {
  const [domainOne, setDomainOne] = useState('');
  // const [domainTwo, setDomainTwo] = useState('');
  const [file, setFile] = useState(null);
  const [domains, setDomains] = useState([]);

  // const domains

  const handleSubmit = (event) => {
    event.preventDefault();

    if(domainOne !== ''){
      //Storing all the submitted domains inside domains[]
      const domainOneRefined = domainOne.toLowerCase();
      const conformURL = domainOneRefined.replace(/^https?:\/\//, '').replace(/^www\./,'').replace(
        '/','').toLowerCase();
      setDomains([...domains, conformURL]);
    }

    console.log(domains, "Current stored domains");

    setDomainOne('');
    setFile(null)
  };




  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <div className='site-wrapper'>
        <div className='web-wrap'>
        <div className="web-container">


                      <h1>Router App - Domain Blacklist</h1>
                      <form onSubmit={handleSubmit}>
                      <div className="input-group">
                        <label>Domain 1:</label>
                        <input 
                          type="text" 
                          value={domainOne} 
                          onChange={(e) => setDomainOne(e.target.value)} 
                        />
                      </div>

                      {/* <div className="input-group">
                        <label>Domain 2:</label>
                        <input 
                          type="text" 
                          value={domainTwo} 
                          onChange={(e) => setDomainTwo(e.target.value)} 
                        />
                      </div> */}

                      <div className="input-group">
                        <label>Upload File: (Inser Link without HTTP) </label>
                        <input 
                          type="file" 
                          onChange={handleFileChange} 
                          accept=".txt"
                          disabled={domainOne !== ''}
                          
                        />
                      </div>
                      <button type="submit" className='btn btn-danger mt-2 btn-d'>
                        <b>Submit</b>
                        </button>
                      </form>

                      </div>

        </div>
        <Footer/>



      </div>




</div>
   
  );
};

export default HomePage;