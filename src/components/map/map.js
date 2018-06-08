import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import windowSize from 'react-window-size';
import './map.css';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic3BhdGlhbGRldiIsImEiOiJKRGYyYUlRIn0.PuYcbpuC38WO6D1r7xdMdA';

class Map extends Component {

  state = {
    viewport: {
      latitude: 40,
      longitude: -100,
      zoom: 3,
      bearing: 0,
      pitch: 0
    }
  };

  render() {

    this.state.viewport =
      {
        ...this.state.viewport,
        width: this.props.windowWidth,
        height: this.props.windowHeight
      };

    return (
      <div className="Map">
        <ReactMapGL mapboxApiAccessToken={MAPBOX_TOKEN}
                    {...this.state.viewport}
                    onViewportChange={(viewport) => this.setState({ viewport })}
        />
      </div>
    );
  }
}

export default windowSize(Map);
