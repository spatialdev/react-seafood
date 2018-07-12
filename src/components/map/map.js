import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import withWidth from "@material-ui/core/withWidth/index";
import mapboxgl from 'mapbox-gl';
import './map.css';
import {findMyLocation, setBottomDrawerData, toggleBottomDrawer, setMap, selectMapItem} from "../../redux/actions";
import {
  FIND_MY_LOCATION_ERROR,
  FIND_MY_LOCATION_OUT_OF_BOUNDS,
  FIND_MY_LOCATION_SELECT,
  FIND_MY_LOCATION_SUCCESS
} from "../../redux/constants";

mapboxgl.accessToken = 'pk.eyJ1Ijoic3BhdGlhbGRldiIsImEiOiJKRGYyYUlRIn0.PuYcbpuC38WO6D1r7xdMdA';

const styles = theme => ({
  map: {
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      // toolbar height
      top: '56px',
      height: `calc(100% - 56px)`,
    },
    [theme.breakpoints.up('md')]: {
      position: 'relative',
      // 65 = toolbar height
      top: '65px',
      // 280 = left drawer width
      left: '280px',
      height: `calc(100% - 65px)`,
      width: `calc(100% - 280px)`
    },
    [theme.breakpoints.up('lg')]: {
      position: 'relative'
    },
  },
});

class Map extends Component {

  geoLocate = new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: false
  });

  bounds = [
    //southwest
    [-122.38885402679443, 47.66567637286265],
    //northeast
    [-122.37951993942261, 47.6712685277693]
  ];

  componentDidMount() {

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/spatialdev/cjiqnp2s746bw2srrd5uic6t1',
      center: [-122.38473415374757, 47.668667600018416],
      maxBounds: this.bounds,
      zoom: 18
    });

    map.addControl(this.geoLocate);

    // Replace GeolocateControl's _updateCamera function
    // see: https://github.com/mapbox/mapbox-gl-js/issues/6789
    this.geoLocate._updateCamera = this.handleGeolocation;

    // Catch GeolocateControl errors
    this.geoLocate.on('error', this.handleGeolocationError);

    map.on('load', () => {});

    map.on('click', (e) => {
      this.handleMapClick(e);
    });

    // Set Map object in global state
    setMap(map);

  }

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.map}>
        <div ref={el => this.mapContainer = el} className="GL-Map"/>
      </div>
    );
  }

  // Display feature info in bottom panel
  displayFeatureInfo(e, features) {
    const data = features[0].properties;
    const { map } = this.props;

    setBottomDrawerData(data);
    toggleBottomDrawer(true);
    // Record feature selection on google analytics
    selectMapItem(data.name);

    map.setFilter('vendor pins highlight',
      ["all",
        ["!=", "type", "Amusement"],
        ["!=", "type", "Restroom"],
        ["!=", "type", "Entertainment"],
        ["!=", "type", "Info Booth"],
        ["!=", "name", "Seafood Shack"],
        ["!=", "name", "Trident Seafoods Alder-smoked Salmon"],
        ["==", "id", data.id],
        ["!=", "show_icon", true]
      ]);

    map.setLayoutProperty('vendor pins highlight', 'visibility', 'visible');
  }

  /**
   * Overwrite the GeolocateControl _updateCamera function
   * // TODO Don't track user location if out of bounds. Consider going back to custom implementation
   * @param position
   */
  handleGeolocation = (position) => {

    // get geolocation
    const location = new mapboxgl.LngLat(position.coords.longitude, position.coords.latitude);
    const bounds = this.map.getMaxBounds();
    // "Long,Lat"
    let formattedLocation = [location.lng, location.lat].join(",");
    // Report "select" action to google analytics
    findMyLocation({type: FIND_MY_LOCATION_SELECT, payload: null});

    if (bounds) {
      // if geolocation is within maxBounds
      if (location.lng >= bounds.getWest()
        && location.lng <= bounds.getEast()
        && location.lat >= bounds.getSouth()
        && location.lat <= bounds.getNorth()) {

        // Report "success" action to google analytics
        findMyLocation({type: FIND_MY_LOCATION_SUCCESS, payload: formattedLocation});
        // Zoom into user's location
        this.map.fitBounds(location.toBounds(position.coords.accuracy));

      } else {
        // Report "out of bounds" action to google analytics
        findMyLocation({type: FIND_MY_LOCATION_OUT_OF_BOUNDS, payload: formattedLocation});
        // TODO display a helpful message about being outside of bounds
      }
    }
  };

  /**
   * Catch GeolocateErrors and dispatch to middleware
   * see https://developer.mozilla.org/en-US/docs/Web/API/PositionError
   * @param error
   */
  handleGeolocationError = (error: PositionError) => {

    let message;
    switch (error.code) {
      case error.PERMISSION_DENIED:
        message = "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        message = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        message = "The request to get user location timed out.";
        break;
    }

    findMyLocation({type: FIND_MY_LOCATION_ERROR, payload: message})

  }

  handleMapClick = (e) => {

    const { map } = this.props;

    // Fetch map feature from specified layer list.
    // TODO grab this layer list from a configuration
    let features = map.queryRenderedFeatures(e.point, {
      layers: [
        'vendor icons',
        'vendor pins',
        'centroid labels',
        'game icons',
        'entertainment polygons',
        'entertainment polygon outline',
        'vendor pins highlight'
      ]
    });

    if (features.length > 0) {
      this.displayFeatureInfo(e, features);
    }
  }
}

function mapStateToProps(state) {
  return {
    polygonData: state.polygonData,
    active: state.active,
    leftDrawerOptions: state.leftDrawerOptions,
    map: state.map
  };
}

export default connect(mapStateToProps)(withWidth()(withStyles(styles, { withTheme: true })(Map)));
