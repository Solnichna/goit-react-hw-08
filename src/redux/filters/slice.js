import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: "",
    number: "",
  },
};

const filterContact = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilterName: (state, action) => {
      state.filters.name = action.payload;
    },
    changeFilterNumber: (state, action) => {
      state.filters.number = action.payload;
    },
  },
});

export const { changeFilterName } = filterContact.actions;
export const { changeFilterNumber } = filterContact.actions;

export const filterReducer = filterContact.reducer;

export const selectNameFilter = (state) => state.filters.filters.name;
export const selectNumberFilter = (state) => state.filters.filters.number;