# Ballard Seafood Festival 😛

https://map.seafoodfest.org

The official web application for Ballard's annual Seafood Festival. Using data provided by the Ballard Commons, this interactive map helps folks find their favorite food, music, games, and sponsors at the iconic event.


## Development

- [React 16](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Node & npm](https://www.npmjs.com/)
- [MapboxGL.js](https://docs.mapbox.com/mapbox-gl-js/api/)
- [Mapbox Studio](https://www.mapbox.com/mapbox-studio)

### Application

This project is a Single Page Application (SPA) bootstrapped by [Create React App](https://github.com/facebookincubator/create-react-app).

To get started, clone the repository and install the npm dependences
```bash
npm i
```

Start the local development server
```
npm start
```
The app should be available at http://127.0.0.1:3000

### Data
Mapbox Studio is used to to host the two static geojson files located in src/data.

#### [polygons_2018.json](/src/data/polygons_2018.json)

This is a geojson FeatureCollection that contains location and metadata for for all vendor, entertainment, arts & crafts. Each feature contains a properties object with the following information:

```json
  "properties": {
    "show_label": "true",
    "active": "false",
    "toggleSymb": "keyboard_arrow_up",
    "icon": null, // Dynamic Mapbox style used to render custom icons
    "show_icon": null,
    "details": null,
    "toggleSym1": null,
    "typeDiscrib": null,
    "id": "351", // Unique vendor id
    "name": "Kid's Deck", // Official vendor name
    "size": null,
    "type": "Amusement", // Categorize by feature type (Amusement/Arts/Food) in right panel
    "expired": null,
    "rotate": null, // 
    "left_panel": true // Used to display in left panel
  }
```


#### [polygon_centroids_2018.json](/src/data/polygon_centroids_2018.json)

This geojson file is used to render labels for the Main Stage, VIP area, Beer Garden, etc. These centroids were created using the turf.js [centroid](http://turfjs.org/docs/#centroid) function.


## Testing

/TODO

