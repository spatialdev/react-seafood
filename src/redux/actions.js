import { store } from './store'
import { SET_POLYGON_DATA, TOGGLE_LEFT_MENU, TOGGLE_RIGHT_MENU } from './constants'

export const setMapData = data => {
  store.dispatch({
    type: SET_POLYGON_DATA,
    data
  });
}

export const toggleLeftMenu = open => {
  store.dispatch({
    type: TOGGLE_LEFT_MENU,
    open
  });
}

export const toggleRightMenu = open => {
  store.dispatch({
    type: TOGGLE_RIGHT_MENU,
    open
  });
}