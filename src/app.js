import React, { Component } from 'react';
import { Map } from './components/map/map.js';
import PermanentDrawer from './components/leftMenu/leftMenu';
import logo from './logo.svg';
import './app.css';

class App extends Component {
    state = {
        navOpen: true,
    };

  render() {
      const { navOpen } = this.state;

      return (
      <div className="App">
          <PermanentDrawer
              variant="permanent"
              open={navOpen}
          >
          </PermanentDrawer>

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
