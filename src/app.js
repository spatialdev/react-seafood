import React, { Component } from 'react';
import Map from './components/map/map.js';
import RightMenu from './components/rightMenu/rightMenu';
import PersistentDrawer from './components/leftMenuTopNav/leftMenu';
import './app.css';

class App extends Component {
  state = {
    clickedMenuItem: null,
  };

  handleMenuData = (itemId) => {
    this.setState({ clickedMenuItem: itemId }, () => {
      console.log(this.state);
    });
  };

  render() {

    return (
      <div className="App">
        <RightMenu/>
        <PersistentDrawer clickedMenuItem={this.handleMenuData}/>
        <Map/>
      </div>
    );
  }
}

export default App;
