import * as Constants from './constants'
import polygonData from '../data/polygons_2017'
import { isBrowser } from 'react-device-detect';

const initialState: State = {
  polygonData,
  leftMenuOptions: {
    anchor: 'left',
    open : isBrowser
  },
  rightMenuOptions: {
    anchor: 'right',
    open: false
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case Constants.SET_POLYGON_DATA:
      return {
        ...state, polygonData
      }
    case Constants.TOGGLE_LEFT_MENU:
      return {
        ...state, leftMenuOptions: {
          ...state.leftMenuOptions,
          open: action.open
        }
      }
    case Constants.TOGGLE_RIGHT_MENU:
      return {
        ...state, rightMenuOptions: {
          ...state.rightMenuOptions,
          open: action.open
        }
      }
    default:
      return state;
  }
}

export { reducer, initialState };
