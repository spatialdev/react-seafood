import { SET_POLYGON_DATA, TOGGLE_RIGHT_MENU, TOGGLE_LEFT_MENU } from './constants'
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
    case SET_POLYGON_DATA:
      return {
        ...state, polygonData
      }
    case TOGGLE_LEFT_MENU:
      return {
        ...state, leftMenuOptions: {
          ...state.leftMenuOptions,
          open: action.open
        }
      }
    case TOGGLE_RIGHT_MENU:
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
