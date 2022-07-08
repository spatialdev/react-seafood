/********************
 *
 * Global application configuration
 *
 ********************/

const config = {
  // Google Analytics
  ga: {
    // Global GA identifier
    id: 'UA-80485263-1',
    // Event Category constants
    event: {
      // Vendor click events
      vendor: {
        CATEGORY: 'Vendor',
        action: {
          MAP_CLICK: 'Map Click Select',
          RIGHT_PANEL_VENDOR_SELECT: 'Vendor List Select (Right Panel)',
          LEFT_PANEL_VENDOR_SELECT: 'Featured Vendor Select (Left Panel)'
        }
      },
      // Geolocate "Find Me" button
      geoLocate: {
        CATEGORY: 'GeoLocate',
        action: {
          SELECT: 'Select Geolocate button',
          ERROR: 'Error',
          SUCCESS: 'Get Position Success',
          OUT_OF_BOUNDS: 'Get Position Out of bounds'
        }
      },
      // User interaction w/ interface
      ui: {
        CATEGORY: 'UI Interaction',
        action: {
          RIGHT_MENU_SELECT: 'Right panel open',
          LEFT_MENU_SELECT: 'Left panel open'
        }
      }
    }
  },
  // Mapbox GL
  map: {
    style: 'mapbox://styles/spatialdev/cl5a874rl008b15sbutn54qks',
    accessToken: "pk.eyJ1Ijoic3BhdGlhbGRldiIsImEiOiJjamxuN2kydGIxZzhsM3BwbmNrYmhpaWRkIn0.51uF3UCh8Vpb2M3Y-glu2g",
    centroid: [-122.38473415374757, 47.668667600018416],
    bounds: [
      //southwest
      [-122.38885402679443, 47.66567637286265],
      //northeast
      [-122.37951993942261, 47.6712685277693]
    ]
  }
}

export { config }