import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const Register = createAsyncThunk(
  "auth/register",
  async (arg, thunkApi) => {
    try {
      const res = await axios.post("/users/signup", arg);
      console.log(res);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const Login = createAsyncThunk("auth/login", async (arg, thunkApi) => {
  try {
    const res = await axios.post("/users/login", arg);

    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const LogOut = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
    return;
  } catch (error) {
    clearAuthHeader();
    return thunkApi.rejectWithValue(error.message);
  }
});

export const RefreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkApi.rejectWithValue();
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("/users/current");
      console.log(res);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);