import React from 'react';
import './App.css';
import Block from "./Block";

const App = () =>
  (<div className="App">
    <header className="App-header">
      <span>Header</span>
      <div>Username</div>
    </header>
    <div className={'wrapper'}>
      <Block/>
      <Block/>
      <Block/>
    </div>
  </div>);


export default App;
