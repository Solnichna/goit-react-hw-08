import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  fetchContactsThunk,
  addContactsThunk,
  removeContactsThunk,
} from "./operations.js";

import { selectNameFilter, selectNumberFilter } from "../filters/slice.js";

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: "",
  },
};

const isPending = (action) =>
  typeof action.type === "string" && action.type.endsWith("/pending");
const isRejected = (action) =>
  typeof action.type === "string" && action.type.endsWith("/rejected");

const pendingReducer = (state) => {
  state.contacts.loading = true;
  state.contacts.error = null;
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
      })
      .addCase(removeContactsThunk.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addMatcher(isPending, pendingReducer)
      .addMatcher(isRejected, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
      });
  },
});

export const selectContacts = (state) => state.contacts.items;

export const contactReducer = contactSlice.reducer;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectNumberFilter],
  (contacts, filterName, filterNumber) => {
    if (!filterName && !filterNumber) return contacts;

    let filteredContacts = contacts;

    if (filterName) {
      filteredContacts = filteredContacts.filter((contact) =>
        contact.name.toLowerCase().includes(filterName.toLowerCase())
      );
    }
    if (filterNumber) {
      filteredContacts = filteredContacts.filter((contact) =>
        contact.number.includes(filterNumber)
      );
    }

    return filteredContacts;
  }
);
