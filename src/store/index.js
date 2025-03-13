import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "./counterSlice";
import authReducers from "./authSlice";

const store = configureStore({
  reducer: {
    counter: counterReducers,
    auth: authReducers,
  },
});

export default store;
