import { createStore, compose } from 'redux';
import reducer from './reducer';
import { combineReducers, applyMiddleware } from 'redux';

const reducers = combineReducers({
  dataset: reducer,
});
import thunk from 'redux-thunk';

const composeEnhancers =
  window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);
