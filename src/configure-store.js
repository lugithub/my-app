import { createStore, compose } from "redux";

import { rootReducer } from "./root-reducer";

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(rootReducer, composeEnhancers()); 
}