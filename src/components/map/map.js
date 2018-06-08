import React, {Component} from 'react';
import { BottomSheet } from 'material-ui-bottom-sheet'
import mapboxgl from 'mapbox-gl'
import windowSize from 'react-window-size';
import './map.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoic3BhdGlhbGRldiIsImEiOiJKRGYyYUlRIn0.PuYcbpuC38WO6D1r7xdMdA';

class Map extends Component {

  map;

  state = {
    viewport: {
      latitude: 47.668667600018416,
      longitude: -122.38473415374757,
      zoom: 18,
      bearing: 0,
      pitch: 0
    }
  };

  // TODO
  bounds = [
    //s outhwest
    [ -122.38885402679443, 47.66567637286265],
    //northeast
    [ -122.37951993942261, 47.6712685277693]
  ];

  componentDidMount() {

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/spatialdev/cj44jbnm59nnq2rmrzd5ozf36',
      center: [-122.38473415374757, 47.668667600018416],
      maxBounds: this.bounds,
      zoom: 18
    });

    this.map.on('load', () => {});

    this.map.on('click', (e) => {

      // Fetch map feature from specified layer list.
      // TODO grab this layer list from a configuration
      let features = this.map.queryRenderedFeatures(e.point, {layers: [
          'vendor icons',
          'vendor pins',
          'centroid labels',
          'game icons',
          'entertainment polygons',
          'vendor pins highlight'
        ]});

      if (features.length > 0) {
        this.handleMapPopup(e, features)
      }
    })
  }

  render() {

    return (
      <div className="Map">
        <div ref={el => this.mapContainer = el} className="GL-Map" />
      </div>
    );
  }

  // Render map pop up on click
  handleMapPopup (e, features) {
    const coordinates = e.lngLat;

    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(JSON.stringify(features[0].properties))
      .addTo(this.map);
  }
}

export default windowSize(Map);
