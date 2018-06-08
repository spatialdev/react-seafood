import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { Map } from './components/map/map.js';
import logo from './logo.svg';
import './app.css';

class App extends Component {
    state = {
        open: true,
        anchor: 'left',
    };

  render() {

      const { anchor, open } = this.state;

      return (
      <div className="App">
          <Drawer
              variant="persistent"
              anchor={anchor}
              open={open}
          >
              cool stuff in here
          </Drawer>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="Map">
            <Map></Map>
        </div>
      </div>
    );
  }
}

export default App;
