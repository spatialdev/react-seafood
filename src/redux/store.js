import { createStore, applyMiddleware, compose } from 'redux'
import { reducer } from './reducer'
import { logger } from "../middleware/ga-middleware";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export { store };
