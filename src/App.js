import React, { Component } from 'react';
import './App.css';

// Components
import Map from './components/map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>CLIMATE:CAPITAL</h1>
        </header>
        <section className="Map">
          <Map/>
        </section>
      </div>
    );
  }
}

export default App;
