import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  number: "",
};

const filterContact = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilterName: (state, action) => {
      state.name = action.payload;
    },
    changeFilterNumber: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const { changeFilterName, changeFilterNumber } = filterContact.actions;

export const filterReducer = filterContact.reducer;

export const selectNameFilter = (state) => state.filters.name;
export const selectNumberFilter = (state) => state.filters.number;
