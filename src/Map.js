import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic3BhdGlhbGRldiIsImEiOiJKRGYyYUlRIn0.PuYcbpuC38WO6D1r7xdMdA';

export class Map extends Component {

    state = {
        viewport: {
            latitude: 40,
            longitude: -100,
            zoom: 3,
            bearing: 0,
            pitch: 0,
            width: 500,
            height: 500
        }
    };

    render() {
        return (
            <ReactMapGL mapboxApiAccessToken={MAPBOX_TOKEN}
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
            />
        );
    }
}