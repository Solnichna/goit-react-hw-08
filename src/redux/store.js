
import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contacts/contactsSlice.js";
import { filterReducer } from "./filters/filtersSlice.js";
import { authReducer } from "./authorisation/slice.js";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persisteReducer = persistReducer(authPersistConfig, authReducer);

const rootReducer = combineReducers({
  contacts: contactReducer,
  auth: persisteReducer,
  filters: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);

export default store;
