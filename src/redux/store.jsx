import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import myReducer from './reducers';
import storage from "redux-persist/lib/storage"

// import rootReducer from './rootReducer';
const persistConfig = {
    key: "SS",
    storage,
}

const rootReducer = combineReducers({ data: myReducer });

export const store = createStore(
    persistReducer(persistConfig, rootReducer),
    // composeWithDevTools(),
);


export const presisted = persistStore(store);