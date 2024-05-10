import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contacts/slice.js";
import { filterReducer } from "./filters/slice.js";
import { authReducer } from "./auth/slice.js";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    auth: persistedAuthReducer,
    filters: filterReducer,
  },
});

export const persistor = persistStore(store);

export default store;
