import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  fetchContactsThunk,
  addContactsThunk,
  removeContactsThunk,
} from "./contactsOps.js";

import { selectNameFilter } from "../filters/filtersSlice.js";
import { selectNumberFilter } from "../filters/filtersSlice.js";

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
  typeof action.type === "string" && action.type.endsWith("/pendding");
const isRejected = (action) =>
  typeof action.type === "string" && action.type.endsWith("/rejected");

const pendingReducer = (state) => {
  state.loading = true;
  state.error = null;
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })

      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })

      .addCase(removeContactsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })

      .addMatcher(isPending, pendingReducer)
      .addMatcher(isRejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
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