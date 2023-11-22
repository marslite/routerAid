import logo from './logo.svg';
import HomePage from './Homepage';
import Navbar from './Nav/nav';
import Footer from './Footer/footer';
import { Routes, Route, Navigate, HashRouter  } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div>
      <Navbar/>

{/* 
      <div className="alert alert-success" role="alert">
      <h4 className="alert-heading">Well done!</h4>
    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <hr/>
    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div> */}

<div className="card text-bg-light mb-3" style={{"max-width": "18rem;"}}>
  <div className="card-header"><b>Multiblock Beta</b></div>
  <div className="card-body">
    <h5 className="card-title">Protect Your Network with Multiblock - Your Bulk Domain Blacklisting Solution</h5>
    <p className="card-text">Stay in control and maintain a safe browsing environment with Multiblock. Designed to seamlessly integrate with Pi-Hole, Multiblock empowers you to bulk blacklist multiple domains with ease. Whether you're guarding against malicious cyber threats, blocking access to adult content, or keeping gambling sites at bay, Multiblock offers a robust solution for individuals and organizations alike. Keep your network clean and your users protected with our intuitive, user-friendly interface that makes domain management straightforward and effective. Say goodbye to unwanted content and hello to peace of mind with Multiblock.</p>
  </div>
</div>


      <HashRouter>

        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </HashRouter>

  
  </div>


  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );



  );
}

export default App;
