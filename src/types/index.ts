import { configureStore } from "@reduxjs/toolkit";
import reducer from "../store/reducer/reducer";

const store = configureStore({
  reducer,
});

export default store;
