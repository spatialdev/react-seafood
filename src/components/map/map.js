import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import { inside, point, polygon } from '@turf/turf';
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
    },
    trackUserLocation: true,
  };

  // TODO
  bounds = [
    //southwest
    [-122.38885402679443, 47.66567637286265],
    //northeast
    [-122.37951993942261, 47.6712685277693]
  ];

  componentDidMount() {

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/spatialdev/cj44jbnm59nnq2rmrzd5ozf36',
      center: [-122.38473415374757, 47.668667600018416],
      // maxBounds: this.bounds,
      zoom: 18
    });

    const geoLocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: this.state.trackUserLocation,
    });

    this.map.addControl(geoLocate);

    geoLocate.on('geolocate', (e) => {
      this.handleGeolocation(e);
    });

    this.map.on('load', () => {
    });

    this.map.on('click', (e) => {

      // Fetch map feature from specified layer list.
      // TODO grab this layer list from a configuration
      let features = this.map.queryRenderedFeatures(e.point, {
        layers: [
          'vendor icons',
          'vendor pins',
          'centroid labels',
          'game icons',
          'entertainment polygons',
          'vendor pins highlight'
        ]
      });

      if (features.length > 0) {
        this.handleMapPopup(e, features);
      }
    });
  }

  render() {

    return (
      <div className="Map">
        <div ref={el => this.mapContainer = el} className="GL-Map"/>
      </div>
    );
  }

  // Render map pop up on click
  handleMapPopup(e, features) {
    const coordinates = e.lngLat;
    const html = this.createPopupHTML(features[0].properties);

    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(html)
      .addTo(this.map);
  }

  createPopupHTML(properties) {
    return `
        <p>
            ${properties.id}</br>
            ${properties.name}</br>
            ${properties.type}
        </p>

       `;
  }

  handleGeolocation = (position) => {
    if ('geolocation' in navigator) {
      /* geolocation is available */

      navigator.geolocation.getCurrentPosition(position => {

        let marker = (<div id="Dot"></div>);

        let myMarkerLocation = new mapboxgl.Marker(marker)
          .setLngLat([position.coords.longitude, position.coords.latitude])
          .addTo(this.map);
      });

      // check if position is within the bounds of the map
      let pt = point([position.coords.longitude, position.coords.latitude]);
      let poly = polygon([[[-122.3892831802368, 47.66561856968346], [-122.37885475158693, 47.66561856968346], [-122.37885475158693, 47.671889841329026], [-122.3892831802368, 47.671889841329026], [-122.3892831802368, 47.66561856968346]]]);

      let isInside = inside(pt, poly);

      if (isInside) {
        this.map.flyTo({
          center: [position.coords.longitude, position.coords.latitude],
          zoom: 19.7
        });
      } else {
        alert('Location is outside Seafood Fest bounds. Try again.');
        this.setState({ trackUserLocation: false });
      }
    } else {
      alert('Location information is unavailable.');
    }
  };
}

export default windowSize(Map);
