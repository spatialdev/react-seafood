import { config } from '../config';
import { TOGGLE_RIGHT_MENU, TOGGLE_LEFT_MENU } from '../redux/constants';
import ReactGA from 'react-ga';

const logger = store => next => action => {
  console.log('dispatching', action)

  const { type } = action;
  const { event } = config.ga;

  if (type === TOGGLE_RIGHT_MENU)
  {
    // Record right menu button click
    ReactGA.event({
      category: event.ui.CATEGORY,
      action: event.ui.action.RIGHT_MENU_SELECT,
      label: action.open ? 'open' : 'close'
    });

  } else if (type === TOGGLE_LEFT_MENU) {

    // Record left menu button click
    ReactGA.event({
      category: event.ui.CATEGORY,
      action: event.ui.action.LEFT_MENU_SELECT,
      label: action.open ? 'open' : 'close'
    });
  }

  let result = next(action)
  console.log('next state', store.getState())
  return result
}

export { logger }