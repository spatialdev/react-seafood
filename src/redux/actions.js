import { store } from './store'
import * as Constants from './constants'

export const setMapData = data => {
  store.dispatch({
    type: Constants.SET_POLYGON_DATA,
    data
  });
}

export const toggleLeftMenu = open => {
  store.dispatch({
    type: Constants.TOGGLE_LEFT_MENU,
    open
  });
}

export const toggleRightMenu = open => {
  store.dispatch({
    type: Constants.TOGGLE_RIGHT_MENU,
    open
  });
}