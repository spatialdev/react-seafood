import React, {useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { ThemeProvider } from '@emotion/react';
import { useTheme, Box } from '@mui/material'
import { styled } from '@mui/system';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './map.scss';
import {findMyLocation, setBottomDrawerData, toggleBottomDrawer, setMap, selectMapItem} from "../../redux/actions";
import {
  FIND_MY_LOCATION_ERROR,
  FIND_MY_LOCATION_OUT_OF_BOUNDS,
  FIND_MY_LOCATION_SELECT,
  FIND_MY_LOCATION_SUCCESS
} from "../../redux/constants";
import { config } from '../../config';

mapboxgl.accessToken = config.map.accessToken;


const Map = () => {

  const theme = useTheme()

  const styles = ( theme ) => ({
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
    }
  }}
  );

  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const mapContainer = useRef(null)
  let map = state.map

  const geoLocate = new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true
  });

  useEffect(() => {
    map = new mapboxgl.Map({
      container: mapContainer.current,
      style: config.map.style,
      center: config.map.centroid,
      zoom: 18})

    map.addControl(geoLocate);

    // Replace GeolocateControl's _updateCamera function
    // see: https://github.com/mapbox/mapbox-gl-js/issues/6789
    // geoLocate._updateCamera = handleGeolocation;

    // Catch GeolocateControl errors
    console.log(styles(theme).map)
    geoLocate.on('error', handleGeolocationError);

    map.on('load', () => {});

    map.on('click', (e) => {
      handleMapClick(e, map);
    });

    // Set Map object in global state
    setMap(map);
  }, []);


  // Display feature info in bottom panel
  const displayFeatureInfo = (e, features) => {
    const data = features[0].properties;

    setBottomDrawerData(data);
    toggleBottomDrawer(true);
    // Record feature selection on google analytics
    selectMapItem(data.name);

    map.setFilter('vendor pins highlight',
      ["all",
        ["!=", "type", "Amusement"],
        ["!=", "type", "Restroom"],
        ["!=", "type", "Entertainment"],
        ["!=", "type", "Event Support"],
        ["!=", "name", "Beer Garden Token Sales"],
        ["!=", "name", "Salmon BBQ"],
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
  const handleGeolocation = (position) => {

    // get geolocation
    const location = new mapboxgl.LngLat(position.coords.longitude, position.coords.latitude);
    const bounds = map.getMaxBounds();
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
        map.fitBounds(location.toBounds(position.coords.accuracy));

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
  const handleGeolocationError = (error) => {
    console.log(error)

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
      default:
        message = "Error handling Geolocation button select."
    }

    findMyLocation({type: FIND_MY_LOCATION_ERROR, payload: message})

  }

  const handleMapClick = (e) => {

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
      displayFeatureInfo(e, features);
    }
  }

  return (
    <Box sx={styles(theme).map}>
      <div ref={el => (mapContainer.current = el)} className="GL-Map"/>
    </Box>
  );
}

export default Map;
