import { config } from '../config';
import {
  TOGGLE_RIGHT_DRAWER, TOGGLE_LEFT_DRAWER,
  FIND_MY_LOCATION_ERROR,
  FIND_MY_LOCATION_SUCCESS,
  FIND_MY_LOCATION_OUT_OF_BOUNDS,
  FIND_MY_LOCATION_SELECT
} from '../redux/constants';
import ReactGA from 'react-ga';

const logger = store => next => action => {
  console.log('dispatching', action)

  const { type } = action;
  const { event } = config.ga;

  //TODO case statement ????
  if (type === TOGGLE_RIGHT_DRAWER)
  {
    // Record right menu button click
    ReactGA.event({
      category: event.ui.CATEGORY,
      action: event.ui.action.RIGHT_MENU_SELECT,
      label: action.open ? 'open' : 'close'
    });

  } else if (type === TOGGLE_LEFT_DRAWER) {

    // Record left menu button click
    ReactGA.event({
      category: event.ui.CATEGORY,
      action: event.ui.action.LEFT_MENU_SELECT,
      label: action.open ? 'open' : 'close'
    });

  } else if (type === FIND_MY_LOCATION_ERROR
    || type === FIND_MY_LOCATION_SUCCESS
    || type === FIND_MY_LOCATION_OUT_OF_BOUNDS
    || type === FIND_MY_LOCATION_SELECT) {

    // All geolocate events start with "FIND_MY_LOCATION_". The suffix corresponds to the action type in
    // config.js under ga.geoLocate
    let prefix = 'FIND_MY_LOCATION_';
    let locationAction = action.type.substr(prefix.length, action.type.length);

    let eventOptions = {
      category: event.geoLocate.CATEGORY,
      action: event.geoLocate.action[locationAction],
      label: action.payload
    }

    // Delete label if payload is null
    if (action.payload === null) delete event.label

    ReactGA.event(eventOptions);

  }

  let result = next(action)
  console.log('next state', store.getState())
  return result
}

export { logger }