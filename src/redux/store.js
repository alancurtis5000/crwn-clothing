import { createStore, applyMiddleware } from "redux";
// redux-persist is used for persiting data on localstorage , or session storage
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);