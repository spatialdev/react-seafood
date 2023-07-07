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

#### [polygons_2022.json](/src/data/polygons_2022.json)

This is a geojson FeatureCollection that contains location and metadata for for all vendor, entertainment, arts & crafts. Each feature contains a properties object with the following information

```json
      "properties": {
        "id": 9993,
        "left_panel": "true",
        "name": "Salmon BBQ",
        "rotate": "90",
        "show_icon": "false",
        "show_label": "true",
        "type": "Food Vendor"
      }
```


#### [polygon_centroids_2022.json](/src/data/polygon_centroids_2022.json)

This geojson file is used to render labels for the Main Stage, VIP area, Beer Garden, etc at the centroid of their representative polygons. 
