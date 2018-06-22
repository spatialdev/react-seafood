import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import Map from './components/map/map.js';
import RightMenu from './components/rightMenu/rightMenu';
import PersistentDrawer from './components/leftMenuTopNav/leftMenu';
import {toggleRightMenu} from "./redux/actions";

import './app.css';

class App extends Component {
  state = {
    clickedMenuItem: null,
    polygonData: null,
  };

  componentDidMount() {}

  handleMenuData = (itemId) => {
    this.setState({ clickedMenuItem: itemId }, () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PersistentDrawer clickedMenuItem={this.handleMenuData} />
          <RightMenu/>
          <Map/>
        </div>
      </Provider>
    );
  }
}

export default App;
