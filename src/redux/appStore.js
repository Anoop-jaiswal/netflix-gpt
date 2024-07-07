import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movoies: moviesReducer,
  },
});

export default appStore;
