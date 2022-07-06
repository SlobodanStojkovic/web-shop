import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProducts(state, action) {
      const items = [];
      action.action.forEach(function (item) {
        items.push({ ...item, amount: 1 });
      });
      state = items;
      return [...state];
    },
  },
});

export const { addProducts } = productsSlice.actions;
export default productsSlice.reducer;
