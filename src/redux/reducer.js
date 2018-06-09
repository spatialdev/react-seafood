import * as Constants from './constants'
import polygonData from '../data/polygons_2017'

const options = [];

const initialState: State = {
  polygonData
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case Constants.SET_POLYGON_DATA:
      return {
        ...state, polygonData
      }
    default:
      return state;
  }
}

export { reducer, initialState };
