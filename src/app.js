import React, { useState, useEffect, Component } from 'react';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import Map from './components/map/map.js';
import BottomSheet from './components/bottomDrawer/bottomDrawer'
import Main from './components/main/main';
import { config } from './config';

import './app.scss';

const App = () => {
  const [state, setState] = useState({ clickedMenuItem: null, polygonData: null });

  useEffect(() => {
    // Initialize Google Analytics
    const { ga } = config;
    ReactGA.initialize(ga.id,{
      debug: process.env.NODE_ENV === 'development',
      titleCase: false
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const handleMenuData = (itemId) => {
    setState({ clickedMenuItem: itemId }, () => {
      console.log(state);
    });
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Main id='main' clickedMenuItem={ handleMenuData } />
        <Map/>
        <BottomSheet/>
      </div>
    </Provider>
  );
}

export default App;
