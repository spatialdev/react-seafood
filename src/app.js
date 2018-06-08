import React, { Component } from 'react';
import { Map } from './components/map/map.js';
import PermanentDrawer from './components/leftMenu/leftMenu';
import { Navbar } from './components/navbar/navbar';
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
        <Navbar/>
        <Map/>
      </div>
    );
  }
}

export default App;
