import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContactsThunk = createAsyncThunk(
  "contacts/fetchAll",
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

export const logOut = createAsyncThunk(
  "auth/logOut",
  async (_, thunkApi) => {
    try {
      await axios.post("/logout");
      
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
