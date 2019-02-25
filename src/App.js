import React, { Component } from 'react';
import './App.css';

// Components
import Map from './components/map';
import ModalCapital from './components/modal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      data: {}
    }
  }

  onHandlerModal = (e) => {
    this.setState({showModal: !this.state.showModal})
  }

  onHandlerMap= (climate) => {
    this.setState({showModal: !this.state.showModal, data: climate.data})
  }

  render() {
    return (
      <div className="App">
        <ModalCapital visible={this.state.showModal} onmodal={this.onHandlerModal} climate={this.state.data}/>
        <header className="App-header">
          <h1>CLIMATE:CAPITAL</h1>
        </header>
        <section className="Map">
          <Map handlermap={this.onHandlerMap}/>
        </section>
      </div>
    );
  }
}

export default App;
