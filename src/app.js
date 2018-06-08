import React, { Component } from 'react';
import Map from './components/map/map.js';
import PersistentDrawer from './components/leftMenuTopNav/leftMenu';
import './app.css';
import polygons from './data/polygons_2017.geojson';
import axios from 'axios';

class App extends Component {
  state = {
    clickedMenuItem: null,
    polygonData: null,
  };

  componentDidMount() {
    return axios.get(polygons)
      .then((res) => {
        this.setState({ polygonData: res.data });
      });
  }

  handleMenuData = (itemId) => {
    this.setState({ clickedMenuItem: itemId }, () => {
      console.log(this.state);
    });
  };

  render() {
    const { polygonData } = this.state;
    if (!polygonData) {
      return <div>Loading...</div>;
    }
    return (
      <div className="App">
        <PersistentDrawer clickedMenuItem={this.handleMenuData} polygonData={polygonData}/>
        <Map/>
      </div>
    );
  }
}

export default App;
