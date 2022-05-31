import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addCategory(state, action) {
      const items = [];
      for (const item in action.payload) {
        items.push({ ...item, ammount: 1 });
      }
      state.push({
        items,
      });
    },
  },
});

export const { addCategory } = productsSlice.actions;
export default productsSlice.reducer;
