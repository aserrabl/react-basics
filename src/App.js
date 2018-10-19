import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>Header</span>
          <div>Username</div>
        </header>
        <div className={'wrapper'}>
          {/*Revenue block*/}
          <div className={'block'}>
            <div className={'column'}>
              <label>Revenue Yesterday</label>
              <div className={'number'}>1234 €</div>
            </div>
            <div className={'column'}>
              <label>Revenue Today</label>
              <div className={'number'}>5678 €</div>
            </div>
            <div className={'column'}>
              <label>Against yesterday at this time</label>
              <div className={'percentage'}>
                <div className={'icon'}>v</div>
                <div className={'number'}>4%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
