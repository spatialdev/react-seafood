import React, { Component } from 'react';
import { Map } from './components/map/map.js';
import PermanentDrawer from './components/leftMenu/leftMenu';
import { Navbar } from './components/navbar/navbar';
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
        <PermanentDrawer
          variant="permanent"
          clickedMenuItem={this.handleMenuData}
        >
        </PermanentDrawer>
        <Navbar/>
        <Map/>
      </div>
    );
  }
}

export default App;
