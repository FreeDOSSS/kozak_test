import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

// Сдеать миделвар для проверки ошибок с сервера

const middleware = [thunk];

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(rootReducer, enhancer);
export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
