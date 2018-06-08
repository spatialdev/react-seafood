import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { Map } from './components/map/map.js';
import { Navbar } from './components/navbar/navbar';
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
          <Navbar></Navbar>
        <div className="Map">
            <Map></Map>
        </div>
      </div>
    );
  }
}

export default App;
