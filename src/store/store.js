import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    productsReducer,
  },
  middleware: customizedMiddleware,
});
