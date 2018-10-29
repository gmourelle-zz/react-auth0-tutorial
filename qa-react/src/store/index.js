import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './../store/reducers';

const initialState = {
  countriesGuido: []
};

//es para usar la herramienta de debug. no haria falta esta parte
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
