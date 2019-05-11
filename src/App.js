import React from 'react';
import styled from 'styled-components';

import logo from './logo.svg';
import './App.css';

const MyButton = styled.button`
  border: 2px solid;
  padding: 2em;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          lo
        </a>
        <MyButton>Hello</MyButton>
      </header>
    </div>
  );
}

export default App;
