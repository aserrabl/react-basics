import React from 'react';
import './App.css';
import Block from "./Block";


const data = {
  first: [
    {text: 'Revenue yesterday:', number: 1234},
    {text: 'Revenue today:', number: 5678},
    {text: 'Against yesterday at this time:', number: -4, icon: true},
  ],
  second: [
    {text: 'Profit yesterday:', number: 4567},
    {text: 'profit today:', number: 5043},
    {text: 'Against yesterday at this time:', number: 10, icon: true},
  ],
  third: [
    {text: 'Month profit:', number: 837432},
    {text: 'Month daily profit average:', number: 123739},
    {text: 'Today profit against average:', number: 10, icon: true},
  ]
};

const App = () =>
  (<div className="App">
    <header className="App-header">
      <span>Header</span>
      <div>Username</div>
    </header>
    <div className={'wrapper'}>
      {
        Object.keys(data)
          .map((i) =>
            <Block
              key={i}
              columns={data[i]}/>)
      }
    </div>
  </div>);


export default App;
