import { SET_POLYGON_DATA, SET_BOTTOM_DRAWER_DATA, TOGGLE_RIGHT_DRAWER, TOGGLE_LEFT_DRAWER, TOGGLE_BOTTOM_DRAWER, SET_TAB_VALUE } from './constants'
import polygonData from '../data/polygons_2018'
import { isBrowser } from 'react-device-detect';

const initialState: State = {
  polygonData,
  leftDrawerOptions: {
    anchor: 'left',
    open : true
  },
  rightDrawerOptions: {
    anchor: 'right',
    open: false,
    tabs: {
      index: 0,
      name: 'All'
    }
  },
  bottomDrawer: {
    options: {
      anchor: 'bottom',
      open: false,
    },
    data: {}
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_POLYGON_DATA:
      return {
        ...state, polygonData
      }
    case SET_BOTTOM_DRAWER_DATA:
      return {
        ...state, bottomDrawer: {
          ...state.bottomDrawer,
          data: action.data
        }
      }
    case TOGGLE_LEFT_DRAWER:
      return {
        ...state, leftDrawerOptions: {
          ...state.leftDrawerOptions,
          open: action.open
        }
      }
    case TOGGLE_RIGHT_DRAWER:
      return {
        ...state, rightDrawerOptions: {
          ...state.rightDrawerOptions,
          open: action.open
        }
      }
    case TOGGLE_BOTTOM_DRAWER:
      return {
        ...state, bottomDrawer: {
          ...state.bottomDrawer,
          options: {
            ...state.bottomDrawer.options,
            open: action.open
          }
        }
      }
    case SET_TAB_VALUE:
      return {
        ...state, rightDrawerOptions: {
          ...state.rightDrawerOptions,
          tabs: action.tabs
        }
      }
    default:
      return state;
  }
}

export { reducer, initialState };
