import { createStore, applyMiddleware } from 'redux'
import { reducer } from './reducer'
import { logger } from "../middleware/ga-middleware";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
  );

export { store };
