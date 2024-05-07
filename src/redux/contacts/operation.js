import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchContactsThunk = createAsyncThunk(
  "contacts/featchAll",
  async (_, thunkApi) => {
    try {
      const res = await axios.get("/contacts");
    
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  "contacts/addContacts",
  async (contact, thunkApi) => {
    try {
      const res = await axios.post(`/contacts`, contact);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const removeContactsThunk = createAsyncThunk(
  "contacts/removeId",
  async (contactId, thunkApi) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      const res = await axios.get(`/contacts`);

      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);