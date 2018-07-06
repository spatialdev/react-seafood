import { store } from './store'
import { SET_POLYGON_DATA, SET_BOTTOM_DRAWER_DATA, TOGGLE_LEFT_DRAWER, TOGGLE_RIGHT_DRAWER, TOGGLE_BOTTOM_DRAWER, SET_TAB_VALUE } from './constants'

export const setMapData = data => {
  store.dispatch({
    type: SET_POLYGON_DATA,
    data
  });
}

export const setBottomDrawerData = data => {
  store.dispatch({
    type: SET_BOTTOM_DRAWER_DATA,
    data
  });
}

export const toggleLeftDrawer = open => {
  store.dispatch({
    type: TOGGLE_LEFT_DRAWER,
    open
  });
}

export const toggleRightDrawer = open => {
  store.dispatch({
    type: TOGGLE_RIGHT_DRAWER,
    open
  });
}

export const toggleBottomDrawer = open => {
  store.dispatch({
    type: TOGGLE_BOTTOM_DRAWER,
    open
  });
}

export const findMyLocation = action => {
  store.dispatch({
    type: action.type,
    payload: action.payload
  })
}

export const setTabValue = tabs => {
  store.dispatch({
    type: SET_TAB_VALUE,
    tabs
  });
}