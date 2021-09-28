import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App ">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Student. EES
        </p>
        <a
          className="App-link"
          href="https://student-ees.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          One Day ... to Day One.
        </a>
      </header>
      <div className="py-4"> {/*  Tailwind class */}
        <Button variant="outlined">Let's Start</Button>
      </div>
      
    </div>
  );
}

export default App;
